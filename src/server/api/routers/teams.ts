
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";



export const TeamsRouter = createTRPCRouter({
    getAllTeam: publicProcedure
    .query( async ({ctx}) => {
        try {
            const Teams = await ctx.db.teams.findMany() 
            return Teams
        }catch(e) {
            console.log(e)
        }
    }),
    getSinglePerson: publicProcedure
        .input(z.string())
        .query(async ({ctx, input}) => {
            try {
                const person = await ctx.db.teams.findUnique({
                    where: {
                        slug: `/team/${input}`
                    }
                })
                return person
            }catch(e) {
                console.log(e)
            }
        })
})