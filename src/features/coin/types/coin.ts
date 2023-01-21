import type { z } from 'zod';

import type { CoinDataSchema, CoinSchema, FilterListSchema, FilterSchema } from '../schema';

export type CoinData = z.infer<typeof CoinSchema>;
export type CoinFetchData = z.infer<typeof CoinDataSchema>;
export type Filter = z.infer<typeof FilterSchema>;
export type FilterList = z.infer<typeof FilterListSchema>;
