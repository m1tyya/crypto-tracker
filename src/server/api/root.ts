import { coinRouter } from './routers/coin';
import { createTrpcRouter } from './trpc';

export const appRouter = createTrpcRouter({
	coin: coinRouter,
});

export type AppRouter = typeof appRouter;
