// import Parser from "rss-parser";
// import { NextRequest, NextResponse } from "next/server";
// import { db } from "~/server/db";
// import puppeteer from 'puppeteer';
// import * as cheerio from "cheerio";
// import {
//   url,
//   getCompaniesName,
//   stripHtml,
//   escapeRegExp,
//   formatPubDate,
// } from "./routeHelper";
// import axios from "axios";

// export async function GET() {
//   const parser = new Parser();
//   const feedsPromises = url.map((link) =>
//     parser.parseURL(link).then((feed) => ({ link, feed })),
//   );
//   const feeds = await Promise.all(feedsPromises);

//   // Retrieve company names and IDs from the database
//   const companies = await getCompaniesName();

//   if (!companies) {
//     return NextResponse.json({ message: "No companies found" });
//   }

//   const companyNames = companies.map((c) => ({
//     name: c.name,
//     id: c.id,
//     url: c.websiteUrl,
//   }));

//   // Launch a single browser instance
//   const browser = await puppeteer.launch({ headless: true, slowMo: 250 });

//   // Filter feeds and map articles to companies using regex for whole word matching
//   const articlesToSave = await Promise.all(
//     feeds.flatMap(async ({ link, feed }) => {
//       const providerName = feed.title;
//       const logoUrl: string = feed.image?.url ?? feed.icon ?? feed.logo; // eslint-disable-line
//       return await Promise.all(
//         feed.items.flatMap(async (item) => {
//           const articleContent = await fetchArticleInsideLink(browser, item.link ?? "");
//           return companyNames
//             .filter((company) => {
//               const urlRegex = new RegExp(`\\b${escapeRegExp(company.url)}\\b`);
//               return articleContent.some(content => urlRegex.test(content ?? ""));
//             })
//             .map((company) => ({
//               companyId: company.id,
//               companyName: company.name,
//               articleContent: stripHtml(item.content ?? ""),
//               articleTitle: item.title,
//               articleUrl: item.link,
//               publishedAt: formatPubDate(item.pubDate ?? ""),
//               source: link,
//               logoUrl: logoUrl,
//               providerName: providerName,
//             }));
//         }),
//       );
//     }),
//   );

//   // Close the browser instance
//   await browser.close();

//   const filteredArticlesToSave = articlesToSave.flat().filter(article => Object.keys(article).length > 0);

//   return NextResponse.json(filteredArticlesToSave);
// }

// async function fetchArticleInsideLink(
//   browser: any,
//   url: string,
// ): Promise<string[]> {
//   try {
//     const page = await browser.newPage();

//     // Set user agent
//     await page.setUserAgent(
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
//     );

//     await page.goto(url, { waitUntil: 'domcontentloaded' });

//     const links = await page.evaluate(() => {
//       const anchorElements = Array.from(document.querySelectorAll('body a'));
//       return anchorElements
//         .map(a => (a as HTMLAnchorElement).href)
//         .filter(href => href.startsWith('https://'));
//     });

//     await page.close();
//     return links;
//   } catch (error) {
//     console.log(`Error for URL ${url}: ${error}`);
//   }
//   return [];
// }