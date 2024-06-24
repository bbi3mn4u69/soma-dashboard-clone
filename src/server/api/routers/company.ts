import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { z } from "zod";

export const GetCompanyRouter = createTRPCRouter({
  getCompaniesByFilter: publicProcedure
    .input(
      z.object({
        valuation: z.string(),
        region: z.string(),
        sectorName: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const companies = await ctx.db.company.findMany({
          where: {
            valuation: input.valuation,
            ...(input.region !== "All" ? { region: input.region } : {}),
            sectors:
              input.sectorName !== "All"
                ? {
                    some: {
                      name: input.sectorName,
                    },
                  }
                : {},
          },
          include: {
            sectors: {
              where: {
                primary: true,
              },
            },
          },
        });
        return companies;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch companies");
      }
    }),
});
