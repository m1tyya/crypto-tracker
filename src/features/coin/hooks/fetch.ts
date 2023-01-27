import { useQuery } from '@tanstack/react-query';
import { CoinSchema } from 'prisma/zod';

import { FETCH_INTERVAL } from '../constants';
import { CoinDataSchema } from '../schema';
import { zodGet } from '../utils';

export function useSavedCoinList() {
	return useQuery({
		queryFn: async () => await zodGet('/coins/saved', CoinSchema.array()),
		queryKey: ['saved-coins', CoinSchema],
	});
}

export function useCoinData() {
	return useQuery({
		queryFn: async () => await zodGet('/coins', CoinDataSchema.array()),
		queryKey: ['coin-data', CoinDataSchema],
		refetchInterval: FETCH_INTERVAL,
	});
}
