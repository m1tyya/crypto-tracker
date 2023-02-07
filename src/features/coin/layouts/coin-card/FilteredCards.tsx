import { type SavedCoin } from '@prisma/client';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { type MutableRefObject } from 'react';

import {
	type Coin,
	type CoinFetchData,
	type CoinFilters,
	type Filter,
	CoinCard,
	FETCH_INTERVAL,
	SearchBar,
} from '~/features/coin';
import { mediaQueryIndex } from '~/hooks';
import { bps, styles } from '~/styles';
import { stringsInclude, trpc } from '~/utils';

export function syncCoinData(
	coinData: Array<CoinFetchData>,
	savedCoinList: Array<SavedCoin>,
	searchQueryRef: MutableRefObject<HTMLInputElement | undefined>,
): Array<Coin> {
	const coinList: Array<Coin> = coinData.map((dataInstance) => {
		const filters: CoinFilters = { isFound: true, isSaved: false };
		const searchQuery = searchQueryRef.current?.value;

		if (searchQuery && !stringsInclude(searchQuery, dataInstance.name, dataInstance.symbol)) {
			filters.isFound = false;
		}

		if (savedCoinList.some((savedCoin) => savedCoin.id === dataInstance.id)) {
			filters.isSaved = true;
		}

		return { ...dataInstance, filters };
	});

	return coinList;
}

type Props = {
	pageFilters: Set<Filter>;
};

export function FilteredCards({ pageFilters }: Props) {
	const {
		data: coinData,
		fetchStatus: fetchStatusCoinData,
		status: statusCoinData,
	} = trpc.coin.coinMarketData.useQuery(undefined, { staleTime: FETCH_INTERVAL });
	const {
		data: savedCoinList,
		fetchStatus: fetchStatusSavedCoinList,
		status: statusSavedCoinList,
	} = trpc.coin.savedCoinList.useQuery();
	const searchQueryRef = useRef<HTMLInputElement>();
	const [gridColumns, setGridColumns] = useState(0);

	useEffect(() => {
		setGridColumns(mediaQueryIndex('min-width', 'px', bps) + 1);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function handleResize() {
		setGridColumns(mediaQueryIndex('min-width', 'px', bps) + 1);
	}

	function switchRenderedCards() {
		const isLoaded = coinData && savedCoinList;

		return isLoaded
			? syncCoinData(coinData, savedCoinList, searchQueryRef).map(
					({ current_price, filters, id, image, name, price_change_percentage_24h, symbol }) => {
						let hasFilters = true;
						for (const pageFilter of pageFilters.values()) {
							const activeFilters: Array<string> = Object.keys(filters).filter((key) => filters[key as Filter]);

							if (!activeFilters.includes(pageFilter)) {
								hasFilters = false;
								break;
							}
						}

						return (
							hasFilters && (
								<>
									<CoinCard
										currentPrice={current_price}
										filters={filters}
										id={id}
										image={image}
										isInteractive={!pageFilters.has('isSaved')}
										isLoaded={true}
										key={id}
										name={name}
										priceChangePercentage24H={price_change_percentage_24h}
										symbol={symbol}
									/>
								</>
							)
						);
					},
			  )
			: _.times(gridColumns, (index) => (
					<CoinCard isInteractive={!pageFilters.has('isSaved')} isLoaded={false} key={index} />
			  ));
	}

	return (
		<>
			{statusCoinData === 'error' || statusSavedCoinList === 'error' ? (
				<p>Error fetching data</p>
			) : (
				<>
					<SearchBar searchQueryRef={searchQueryRef} />
					<div
						className={styles({
							display: 'grid',
							gap: '2rem',
							margin: '4rem 5rem 0',
							gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
						})}>
						{switchRenderedCards()}
					</div>
				</>
			)}
		</>
	);
}
