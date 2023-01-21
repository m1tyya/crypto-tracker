import { AxiosError } from 'axios';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Vector } from '~/components/vector';
import { type CoinData, Add, ArrowDown, ArrowUp, Remove, useCoinStore } from '~/features/coin';
import { axios } from '~/lib/axios';
import { colors, styles } from '~/styles';
import type { CSS, PickRenameMulti } from '~/types';
import { formatFixedPoint, formatThousandSeparators } from '~/utils';

type Props = PickRenameMulti<
	CoinData,
	{ current_price: 'currentPrice'; price_change_percentage_24h: 'priceChangePercentage24H' }
> & {
	isInteractive: boolean;
	position?: CSS;
};

export function CoinCard({
	currentPrice,
	filters,
	id,
	image,
	isInteractive,
	name,
	position,
	priceChangePercentage24H,
	symbol,
}: Props) {
	const { save, unsave } = useCoinStore();
	// const { data, refetch } = useQuery({
	// 	enabled: false,
	// 	queryFn: async () => {
	// 		await fetch(`/api/coins/${id}`, { method: 'POST' });
	// 	},
	// 	queryKey: [id],
	// });
	const isSaved = filters.has('isSaved');
	const activeGridAreas = useRef<string>(`
		"info info"
		"market market"
	`);
	if (isInteractive) {
		activeGridAreas.current = `
			"actions actions"
			${activeGridAreas.current}
		`;
	}

	function handleToggle() {
		try {
			axios.post(`/coins/saved/${id}`);
			if (isSaved) {
				unsave(id);
			} else {
				save(id);
			}
		} catch (err) {
			if (err instanceof AxiosError) {
			}
		}
	}

	function formatPrice(price: number): string {
		return `$ ${formatThousandSeparators(formatFixedPoint(price, 2), ' ')}`;
	}

	function formatPriceChange(priceChange: number): string {
		return `${formatFixedPoint(Math.abs(priceChange), 2)} %`;
	}

	useEffect(() => {
		console.log(filters.has('isFound'));
	});

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
				gridTemplateAreas: activeGridAreas.current,
				padding: '2rem',
				'&:hover button': {
					visibility: 'visible',
				},
				letterSpacing: '.05rem',
			})}>
			{isInteractive && (
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
						onClick={handleToggle}>
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
			)}
			<div
				className={styles({
					gridArea: 'info',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: '1.5rem',
				})}>
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
				<Image alt={`${name} Logo`} height='50' src={image} width='50' />
			</div>
			<div
				className={styles({
					display: 'flex',
					justifyContent: 'space-between',
					gridArea: 'market',
					marginTop: '3rem',
				})}>
				<span
					className={styles({
						color: '#AFAFAF',
						fontSize: '$20',
						'@min0': {
							fontSize: '$10',
						},
					})}>
					{formatPrice(currentPrice)}
				</span>
				<div
					className={styles({
						display: 'flex',
						gap: '.6rem',
					})}>
					<Vector
						props={{
							fill: priceChangePercentage24H > 0 ? colors.success.value : colors.error.value,
							width: '10',
						}}
						Svg={priceChangePercentage24H > 0 ? ArrowUp : ArrowDown}
					/>
					<span
						className={styles({
							color: priceChangePercentage24H > 0 ? '$success' : '$error',
							fontSize: '$20',
							'@min0': {
								fontSize: '$10',
							},
						})}>
						{formatPriceChange(priceChangePercentage24H)}
					</span>
				</div>
			</div>
		</div>
	);
}
