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

interface TeamData {
  pageProps: {
    team: Team[];
  };
}

export async function GET() {
  try {
    const url =
      "https://somacap.com/_next/data/hdAzCB5oKbwXKU0zLqtm1/team.json";
    const data = (await fetchDataFromURL(url)) as TeamData;
    const teams: Team[] = data.pageProps.team;
    console.log("running here");
    await saveTeamsToDB(teams);
    return NextResponse.json(data.pageProps.team);
  } catch (e) {
    throw new Error(e as string);
  }
  
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
      throw e;
    }
  }
}
