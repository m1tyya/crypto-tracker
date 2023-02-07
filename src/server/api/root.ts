import { coinRouter } from './routers/coin';
import { createTrpcRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTrpcRouter({
	coin: coinRouter,
});

export type AppRouter = typeof appRouter;
