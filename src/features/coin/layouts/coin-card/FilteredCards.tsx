import _ from 'lodash';
import { CoinSchema } from 'prisma/zod';
import { useEffect, useState } from 'react';

import { type Filter, CoinCard, CoinDataSchema, FETCH_INTERVAL, useCoinStore, useQueryDisabled } from '~/features/coin';
import { mediaQueryIndex } from '~/hooks';
import { bps, styles } from '~/styles';

type Props = {
	pageFilters: Set<Filter>;
};

export function FilteredCards({ pageFilters }: Props) {
	const { coinList, queryError, updateMarketData, updateQueryError } = useCoinStore();
	const {
		data: coinData,
		fetchStatus: fetchStatusCoinData,
		refetch: refetchCoinData,
		status: statusCoinData,
	} = useQueryDisabled('/coins', CoinDataSchema.array());
	const {
		data: savedCoinList,
		fetchStatus: fetchStatusSavedCoinList,
		refetch: refetchSavedCoinList,
		status: statusSavedCoinList,
	} = useQueryDisabled('/coins/saved', CoinSchema.array());
	const [gridColumns, setGridColumns] = useState(0);

	async function updateCoinData() {
		await refetchSavedCoinList();
		await refetchCoinData();
		if (statusCoinData === 'success' && statusSavedCoinList === 'success') {
			updateMarketData(coinData, savedCoinList);
			updateQueryError('');
		} else if (statusCoinData === 'error') {
			updateQueryError('Error fetching coin data. Try again later.');
		} else if (statusSavedCoinList === 'error') {
			updateQueryError('Error fetching saved coins. Try again later.');
		}
	}

	useEffect(() => {
		updateCoinData();
		const intervalId = setInterval(() => {
			updateCoinData();
		}, FETCH_INTERVAL);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

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
		const isLoaded = statusCoinData === 'success' && statusSavedCoinList === 'success';

		return isLoaded
			? coinList.map(({ current_price, filters, id, image, name, price_change_percentage_24h, symbol }) => {
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
			  })
			: _.times(gridColumns, (index) => (
					<CoinCard isInteractive={!pageFilters.has('isSaved')} isLoaded={false} key={index} />
			  ));
	}

	return (
		<>
			{statusCoinData === 'error' || statusSavedCoinList === 'error' ? (
				<p>Error fetching data</p>
			) : (
				<div
					className={styles({
						display: 'grid',
						gap: '2rem',
						margin: '4rem 5rem 0',
						gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
					})}>
					{switchRenderedCards()}
				</div>
			)}
		</>
	);
}
