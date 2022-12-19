import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

import { FETCH_INTERVAL, URL } from '~/constants';
import { FilteredCards } from '~/layouts/coin-card';
import { type Coin, CoinSchema, SearchBar } from '~/layouts/search';

const fetchData = async () => {
	const res = await fetch(URL);
	const data = (await res.json()) as Array<Coin>;
	const parsedData: Array<Coin> = [];

	if (!CoinSchema.safeParse(data)) {
		throw new Error('Type error');
	}

	for (const coin of data) {
		parsedData.push(CoinSchema.parse(coin));
	}

	return parsedData;
};

type HomeProps = {};

const Home: NextPage<HomeProps> = () => {
	const isFirstFetch = useRef<boolean>(true);
	const coinList = useRef<Array<Coin>>([]);
	const [filteredCoinList, setFilteredCoinList] = useState<Array<Coin>>([]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		async function getPrice() {
			const data = await fetchData();
			coinList.current = data;
			if (isFirstFetch.current) {
				setFilteredCoinList(data);
				isFirstFetch.current = false;
			}
			timeoutId = setTimeout(getPrice, FETCH_INTERVAL);
		}
		getPrice();

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			<SearchBar coinList={coinList.current} setFilteredCoinList={setFilteredCoinList} />
			<FilteredCards filteredCoinList={filteredCoinList} />
		</>
	);
};

export default Home;
