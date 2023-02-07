import { z } from 'zod';

import { roundToDecimals } from '~/utils';

export const FilterSchema = z.enum(['isFound', 'isSaved']);

export const CoinFetchSchema = z.object({
	current_price: z.number().transform((num) => roundToDecimals(num, 2)),
	id: z.string(),
	image: z.string().url(),
	name: z.string(),
	price_change_percentage_24h: z.number().transform((num) => roundToDecimals(num, 2)),
	symbol: z.string(),
});

export const CoinFiltersSchema = z
	.object({
		isFound: z.boolean(),
		isSaved: z.boolean(),
	})
	.strict();

export const CoinSchema = CoinFetchSchema.extend({ filters: CoinFiltersSchema });
