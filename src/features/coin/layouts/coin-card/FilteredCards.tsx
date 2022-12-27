import { useEffect } from 'react';

import { FETCH_INTERVAL, useCoinStore } from '~/features/coin';
import { styles } from '~/styles';

import { CoinCard } from './CoinCard';

export const FilteredCards = () => {
	const { coinList, updateData } = useCoinStore((state) => state);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		async function getCoinData() {
			await updateData();
			timeoutId = setTimeout(getCoinData, FETCH_INTERVAL);
		}
		getCoinData();

		return () => {
			clearTimeout(timeoutId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
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
				({ current_price, id, image, isFound, isSaved, name, price_change_percentage_24h, symbol }) =>
					isFound && (
						<CoinCard
							currentPrice={current_price}
							id={id}
							image={image}
							isSaved={isSaved}
							key={id}
							name={name}
							priceChangePercentage24H={price_change_percentage_24h}
							symbol={symbol}
						/>
					),
			)}
		</div>
	);
};
