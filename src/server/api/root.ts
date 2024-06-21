import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { GetCompanyRouter } from "~/server/api/routers/company";
import { DashboardHomeRoute } from "~/server/api/routers/dashboard-home";
import { dashboardPortfolioRouter } from "~/server/api/routers/dashboard-portfolio";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  company: GetCompanyRouter,
  dashboardHome: DashboardHomeRoute,
  dashboardPortfolio: dashboardPortfolioRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
