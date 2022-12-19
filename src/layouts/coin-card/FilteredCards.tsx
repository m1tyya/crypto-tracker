import { styles } from '~/styles';

import type { Coin } from '../search';
import { CoinCard } from './CoinCard';

type FilteredCardsProps = {
	filteredCoinList: Array<Coin>;
};

export const FilteredCards = ({ filteredCoinList }: FilteredCardsProps) => (
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
		{filteredCoinList.map(({ current_price, id, image, name, price_change_percentage_24h, symbol }) => (
			<CoinCard
				currentPrice={current_price}
				image={image}
				key={id}
				name={name}
				priceChangePercentage24H={price_change_percentage_24h}
				symbol={symbol}
			/>
		))}
	</div>
);
