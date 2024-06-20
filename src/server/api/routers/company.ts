import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { CreateCompanySchema } from "../../../../schema";
import { z } from "zod";

export const GetCompanyRouter = createTRPCRouter({
  getCompaniesByValuation: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const companies = await ctx.db.company.findMany({
          where: { 
            valuation: input,
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
      }catch(e){
        console.log(e)
      }
    }),
});
