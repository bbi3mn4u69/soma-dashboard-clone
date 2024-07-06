import { db } from "~/server/db";



export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>|\n/g, "");
}

export function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function getCompaniesName() {
  try {
    const companiesName = await db.company.findMany({
      select: {
        name: true,
        id: true,
        websiteUrl: true,
      },
    });
    return companiesName;
  } catch (e) {
    console.log(e);
  }
}

export function formatPubDate(dateString: string) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toUTCString().split(" ").slice(0, 4).join(" ");
}

export const url = [
  "https://techcrunch.com/feed/",
  "https://techcrunch.com/category/startups/feed/",
  "https://www.cnbc.com/id/19854910/device/rss/rss.html",
  "https://www.economist.com/science-and-technology/rss.xml",
  "http://feeds.feedburner.com/venturebeat/SZYF",
  // "http://feeds.bbci.co.uk/news/technology/rss.xml",
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






