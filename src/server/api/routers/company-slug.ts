import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { z } from "zod";

export const companySlugRouter = createTRPCRouter({
  getSpecificCompany: protectedProcedure
    .input(
      z.object({
        companyId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const company = await ctx.db.company.findUnique({
          where: {
            id: input.companyId,
          },
          include: {
            sectors: true,
          },
        });
        return company;
      } catch (e) {
        console.log(e);
      }
    }),
    getCompanyPrimarySector: protectedProcedure
    .input(
      z.object({
        companyId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const companyWithPrimarySector = await ctx.db.company.findUnique({
          where: {
            id: input.companyId,
          },
          include: {
            sectors: {
              where: {
                primary: true,
              },
            },
          },
        });
        const primarySector = companyWithPrimarySector?.sectors[0]; 
        return primarySector;
      } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch the primary sector');
      }
    }),
    getCompanyOtherSector: protectedProcedure
      .input(
        z.object({
          companyId: z.string()
        })
      )
      .query(async ({ctx, input}) => {
        try {
          const company = await ctx.db.company.findUnique({
            where: {
              id: input.companyId
            },
            select: {
              sectors: {
                where: {
                  primary: false
                }
              }
            }
          })
          return company
        }catch(e) {
          console.log(e)
        }
      }),
      getCompanyNews: protectedProcedure
      .input(
        z.object({
          companyId: z.string()
        })
      ).query(async ({ctx, input}) => {
        try {
          const companyNews = await ctx.db.companyNews.findMany({
            where: {
              companyId: input.companyId
            }
          })
          return companyNews
        } catch (e) {
          console.log(e)
        }
      })
});
