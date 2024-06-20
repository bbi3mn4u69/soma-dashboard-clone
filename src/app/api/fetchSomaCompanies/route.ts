import { NextRequest, NextResponse } from "next/server";
import { BaseUrl, encodeURL, stringToEncode, fetchDataFromURL } from "./routeHelper";

export async function GET(request: NextRequest) {
  RunOnCall();
  const initialUrl = "https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22limit%22%3A30%2C%22industry%22%3Anull%2C%22region%22%3Anull%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D%7D"; // Set your initial URL here
  const results: string[] = [];
  await fetchDataAndPushToArray("", results, initialUrl);
  return NextResponse.json(results);
}

async function fetchDataAndPushToArray(cursor: string, results: string[], initialUrl?: string) {
  const url = cursor ? BaseUrl(encodeURL(stringToEncode(cursor))) : initialUrl;
  const data = await fetchDataFromURL(url as string);
  if (data && data[0].result.data.json.nextCursor) {
    results.push(data[0].result.data.json.results); // Push only the specific part of the data
    await fetchDataAndPushToArray(data[0].result.data.json.nextCursor, results);
  } else if (data) {
    results.push(data[0].result.data.json.results); // Push only the specific part of the data
  }
}

function RunOnCall() {
  console.log("Running on call");
}