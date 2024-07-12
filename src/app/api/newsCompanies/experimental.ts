// import Parser from "rss-parser";
// import { NextResponse } from "next/server";
// import { db } from "~/server/db";
// import puppeteer from "puppeteer-extra";
// import { Browser } from "puppeteer";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// import { Cluster } from "puppeteer-cluster";
// import {
//   url,
//   getCompaniesName,
//   stripHtml,
//   escapeRegExp,
//   formatPubDate,
// } from "./routeHelper";
// import pLimit from "p-limit";

// puppeteer.use(StealthPlugin());

// export async function GET() {
//   const parser = new Parser();
//   const feedsPromises = url.map((link) =>
//     parser.parseURL(link).then((feed) => ({ link, feed })),
//   );
//   const feeds = await Promise.all(feedsPromises);
//   const companies = await getCompaniesName();

//   if (!companies) {
//     return NextResponse.json({ message: "No companies found" });
//   }

//   const AllCompanies = companies.map((c) => ({
//     name: c.name,
//     id: c.id,
//     url: c.websiteUrl,
//   }));

//   const browser = await puppeteer.launch({
//     headless: true,
//     defaultViewport: null,
//     args: [
//       "--disable-gpu",
//       "--disable-dev-shm-usage",
//       "--disable-setuid-sandbox",
//       "--no-first-run",
//       "--no-sandbox",
//       "--no-zygote",
//       "--deterministic-fetch",
//       "--disable-features=IsolateOrigins",
//       "--disable-site-isolation-trials",
//     ],
//   });
//   let count = 0;

//   const limit = pLimit(1); // Limit to 1 concurrent request
//   const matchingArticles = [];

//   for (const { feed } of feeds) {
//     for (const item of feed.items) {
//       const article = await limit(() =>
//         processArticle(browser, item, AllCompanies),
//       );
//       if (article) {
//         matchingArticles.push(article);
//       }
//     }
//   }

//   await browser.close();

//   // const filteredArticles = matchingArticles.filter((article) => article !== null);a

//   return NextResponse.json(matchingArticles);
// }

// async function processArticle(browser: Browser, item: any, companies: any[]) {
//   for (const company of companies) {
//     console.log("working on " + company.url);
//     const articleContent = await fetchArticleInsideLink(
//       browser,
//       item.link!,
//       company.url,
//     );
//     if (articleContent) {
//       return {
//         title: item.title,
//         link: item.link,
//         publishedDate: item.pubDate || item.isoDate,
//         companyName: company.name,
//       };
//     }
//   }
//   return null;
// }

// async function fetchArticleInsideLink(
//   browser: Browser,
//   url: string,
//   companyUrl: string,
// ): Promise<boolean> {
//   try {
//     console.log("working on " + url);

//     const cluster = await Cluster.launch({
//       concurrency: Cluster.CONCURRENCY_CONTEXT,
//       maxConcurrency: 2,
//     });

//     const page = await browser.newPage();

//     await page.setUserAgent(
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
//     ),

//       await new Promise((resolve) =>
//         setTimeout(resolve, 1000 + Math.random() * 2000),
//       ),
//       await page.setDefaultNavigationTimeout(30000), // 30 seconds timeout
//       await page.setRequestInterception(true),
//       page.on("request", (req) => {
//         if (["image", "stylesheet", "font"].includes(req.resourceType())) {
//           req.abort();
//         } else {
//           req.continue();
//         }
//       }),

//       await page.goto(url, {
//         waitUntil: ["domcontentloaded", "networkidle0"],
//         timeout: 60000, // Increase timeout to 60 seconds
//       }),

//       await page.waitForSelector("body a"),
 
//       await new Promise((resolve) =>
//         setTimeout(resolve, 2000 + Math.random() * 3000),
//       );
//     const hasMatchingLink = await page.evaluate((companyUrl) => {
//       const anchorElements = Array.from(document.querySelectorAll("body a"));
//       return anchorElements.some((a) =>
//         (a as HTMLAnchorElement).href.startsWith(companyUrl),
//       );
//     }, companyUrl);

//     await new Promise((resolve) =>
//       setTimeout(resolve, 1000 + Math.random() * 1000),
//     );

//     return hasMatchingLink;
//   } catch (error) {
//     console.log(`Error for URL ${url}: ${error}`);
//     return false;
//   }
// }


// // export async function GET () {
// //   return NextResponse.json({ error: 'Failed to fetch links' });
// // }


// const () => {}