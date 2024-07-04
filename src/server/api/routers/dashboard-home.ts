import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const DashboardHomeRoute = createTRPCRouter({
  getDashboardHome: protectedProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "+5b",
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
  }),
  getRecentInvestment: protectedProcedure.query(async ({ ctx }) => {
    try {
      const recentInvestment = await ctx.db.company.findMany({
        take: 6,
      });
      return recentInvestment;
    } catch (e) {
      console.log(e);
    }
  }),
});
