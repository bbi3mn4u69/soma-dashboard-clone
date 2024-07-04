import { NextRequest, NextResponse } from "next/server";
import {
  BaseUrl,
  encodeURL,
  stringToEncode,
  fetchDataFromURL,
} from "./routeHelper";
import { CompanyDataType } from "~/app/interface";
import { db } from "~/server/db";

interface DataResult {
  result: {
    data: {
      json: {
        nextCursor?: string;
        results: CompanyDataType[];
      };
    };
  };
}

export async function GET(request: NextRequest) {
  try {
    console.log("fetching soma companies");
    const initialUrl =
      "https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D"; 
    const results: CompanyDataType[] = [];

    await fetchDataAndPushToArray("", results, initialUrl);
    await saveCompaniesToDB(results);
    return NextResponse.json("result oke");
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "Failed to fetch and save companies" });
  }
}

async function fetchDataAndPushToArray(
  cursor: string,
  results: CompanyDataType[],
  initialUrl?: string,
) {
  const url = cursor ? BaseUrl(encodeURL(stringToEncode(cursor))) : initialUrl;
  const data = (await fetchDataFromURL(url!)) as DataResult[];
  if (data?.[0]?.result?.data?.json?.nextCursor) {
    results.push(...data[0].result.data.json.results);
    if (data[0].result.data.json.results) {
      results.push(...data[0].result.data.json.results);
    }
    if (data[0].result.data.json.nextCursor) {
      await fetchDataAndPushToArray(
        data[0].result.data.json.nextCursor,
        results,
      );
    }
  }
}

async function saveCompaniesToDB(result: CompanyDataType[]) {
  
  for (const company of result) {
    try {
      await db.company.upsert({
        where: {
          id: company.id,
        },
        update: {
          name: company.name,
          logoUrl: company.logoUrl,
          slug: company.slug,
          oneLiner: company.oneLiner,
          valuation: company.valuation,
          region: company.region,
          websiteUrl: company.website,
        },
        create: {
          id: company.id,
          name: company.name,
          logoUrl: company.logoUrl,
          slug: company.slug,
          oneLiner: company.oneLiner,
          valuation: company.valuation,
          region: company.region,
          websiteUrl: company.website,
        },
      });
      // Upsert sectors related to the company
      if (company.sectors && company.sectors.length > 0) {
        for (const sector of company.sectors) {
          await db.sectors.upsert({
            where: { id: sector.id },
            update: {
              name: sector.name,
              primary: sector.primary,
              companyId: sector.companyId,
            },
            create: {
              id: sector.id,
              name: sector.name,
              primary: sector.primary,
              companyId: sector.companyId,
            },
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
