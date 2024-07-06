import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

const url: string = 'https://www.science.org/content/article/dreamlike-pig-hunting-scene-world-s-oldest-figurative-art';


export async function GET(req: Request, res: Response) {
  const retries: number = 5;
  const backoff: number = 5000;

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    );

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const links = await page.evaluate(() => {
      const anchorElements = Array.from(document.querySelectorAll('body a'));
      return anchorElements
        .map(a => (a as HTMLAnchorElement).href)
        .filter(href => href.startsWith('https://'));
    });

    await browser.close();
    return NextResponse.json(links);
  } catch (error) {
    console.log(`Error for URL ${url}: ${error}`);
  }
  return NextResponse.json({ error: 'Failed to fetch links' });
}