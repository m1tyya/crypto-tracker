import { type SavedCoin } from '@prisma/client';
import { type QueryStatus } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import _ from 'lodash';

import {
	type Coin,
	type CoinFetchData,
	type CoinFilters,
	type Filter,
	CoinCard,
	searchAtom,
	SearchBar,
	useCoinsFetch,
	useCoinsSavedGetAll,
} from '~/features/coin';
import { styles } from '~/styles';
import { stringsInclude } from '~/utils';

export function syncCoinData(coinData: Array<CoinFetchData>, savedCoinList: Array<SavedCoin>): Array<Coin> {
	const coinList: Array<Coin> = coinData.map((dataInstance) => {
		const filters: CoinFilters = { isSaved: false };

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
		isError,
		isSuccess,
		status: statusCoinData,
	} = useCoinsFetch();
	const {
		data: savedCoinList,
		fetchStatus: fetchStatusSavedCoinList,
		status: statusSavedCoinList,
	} = useCoinsSavedGetAll();
	const searchQuery = useAtomValue(searchAtom);

	const status = ((): QueryStatus => {
		if (statusCoinData === 'loading' || statusSavedCoinList === 'loading') {
			return 'loading';
		} else if (statusCoinData === 'error' || statusSavedCoinList === 'error') {
			return 'error';
		}

		return 'success';
	})();

	function onSuccess() {
		return syncCoinData(coinData!, savedCoinList!).map(
			({ current_price, filters, id, image, name, price_change_percentage_24h, symbol }) => {
				let isFiltered = true;
				for (const pageFilter of pageFilters.values()) {
					const activeFilters: Array<string> = Object.keys(filters).filter((key) => filters[key as Filter]);

					if (!activeFilters.includes(pageFilter)) {
						isFiltered = false;
						break;
					}
				}

				const isFound = stringsInclude(searchQuery, name, symbol);

				return (
					isFiltered &&
					isFound && (
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
		);
	}

	function onLoad() {
		return _.times(4, (index) => <CoinCard isInteractive={!pageFilters.has('isSaved')} isLoaded={false} key={index} />);
	}

	function onError() {
		return <p>Error fetching data</p>;
	}

	return (
		<>
			<SearchBar />
			{status === 'error' && onError()}
			<div
				className={styles({
					display: 'grid',
					gap: '2rem',
					margin: '4rem 5rem 0',
					'@min0': {
						gridTemplateColumns: 'repeat(2, 1fr)',
					},
					'@min1': {
						gridTemplateColumns: 'repeat(3, 1fr)',
					},
					'@min2': {
						gridTemplateColumns: 'repeat(4, 1fr)',
					},
				})}>
				{status === 'success' && onSuccess()}
				{status === 'loading' && onLoad()}
			</div>
		</>
	);
}
