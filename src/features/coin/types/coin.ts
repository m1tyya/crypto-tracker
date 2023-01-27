import { type z } from 'zod';

import { type CoinDataSchema, type CoinFiltersSchema, type CoinSchema, type FilterSchema } from '../schema';

export type CoinData = z.infer<typeof CoinSchema>;
export type CoinFetchData = z.infer<typeof CoinDataSchema>;
export type CoinFilters = z.infer<typeof CoinFiltersSchema>;
export type Filter = z.infer<typeof FilterSchema>;
