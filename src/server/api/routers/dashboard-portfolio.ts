import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const dashboardPortfolioRouter = createTRPCRouter({
  portfolioFilter: protectedProcedure
    .input(
      z.object({ value: z.string(), industry: z.string(), region: z.string() }),
    )
    .query(async ({ ctx, input }) => {
      try {
      
        const companies = await ctx.db.company.findMany({
          where: {
            ...(input.value !== "All" && { valuation: input.value }),
            ...(input.region !== "All" && { region: input.region }),
            sectors:
              input.industry !== "All"
                ? {
                    some: {
                      name: input.industry,
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
      } catch (e) {}
    }),
  getTotalCompaniesNum: protectedProcedure.query(async ({ ctx }) => {
    const totalCompanies = await ctx.db.company.count();
    return totalCompanies;
  }),
});
