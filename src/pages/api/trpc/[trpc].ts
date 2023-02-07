import * as trpcNext from '@trpc/server/adapters/next';

import { env } from '~/env/server.mjs';
import { appRouter, createTrpcContext } from '~/server';

export default trpcNext.createNextApiHandler({
	createContext: createTrpcContext,
	router: appRouter,
	onError:
		env.NODE_ENV === 'development'
			? ({ error, path }) => {
					console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
			  }
			: undefined,
});
