import type { Coin } from '@prisma/client';
import create, { type StateCreator } from 'zustand';
import { type PersistOptions, persist } from 'zustand/middleware';

import type { CoinData, CoinFetchData, Filter } from '../types';

type CoinListState = {
	add: () => void;
	coinList: Array<CoinData>;
	hide: (id: string) => void;
	save: (id: string) => void;
	show: (id: string) => void;
	unsave: (id: string) => void;
	updateData: (coinData: Array<CoinFetchData>, savedCoinList?: Array<Coin>) => void;
};

const coinListStore: StateCreator<CoinListState> = (set) => ({
	add: () => {
		set((state) => ({
			coinList: state.coinList.concat({
				current_price: 4,
				filters: new Set<Filter>().add('isFound'),
				id: 'staro',
				image: 'http://google.com',
				name: 'test',
				price_change_percentage_24h: 23.4,
				symbol: 'ststr',
			}),
		}));
	},
	coinList: [],
	hide: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					coin.filters.delete('isFound');
				}

				return coin;
			}),
		}));
	},
	save: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					coin.filters.add('isSaved');
				}

				return coin;
			}),
		}));
	},
	show: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					coin.filters.add('isFound');
				}

				return coin;
			}),
		}));
	},
	unsave: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					coin.filters.delete('isSaved');
				}

				return coin;
			}),
		}));
	},
	updateData: async (coinData: Array<CoinFetchData>, savedCoinList) => {
		set((state) => {
			const coinList: Array<CoinData> = coinData.map((dataInstance) => {
				const foundCoin = state.coinList.find((coin) => coin.id === dataInstance.id);
				console.log(foundCoin);
				if (!foundCoin) {
					const filters = new Set<Filter>().add('isFound');

					return { ...dataInstance, filters };
				}

				const filters = new Set<Filter>().add('isFound');

				return { ...dataInstance, filters };

				// if (savedCoinList) {
				// 	if (savedCoinList.find((savedCoin) => savedCoin.id === dataInstance.id)) {
				// 		foundCoin.filters.add('isSaved');
				// 	}
				// }

				// return { ...dataInstance, filters: foundCoin.filters };
			});

			return { coinList };
		});
	},
});

const persistOptions: PersistOptions<CoinListState> = { name: 'coin-list' };

export const useCoinStore = create<CoinListState>()(persist(coinListStore, persistOptions));
