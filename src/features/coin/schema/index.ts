import { z } from 'zod';

export const CoinFetchSchema = z.object({
	id: z.string(),
	image: z.string(),
	name: z.string(),
	current_price: z.number().transform((num) => +num.toFixed(2)),
	price_change_percentage_24h: z.number().transform((num) => +num.toFixed(2)),
	symbol: z.string(),
});

export const CoinDynamicSchema = z.object({
	isFound: z.boolean(),
	isSaved: z.boolean(),
});

export const CoinSchema = CoinFetchSchema.merge(CoinDynamicSchema);
