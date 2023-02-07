import { type SavedCoin } from '@prisma/client';
import kyUniversal from 'ky-universal';
import { SavedCoinSchema } from 'prisma/zod';
import { ZodError } from 'zod';

import { type CoinFetchData } from '~/features/coin';
import { CoinFetchSchema } from '~/features/coin';
import { options } from '~/lib/ky';

import { createTrpcRouter, protectedProcedure } from '../trpc';

export const coinRouter = createTrpcRouter({
	coinMarketData: protectedProcedure.query(async (): Promise<Array<CoinFetchData> | undefined> => {
		const coinMarketData = (await kyUniversal('coins', options).json()) as Array<SavedCoin>;
		try {
			return CoinFetchSchema.array().parse(coinMarketData);
		} catch (err) {
			if (err instanceof ZodError) {
				throw err.message;
			}
		}
	}),
	savedCoinList: protectedProcedure.query(async (): Promise<Array<SavedCoin> | undefined> => {
		const savedCoinList = (await kyUniversal('coins/saved', options).json()) as Array<SavedCoin>;
		try {
			return SavedCoinSchema.array().parse(savedCoinList);
		} catch (err) {
			if (err instanceof ZodError) {
				throw err.message;
			}
		}
	}),
});
