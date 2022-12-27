import Image from 'next/image';

import { Vector } from '~/components/vector';
import type { Coin } from '~/features/coin';
import { Add, ArrowDown, ArrowUp, Remove, useCoinStore } from '~/features/coin';
import { styles } from '~/styles';
import type { CSS, PickRenameMulti } from '~/types';
import { isPositive } from '~/utils';

type CoinCardProps = Omit<
	PickRenameMulti<Coin, { current_price: 'currentPrice'; price_change_percentage_24h: 'priceChangePercentage24H' }>,
	'isFound'
> & {
	position?: CSS;
};

export const CoinCard = ({
	currentPrice,
	id,
	image,
	isSaved,
	name,
	position,
	priceChangePercentage24H,
}: CoinCardProps) => {
	const toggleSave = useCoinStore((state) => state.toggleSave);

	return (
		<div
			className={styles({
				...position,
				$$border: '.3rem',
				position: 'relative',
				backgroundColor: '#222531',
				border: '2px solid #3d3d3d',
				borderRadius: '2rem',
				zIndex: '1',
				display: 'grid',
				alignItems: 'center',
				gridTemplateColumns: 'auto auto',
				gridTemplateAreas: '"actions actions" "name logo" "price price-change"',
				padding: '1rem 2rem 2rem',
				gap: '2rem 1rem',
				'&:hover button': {
					visibility: 'visible',
				},
			})}>
			<div
				className={styles({
					gridArea: 'actions',
					justifySelf: 'end',
				})}>
				<button
					className={styles({
						visibility: 'hidden',
						size: '3rem',
						borderRadius: '1rem',
						backgroundColor: '#1C1C1C',
					})}
					onClick={() => toggleSave(id)}>
					<Vector
						position={{
							display: 'block',
							margin: '0 auto',
						}}
						props={{
							fill: '#fff',
							width: '50%',
						}}
						Svg={isSaved ? Remove : Add}
					/>
				</button>
			</div>
			<h3
				className={styles({
					fontSize: '$40',
					'@min0': {
						fontSize: '$20',
					},
					color: '#9A9A9A',
				})}>
				{name}
			</h3>
			<Image alt={`${name} Logo`} className={styles({ justifySelf: 'end' })} height='50' src={image} width='50' />
			<span
				className={styles({
					color: '#AFAFAF',
					fontSize: '$20',
					'@min0': {
						fontSize: '$10',
					},
				})}>
				{`$ ${currentPrice.toLocaleString('en-US', {
					minimumFractionDigits: 2,
				})}`}
			</span>
			<div
				className={styles({
					display: 'flex',
					gap: '.6rem',
					justifySelf: 'end',
				})}>
				<Vector
					props={{ fill: isPositive(priceChangePercentage24H) ? '#2acc25' : '#ff0f0f', width: '1rem' }}
					Svg={isPositive(priceChangePercentage24H) ? ArrowUp : ArrowDown}
				/>
				<span
					className={styles({
						color: isPositive(priceChangePercentage24H) ? '$price-up' : '$price-down',
						fontSize: '$20',
						'@min0': {
							fontSize: '$10',
						},
					})}>
					{`${Math.abs(priceChangePercentage24H).toLocaleString('en-US', {
						minimumFractionDigits: 2,
					})} %`}
				</span>
			</div>
		</div>
	);
};
