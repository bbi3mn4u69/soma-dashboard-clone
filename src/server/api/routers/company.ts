import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { CreateCompanySchema } from "../../../../schema";

export const GetCompanyRouter = createTRPCRouter({
  getCompaniesPLus5b: publicProcedure.query(async ({ ctx }) => {
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
  getCompanies1_5b: publicProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "1-5b",
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
  getCompanies500m_1b: publicProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "500m-1b",
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
  getCompanies100_500m: publicProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "100-500m",
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
  getCompanies50_100m: publicProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "50-100m",
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
  getCompaniesSmallerThan50m: publicProcedure.query(async ({ ctx }) => {
    const companies = await ctx.db.company.findMany({
      where: {
        valuation: "N/A",
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
