import { type SavedCoin } from '@prisma/client';
import kyUniversal from 'ky-universal';
import { SavedCoinSchema } from 'prisma/zod';
import { z, ZodError } from 'zod';

import { CoinFetchSchema, URL } from '~/features/coin';

import { createTrpcRouter, protectedProcedure, publicProcedure } from '../trpc';

export const coinRouter = createTrpcRouter({
	fetch: publicProcedure.query(async () => {
		const coinMarketData = (await kyUniversal(URL).json()) as Array<SavedCoin>;
		try {
			return CoinFetchSchema.array().parse(coinMarketData);
		} catch (err) {
			if (err instanceof ZodError) {
				throw err.message;
			}
		}
	}),
	saved: createTrpcRouter({
		post: protectedProcedure
			.input(z.object({ coinId: z.string(), isSaved: z.boolean() }))
			.mutation<void>(async ({ ctx, input: { coinId, isSaved } }) => {
				isSaved
					? await ctx.prisma.user.update({
							data: {
								savedCoins: {
									delete: {
										id: coinId,
									},
								},
							},
							where: {
								id: ctx.session.user.id,
							},
					  })
					: await ctx.prisma.user.update({
							data: {
								savedCoins: {
									create: {
										id: coinId,
									},
								},
							},
							where: {
								id: ctx.session.user.id,
							},
					  });
			}),
		getAll: protectedProcedure.query(async ({ ctx }) => {
			const savedCoinList = (
				await ctx.prisma.user.findUniqueOrThrow({
					where: {
						id: ctx.session.user.id,
					},
					select: {
						savedCoins: true,
					},
				})
			).savedCoins;
			try {
				return SavedCoinSchema.array().parse(savedCoinList);
			} catch (err) {
				if (err instanceof ZodError) {
					throw err.message;
				}
			}
		}),
	}),
});
