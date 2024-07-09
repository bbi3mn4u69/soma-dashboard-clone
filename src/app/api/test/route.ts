import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

// puppeteer.use(StealthPlugin())

// const url: string = 'https://techcrunch.com/2024/07/05/epic-games-calls-out-apple-for-rejecting-its-games-store-in-the-eu/';


// export async function GET(req: Request, res: Response) {
//   try {
//     const browser = await puppeteer.launch({ headless: true, defaultViewport: null  });
//     const page = await browser.newPage();
//     // Set user agent
//     await page.setUserAgent(
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
//     );

//     await page.goto(url, { waitUntil: 'domcontentloaded' });

//     const links = await page.evaluate(() => {
//       const anchorElements = Array.from(document.querySelectorAll('body a'));
//       return anchorElements.some(a => (a as HTMLAnchorElement).href.startsWith('https://www.rippling.com'));
//     });

//     await browser.close();
//     return NextResponse.json({ links });
//   } catch (error) {
//     console.log(`Error for URL ${url}: ${error}`);
//   }
//   return NextResponse.json({ error: 'Failed to fetch links' });
// }





export async function GET () {
  return NextResponse.json({ error: 'Failed to fetch links' });
}