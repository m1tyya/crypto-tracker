import Image from 'next/image';

import { styles } from '~/styles';
import type { CSS } from '~/types';

import type { Coin } from '../search';

type PickRenameMulti<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : 'Error: key not in T' }> = {
	[P in keyof T as P extends keyof R ? R[P] : P]: T[P];
};

type CoinCardProps = Omit<
	PickRenameMulti<Coin, { current_price: 'currentPrice'; price_change_percentage_24h: 'priceChangePercentage24H' }>,
	'id'
> & {
	position?: CSS;
};

export const CoinCard = ({ currentPrice, image, name, position, priceChangePercentage24H }: CoinCardProps) => (
	<div
		className={styles({
			...position,
			$$border: '.3rem',
			position: 'relative',
			background: 'linear-gradient(160deg, rgba(241, 212, 60, 0.6) 0%, rgba(197, 191, 61, 0) 75%)',
			backgroundClip: 'padding-box',
			borderRadius: '1rem',
			zIndex: '1',
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			padding: '2rem 4rem',
			gap: '1vw 4vw',

			'&::before': {
				backgroundColor: '$bg',
				content: '',
				position: 'absolute',
				inset: '0',
				zIndex: '-1',
				margin: '$$border',
				borderRadius: 'inherit',
			},
		})}>
		<h3
			className={styles({
				fontSize: '4rem',
				color: '#9A9A9A',
			})}>
			{name}
		</h3>
		<Image alt={`${name} Logo`} className={styles({ justifySelf: 'end' })} height='50' src={image} width='50' />
		<span
			className={styles({
				color: '#AFAFAF',
				fontSize: '2rem',
			})}>
			{currentPrice.toLocaleString('en-US', {
				minimumFractionDigits: 2,
			})}
		</span>
		<span
			className={styles({
				color: priceChangePercentage24H > 0 ? '$price-up' : '$price-down',
				fontSize: '2rem',
				justifySelf: 'end',
			})}>
			{Math.abs(priceChangePercentage24H).toLocaleString('en-US', {
				minimumFractionDigits: 2,
			})}
		</span>
	</div>
);
