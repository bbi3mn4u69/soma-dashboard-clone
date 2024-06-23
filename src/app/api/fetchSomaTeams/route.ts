import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";
import { fetchDataFromURL } from "../fetchSomaCompanies/routeHelper";

interface Team {
  name: string;
  role: string;
  imageUrl: string;
  path: string;
  bio: string[];
}

export async function GET(req: NextRequest, res: NextResponse) {
  const url = "https://somacap.com/_next/data/HkO4BFUkGoc8_uWY0inu4/team.json";
  const data = await fetchDataFromURL(url);
  const teams: Team[] = data.pageProps.team;
  try {
    console.log("running here");
    await saveTeamsToDB(teams);
  } catch (e) {
    throw new Error("Failed to save teams to database");
  }
  return NextResponse.json(data.pageProps.team);
}

async function saveTeamsToDB(teams: Team[]) {
  for (const person of teams) {
    try {
      // Check if the team already exists in the database
      const existingTeam = await db.teams.findUnique({
        where: { slug: person.path },
      });
      if (!existingTeam) {
        await db.teams.create({
          data: {
            name: person.name,
            role: person.role,
            imageUrl: person.imageUrl,
            slug: person.path,
            bio: person.bio.join(" "),
          },
        });
      }
    } catch (e) {
      console.error("Failed to save team:", e);
    }
  }
}
