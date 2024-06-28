import Parser from "rss-parser";
import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

const url = [
  "https://techcrunch.com/feed/",
  "https://techcrunch.com/category/startups/feed/",
  // "http://feeds.feedburner.com/entrepreneur/latest",
  "https://www.cnbc.com/id/19854910/device/rss/rss.html",
  "https://www.economist.com/science-and-technology/rss.xml",
  "http://feeds.feedburner.com/venturebeat/SZYF",
  "http://feeds.bbci.co.uk/news/technology/rss.xml",
  "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
  "http://feeds.feedburner.com/typepad/alleyinsider/silicon_alley_insider",
  "http://feeds.washingtonpost.com/rss/business/technology",
  "https://hnrss.org/newest",
  "https://gizmodo.com/rss",
  "https://feeds.arstechnica.com/arstechnica/technology-lab",
  "https://www.reutersagency.com/feed/?best-topics=tech",
  "https://www.wired.com/feed/category/business/latest/rss",
  "https://www.wired.com/feed/tag/ai/latest/rss",
  "https://www.theverge.com/rss/index.xml",
  "https://venturebeat.com/feed/",
  "https://www.prnewswire.com/rss/consumer-technology-latest-news/consumer-technology-latest-news-list.rss",
  "https://www.prnewswire.com/rss/financial-services-latest-news.rss",
   "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR2d3TVdZU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen",
];



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
  const companyNames = companies.map((c) => ({ name: c.name, id: c.id }));

  // Filter feeds and map articles to companies using regex for whole word matching
  const articlesToSave = feeds.flatMap(({ link, feed }) => {
    const providerName = feed.title
    const logoUrl: string = feed.image?.url ?? feed.icon ?? feed.logo; // eslint-disable-line
    return feed.items.flatMap((item) =>
      companyNames
        .filter((company) => {
          const regex = new RegExp(`\\b${escapeRegExp(company.name)}\\b`);
          return regex.test(item.title ?? "");
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
          providerName: providerName
        })),
    );
  });
  try {
    await SaveArticlesToDB(articlesToSave as Article[]);
  }catch (e) {
    console.log(e)
  }
  
  return NextResponse.json(articlesToSave);
}



function stripHtml(html: string): string {
  return html.replace(/<[^>]*>|\n/g, '');
}


function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getCompaniesName() {
  try {
    const companiesName = await db.company.findMany({
      select: {
        name: true,
        id: true,
      },
    });
    return companiesName;
  } catch (e) {
    console.log(e);
  }
}

function formatPubDate(dateString: string) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toUTCString().split(" ").slice(0, 4).join(" ");
}

async function SaveArticlesToDB(articles: Article[]) {
  for (const article of articles) {
    try {
        const exitstingArticle = await db.companyNews.findMany({
            where: {
                title: article.articleTitle
            }
        })
        if (exitstingArticle.length === 0) {
            await db.companyNews.create({
                data: {
                    source: article.source,
                    companyId: article.companyId,
                    companyRelated: article.companyName,
                    title: article.articleTitle,
                    url: article.articleUrl,
                    content: article.articleContent,
                    publishedAt: article.publishedAt,
                    articleLogoUrl: article.logoUrl,
                    ProviderName: article.providerName
                }
            })
        }else{
             for (const exitstAr of exitstingArticle )  {
                await db.companyNews.upsert({
                    where: {
                        id: exitstAr.id
                    },
                    update: {
                        source: article.source,
                        companyId: article.companyId,
                        companyRelated: article.companyName,
                        title: article.articleTitle,
                        url: article.articleUrl,
                        content: article.articleContent,
                        publishedAt: article.publishedAt,
                        articleLogoUrl: article.logoUrl,
                        ProviderName: article.providerName
                    },
                    create: {
                        source: article.source,
                        companyId: article.companyId,
                        companyRelated: article.companyName,
                        title: article.articleTitle,
                        url: article.articleUrl,
                        content: article.articleContent,
                        publishedAt: article.publishedAt,
                        articleLogoUrl: article.logoUrl,
                        ProviderName: article.providerName
                    }
                })
             }
            
        }
    }catch(e) {
        console.log(e)
    }
  }
}

