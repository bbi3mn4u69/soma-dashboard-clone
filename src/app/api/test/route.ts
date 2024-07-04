import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

const url: string = 'https://www.science.org/content/article/dreamlike-pig-hunting-scene-world-s-oldest-figurative-art';


export async function GET(req: Request, res: Response) {
    try {
      const response = await axios.get(url);
      const html: string = response.data;
      const $ = cheerio.load(html);
      const links: string[] = [];
  
      $('body a').each((index, element) => {
        const href = $(element).attr('href');
        if (href && href.startsWith('https://')) { // Only take links starting with https://
          links.push(href);
        }
      });
  
      return NextResponse.json(links);
    } catch (error) {
      return NextResponse.json({ message: 'Error fetching the URL' });
    }
  }