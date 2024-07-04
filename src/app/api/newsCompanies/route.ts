import Parser from "rss-parser";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import {
  url,
  getCompaniesName,
  stripHtml,
  escapeRegExp,
  formatPubDate,
} from "./routeHelper";
import axios from "axios";

interface Article {
  companyId: string;
  companyName: string;
  articleContent: string | undefined;
  articleTitle: string;
  articleUrl: string;
  publishedAt: string | undefined;
  source: string;
  logoUrl: string | undefined;
  feedProvider: string;
  providerName: string;
}

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

  const companyNames = companies.map((c) => ({ name: c.name, id: c.id, url: c.websiteUrl }));

  // Filter feeds and map articles to companies using regex for whole word matching
  const articlesToSave = await Promise.all(feeds.flatMap(async ({ link, feed }) => {
    const providerName = feed.title;
    const logoUrl: string = feed.image?.url ?? feed.icon ?? feed.logo; // eslint-disable-line
    return await Promise.all(feed.items.flatMap(async (item) => {
      const articleContent = await fetchFullArticleContent(item.link ?? "");
      return companyNames
        .filter((company) => {
          const regex = new RegExp(`\\b${escapeRegExp(company.name)}\\b`);
          const urlRegex = new RegExp(`\\b${escapeRegExp(company.url)}\\b`);
          return urlRegex.test(articleContent ?? "");
        })
        .map((company) => ({
          companyId: company.id,
          companyName: company.name,
          articleContent: stripHtml(articleContent ?? ""),
          articleTitle: item.title,
          articleUrl: item.link,
          publishedAt: formatPubDate(item.pubDate ?? ""),
          source: link,
          logoUrl: logoUrl,
          providerName: providerName,
        }));
    }));
  })); 

  try {
    // TODO: PRISMA CALL

    // await SaveArticlesToDB(articlesToSave as Article[]);
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json(articlesToSave);
}




async function fetchFullArticleContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    return response.data;   // eslint-disable-line
  } catch (error) {
    console.error(`Failed to fetch article content from ${url}`, error);
    return "";
  }
}



// async function SaveArticlesToDB(articles: Article[]) {
//   for (const article of articles) {
//     try {
//       // TODO: upsert by url

//       const exitstingArticle = await db.companyNews.findMany({
//         where: {
//           title: article.articleTitle,
//         },
//       });
//       if (exitstingArticle.length === 0) {
//         await db.companyNews.create({
//           data: {
//             source: article.source,
//             companyId: article.companyId,
//             companyRelated: article.companyName,
//             title: article.articleTitle,
//             url: article.articleUrl,
//             content: article.articleContent,
//             publishedAt: article.publishedAt,
//             articleLogoUrl: article.logoUrl,
//             ProviderName: article.providerName,
//           },
//         });
//       } else {
//         for (const exitstAr of exitstingArticle) {
//           await db.companyNews.upsert({
//             where: {
//               id: exitstAr.id,
//             },
//             update: {
//               source: article.source,
//               companyId: article.companyId,
//               companyRelated: article.companyName,
//               title: article.articleTitle,
//               url: article.articleUrl,
//               content: article.articleContent,
//               publishedAt: article.publishedAt,
//               articleLogoUrl: article.logoUrl,
//               ProviderName: article.providerName,
//             },
//             create: {
//               source: article.source,
//               companyId: article.companyId,
//               companyRelated: article.companyName,
//               title: article.articleTitle,
//               url: article.articleUrl,
//               content: article.articleContent,
//               publishedAt: article.publishedAt,
//               articleLogoUrl: article.logoUrl,
//               ProviderName: article.providerName,
//             },
//           });
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
