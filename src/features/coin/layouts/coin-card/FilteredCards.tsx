import { type FilterList, CoinCard, useCoinStore } from '~/features/coin';
import { styles } from '~/styles';

type Props = {
	pageFilters: FilterList;
};

export function FilteredCards({ pageFilters }: Props) {
	const { coinList } = useCoinStore();

	return (
		<>
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
				{coinList.map(({ current_price, filters, id, image, name, price_change_percentage_24h, symbol }) => {
					for (const pageFilter of pageFilters.values()) {
						// if (!filters.has(pageFilter)) {
						// 	return;
						// }
					}

					return (
						<CoinCard
							currentPrice={current_price}
							filters={filters}
							id={id}
							image={image}
							isInteractive={pageFilters.has('isFound')}
							key={id}
							name={name}
							priceChangePercentage24H={price_change_percentage_24h}
							symbol={symbol}
						/>
					);
				})}
			</div>
		</>
	);
}
