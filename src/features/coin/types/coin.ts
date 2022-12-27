import type { z } from 'zod';

import type { CoinFetchSchema, CoinSchema } from '../schema';

export type Coin = z.infer<typeof CoinSchema>;
export type Data = z.infer<typeof CoinFetchSchema>;

export function createCoin(): Coin {
	return {
		current_price: 0,
		id: '',
		image: '',
		isFound: true,
		isSaved: false,
		name: '',
		price_change_percentage_24h: 0,
		symbol: '',
	};
}
