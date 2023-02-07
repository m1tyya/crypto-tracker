import { type z } from 'zod';

import { type CoinFetchSchema, type CoinFiltersSchema, type CoinSchema, type FilterSchema } from '../schema';

export type Coin = z.infer<typeof CoinSchema>;
export type CoinFetchData = z.infer<typeof CoinFetchSchema>;
export type CoinFilters = z.infer<typeof CoinFiltersSchema>;
export type Filter = z.infer<typeof FilterSchema>;
