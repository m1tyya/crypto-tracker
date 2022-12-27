import create from 'zustand';

import { URL } from '../constants';
import { CoinFetchSchema } from '../schema';
import type { Coin, Data } from '../types';

export const useCoinStore = create<CoinListState>((set) => ({
	coinList: [],
	updateData: async () => {
		const res = await fetch(URL);
		const data = (await res.json()) as Array<Data>;

		if (!CoinFetchSchema.safeParse(data)) {
			throw new Error('Type error');
		}

		set((state) => ({
			coinList: data.map((fetchedDataCoin) => {
				const foundCoin = state.coinList.find((coin) => coin.id === fetchedDataCoin.id);
				if (!foundCoin) {
					return { ...fetchedDataCoin, isFound: true, isSaved: false };
				}

				return { ...fetchedDataCoin, isFound: foundCoin.isFound, isSaved: foundCoin.isSaved };
			}),
		}));
	},
	hide: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					return { ...coin, isFound: false };
				}

				return coin;
			}),
		}));
	},
	show: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					return { ...coin, isFound: true };
				}

				return coin;
			}),
		}));
	},
	toggleSave: (id) => {
		set((state) => ({
			coinList: state.coinList.map((coin) => {
				if (coin.id === id) {
					return { ...coin, isSaved: !coin.isSaved };
				}

				return coin;
			}),
		}));
	},
}));

type CoinListState = {
	coinList: Array<Coin>;
	hide: (id: string) => void;
	show: (id: string) => void;
	toggleSave: (id: string) => void;
	updateData: () => void;
};
