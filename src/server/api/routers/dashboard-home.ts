import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

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
});
