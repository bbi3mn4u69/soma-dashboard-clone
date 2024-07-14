import { ScrapflyClient, ScrapeConfig, ScrapeResult } from "scrapfly-sdk";
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import Parser from "rss-parser";
import { extractFeedItems, getCompaniesName, url } from "./routeHelper";
import { db } from "~/server/db";

const scrapfly = new ScrapflyClient({
  key: process.env.NEXT_PUBLIC_SCRAPEFLY_API_KEYS!,
});

const parser = new Parser();

const extractLinks = (html: string) => {
  const $ = cheerio.load(html);
  const links: string[] = [];
  $("body a").each((_, element) => {
    const href = $(element).attr("href");
    if (href && href.startsWith("https:")) links.push(href); //eslint-disable-line
  });
  return links;
};

const scrapeUrl = async (url: string) => {
  console.log(`Processing URL: ${url}`);
  try {
    const result: ScrapeResult = await scrapfly.scrape(
      new ScrapeConfig({
        url: url,
        method: "GET",
        headers: {
          "X-Csrf-Token": "1234",
        },
        debug: true,
        cache: true,
        cache_ttl: 3600,
        asp: true,
        country: "US,CA,FR",
        render_js: true,
        wait_for_selector: "body",
      }),
    );

    const html = result.result.content;
    return extractLinks(html);
  } catch (error: any) {  //eslint-disable-line
    console.error(`Error scraping ${url}: ${error.message}`); //eslint-disable-line
    console.error(`Status code: ${error.response?.status || "Unknown"}`); //eslint-disable-line
    return [];
  }
};

const urlMatches = (companyUrl: string, articleUrl: string): boolean => {
  try {
    const companyUrlObj = new URL(companyUrl);
    const articleUrlObj = new URL(articleUrl);

    // Remove 'www.' from hostnames
    const companyDomain = companyUrlObj.hostname.replace(/^www\./, "");
    const articleDomain = articleUrlObj.hostname.replace(/^www\./, "");

    // Check if domains match
    if (companyDomain !== articleDomain) {
      return false;
    }

    // Check if paths and search params match
    return (
      companyUrlObj.pathname + companyUrlObj.search ===
      articleUrlObj.pathname + articleUrlObj.search
    );
  } catch (error) {
    console.error(`Error comparing URLs: ${error}`); //eslint-disable-line
    return false;
  }
};

export async function GET(request: Request) {
  try {
    const isCronJob = request.headers.get('Host') === 'api.cron-job.org';

    if (process.env.NODE_ENV === 'production' && !isCronJob) {
      return NextResponse.json("Skipping scraping in production environment");
    }
    if (isCronJob){
      NextResponse.json("Cron job started");
    }
      

    const feedItems = await extractFeedItems(url, parser);

    type CompanyNewsItem = {
      companyName: string;
      title: string;
      link: string;
      pubDate: string;
    };

    const companyResults: Record<string, CompanyNewsItem[]> = {};
    

    for (const item of feedItems) {
      if (item.link && item.title) {
        try {
          const links = await scrapeUrl(item.link);
          const companies = await getCompaniesName();
          for (const company of companies!) {
            if (company?.websiteUrl) {
              const matchingLinks = links.filter((link) =>
                urlMatches(company.websiteUrl, link),
              );
              if (matchingLinks.length > 0) {
                if (!companyResults[company.id || ""]) {
                  companyResults[company.id ?? ""] = [];
                }

                companyResults[company.id ?? ""]?.push({
                  companyName: company.name,
                  title: item.title,
                  link: item.link,
                  pubDate: item.pubDate,
                });
                console.log("pushing" + company.name +"in the database, found match!")
                await db.companyNews.upsert({
                    where: {
                        url: item.link
                    }, 
                    update: {
                        companyId: company.id,
                        companyRelated: company.name,
                        title: item.title,
                        publishedAt: item.pubDate,
                        url: item.link
                    },
                    create: {
                        companyId: company.id,
                        companyRelated: company.name,
                        title: item.title,
                        publishedAt: item.pubDate,
                        url: item.link
                    }
                })
              }
            }
          }
        } catch (error) {
          console.error(`Failed to process article: ${item.title}`);
        }
      }
    }

    return NextResponse.json("all good");
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
