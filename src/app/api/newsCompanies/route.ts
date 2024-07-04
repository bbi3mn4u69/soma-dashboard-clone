import Parser from "rss-parser";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import * as cheerio from "cheerio";
import {
  url,
  getCompaniesName,
  stripHtml,
  escapeRegExp,
  formatPubDate,
} from "./routeHelper";
import axios from "axios";


export async function GET() {
  const parser = new Parser();
  const feedsPromises = url.map((link) =>
    parser.parseURL(link).then((feed) => ({ link, feed })),
  );
  const feeds = await Promise.all(feedsPromises);

  // Retrieve company names and IDs from the database
  const companies = await getCompaniesName();

  if (!companies) {
    return NextResponse.json({ message: "No companies found" });
  }

  const companyNames = companies.map((c) => ({
    name: c.name,
    id: c.id,
    url: c.websiteUrl,
  }));

  // Filter feeds and map articles to companies using regex for whole word matching
  const articlesToSave = await Promise.all(
    feeds.flatMap(async ({ link, feed }) => {
      const providerName = feed.title;
      const logoUrl: string = feed.image?.url ?? feed.icon ?? feed.logo; // eslint-disable-line
      return await Promise.all(
        feed.items.flatMap(async (item) => {
          const articleContent = await fetchArticleInsideLink(item.link ?? "");
          return companyNames
            .filter((company) => {
              const urlRegex = new RegExp(`\\b${escapeRegExp(company.url)}\\b`);
              return articleContent.some(content => urlRegex.test(content ?? ""));
            })
            .map((company) => ({
              companyId: company.id,
              companyName: company.name,
              articleContent: stripHtml(item.content ?? ""),
              articleTitle: item.title,
              articleUrl: item.link,
              publishedAt: formatPubDate(item.pubDate ?? ""),
              source: link,
              logoUrl: logoUrl,
              providerName: providerName,
            }));
        }),
      );
    }),
  );
  const filteredArticlesToSave = articlesToSave.flat().filter(article => Object.keys(article).length > 0);

  return NextResponse.json(filteredArticlesToSave);
}
async function fetchArticleInsideLink(
  url: string,
  retries: number = 5,
  backoff: number = 5000,
): Promise<string[]> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
    const html: string = response.data;
    const $ = cheerio.load(html);
    const links: string[] = [];

    $('body a').each((index, element) => {
      const href = $(element).attr('href');
      if (href && href.startsWith('https://')) { 
        links.push(href);
      }
    });
    return links;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`AxiosError for URL ${url}: ${error.message}`);
      if (error.response) {
        console.log(`Status code: ${error.response.status}`);
        if ((error.response.status === 403 || error.response.status === 429) && retries > 0) {
          const jitter = Math.random() * 1000; 
          const newBackoff = error.response.status === 429 ? backoff * 2 : backoff;
          console.log(`Retrying ${url} in ${newBackoff + jitter}ms... (${retries} retries left)`);
          await new Promise(res => setTimeout(res, newBackoff + jitter));
          return fetchArticleInsideLink(url, retries - 1, newBackoff * 2);
        }
      }
    } else {
      console.log(`Error for URL ${url}: ${error}`);
    }
  }
  return [];
}
  // TODO: upsert by url
