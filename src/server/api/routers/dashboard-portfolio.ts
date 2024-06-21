import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";



  export const dashboardPortfolioRouter = createTRPCRouter({
    getPortfolio: protectedProcedure.query(async ({ ctx }) => {
        const companies = await ctx.db.company.findMany({
          include: {
            sectors: {
              where: {
                primary: true,
              },
            },
          },
        });
        return companies;
      }),
      getTotalCompaniesNum: protectedProcedure.query(async ({ ctx }) => {
        const totalCompanies = await ctx.db.company.count();
        return totalCompanies;
      }),
  });