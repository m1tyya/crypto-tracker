import { useEffect, useState } from 'react';

import { type Filter } from '~/features/coin';
import { CoinCard, useCoinData, useCoinStore, useSavedCoinList } from '~/features/coin';
import { styles } from '~/styles';
import { type FetchError } from '~/types';

type Props = {
	pageFilters: Set<Filter>;
};

export function FilteredCards({ pageFilters }: Props) {
	const { coinList, updateData } = useCoinStore();
	const [fetchError, setFetchError] = useState<FetchError>({ message: '' });
	const {
		data: coinData,
		isError: isCoinDataError,
		isLoading: isCoinDataLoading,
		isSuccess: isCoinDataSuccess,
		status: coinDataStatus,
	} = useCoinData();

	const { data: savedCoinList, fetchStatus, isSuccess: isSavedCoinListSuccess, status } = useSavedCoinList();

	useEffect(() => {
		if (isCoinDataSuccess && isSavedCoinListSuccess) {
			updateData(coinData, savedCoinList);
		}
		// 	setFetchError({ message: '' });
		// } else if (isCoinDataSuccess) {
		// 	updateData(coinData);
		// 	setFetchError({ message: '' });
		// }
		// if (isCoinDataError) {
		// 	setFetchError({ message: 'An error occured.' });
		// }
	}, [isCoinDataSuccess, isSavedCoinListSuccess]);

	return (
		<>
			{isCoinDataSuccess && isSavedCoinListSuccess && (
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
					{coinList.map(
						({ current_price, filters, id, image, name, price_change_percentage_24h, symbol }) => {
							let hasFilters = true;
							for (const pageFilter of pageFilters.values()) {
								const activeFilters: Array<string> = Object.keys(filters).filter(
									(key) => filters[key as Filter],
								);

								if (!activeFilters.includes(pageFilter)) {
									hasFilters = false;
									break;
								}
							}

							return (
								hasFilters && (
									<CoinCard
										currentPrice={current_price}
										filters={filters}
										id={id}
										image={image}
										isInteractive={!pageFilters.has('isSaved')}
										key={id}
										name={name}
										priceChangePercentage24H={price_change_percentage_24h}
										symbol={symbol}
									/>
								)
							);
						},
					)}
				</div>
			)}
		</>
	);
}
