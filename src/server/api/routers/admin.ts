import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { z } from "zod";
import { UserRole } from "@prisma/client";

export const adminRouter = createTRPCRouter({
  getAllUsers: protectedProcedure.query(async ({ ctx }) => {
    try {
      const users = await ctx.db.user.findMany();
      return users;
    } catch (e) {
      console.log(e);
    }
  }),
  getSpecificUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.user.findUnique({
          where: {
            id: input.id,
          },
        });
        return user;
      } catch (e) {
        console.log(e);
      }
    }),
  getPortfolio: protectedProcedure.query(async ({ ctx }) => {
    try {
      const portfolioCount = await ctx.db.company.count();
      return portfolioCount;
    } catch (e) {
      console.log(e);
    }
  }),
  getNews: protectedProcedure.query(async ({ ctx }) => {
    try {
      const newsCount = await ctx.db.companyNews.count();
      return newsCount;
    } catch (e) {
      console.log(e);
    }
  }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    try {
      const usersCount = await ctx.db.user.count();
      return usersCount;
    } catch (e) {
      console.log(e);
    }
  }),
  editUserDetails: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        role: z.string().optional(),
        createdAt: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: input.id },
        data: {
          ...(input.name && { name: input.name }),
          ...(input.role && { role: input.role as UserRole }),
          ...(input.createdAt && { createdAt: input.createdAt }),
        },
      });
      return user;
    }),
});
