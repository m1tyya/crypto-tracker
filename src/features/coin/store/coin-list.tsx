import { type Coin } from '@prisma/client';
import { type StateCreator, create } from 'zustand';
import { type PersistOptions, persist } from 'zustand/middleware';

import { type CoinData, type CoinFetchData, type CoinFilters } from '../types';

type CoinListState = {
	coinList: Array<CoinData>;
	resetShow: () => void;
	toggleSave: (id: string, isSaved: boolean) => void;
	toggleShow: (id: string, isFound: boolean) => void;
	updateData: (coinData: Array<CoinFetchData>, savedCoinList: Array<Coin>) => void;
};

const coinListStore: StateCreator<CoinListState> = (set) => ({
	coinList: [],
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
	updateData: (coinData: Array<CoinFetchData>, savedCoinList) => {
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
});

const persistOptions: PersistOptions<CoinListState> = {
	name: 'coin-list',
};

export const useCoinStore = create<CoinListState>()(persist(coinListStore, persistOptions));
