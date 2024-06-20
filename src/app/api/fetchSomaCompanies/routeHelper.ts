export function encodeURL(input: string): string {
  return encodeURIComponent(input);
}
export function decodeURL(encoded: string): string {
  return decodeURIComponent(encoded);
}
export function BaseUrl(input: string): string {
  return `https://somacap.com/api/trpc/companies.getCompaniesInfiniteQueryWithFilters?batch=1&input=${input}`;
}

export function stringToEncode(input: string): string {
  return `{"0":{"json":{"limit":30,"industry":null,"region":null,"cursor":"${input}"}}}`;
}

export async function fetchDataFromURL(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }