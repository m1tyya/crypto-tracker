import { type Coin } from '@prisma/client';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { type StateCreator, create } from 'zustand';
import { type PersistOptions, persist } from 'zustand/middleware';

import { type CoinData, type CoinFetchData, type CoinFilters } from '../types';

type CoinListState = {
	coinList: Array<CoinData>;
	queryError: string;
	resetShow: () => void;
	toggleSave: (id: string, isSaved: boolean) => void;
	toggleShow: (id: string, isFound: boolean) => void;
	updateMarketData: (coinData: Array<CoinFetchData>, savedCoinList: Array<Coin>) => void;
	updateQueryError: (queryError: string) => void;
};

const coinListStore: StateCreator<CoinListState> = (set) => ({
	coinList: [],
	queryError: '',
	updateMarketData: (coinData: Array<CoinFetchData>, savedCoinList) => {
		set((state) => {
			const coinList: Array<CoinData> = coinData.map((dataInstance) => {
				const filters: CoinFilters = { isFound: true, isSaved: false };
				const foundCoin = state.coinList.find((coin) => coin.id === dataInstance.id);
				if (foundCoin) {
					filters.isFound = foundCoin.filters.isFound;
				}

				if (savedCoinList.some((savedCoin) => savedCoin.id === dataInstance.id)) {
					filters.isSaved = true;
				}

				return { ...dataInstance, filters } as CoinData;
			});

			return { coinList };
		});
	},
	resetShow: () => {
		set((state) => ({
			coinList: state.coinList.map((coin) => ({ ...coin, filters: { ...coin.filters, isFound: true } })),
		}));
	},
	toggleSave: (id, isSaved) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					return { ...coin, filters: { ...coin.filters, isSaved } };
				}

				return coin;
			}),
		}));
	},
	toggleShow: (id, isFound) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					return { ...coin, filters: { ...coin.filters, isFound } };
				}

				return coin;
			}),
		}));
	},
	updateQueryError: (queryError) => {
		set(() => ({
			queryError,
		}));
	},
});

const persistOptions: PersistOptions<CoinListState> = {
	name: 'coin-list',
};

export const useCoinStore = create<CoinListState>()(persist(coinListStore, persistOptions));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('coin-list', useCoinStore);
}
