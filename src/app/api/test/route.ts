import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(StealthPlugin())

const url: string = 'https://techcrunch.com/2024/07/05/epic-games-calls-out-apple-for-rejecting-its-games-store-in-the-eu/';


export async function GET(req: Request, res: Response) {

const companyUrl = 'https://rippling.com';
const articleUrl = 'https://www.rippling.com';

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
    console.error(`Error comparing URLs: ${error}`);
    return false;
  }
};

  return NextResponse.json(urlMatches(companyUrl, articleUrl));
}


