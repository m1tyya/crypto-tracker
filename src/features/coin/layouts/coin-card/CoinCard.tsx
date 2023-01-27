import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useRef } from 'react';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

import { Vector } from '~/components/vector';
import { type CoinData, useCoinStore } from '~/features/coin';
import { axios } from '~/lib/axios';
import { colors, styles } from '~/styles';
import { type CSS, type PickRenameMulti } from '~/types';
import { formatFixedPoint, formatThousandSeparators } from '~/utils';

type Props = PickRenameMulti<
	CoinData,
	{ current_price: 'currentPrice'; price_change_percentage_24h: 'priceChangePercentage24H' }
> & {
	isInteractive: boolean;
	position?: CSS;
};

function formatPrice(price: number): string {
	return `$ ${formatThousandSeparators(formatFixedPoint(price, 2), ' ')}`;
}

function formatPriceChange(priceChange: number): string {
	return `${formatFixedPoint(Math.abs(priceChange), 2)} %`;
}

export function CoinCard({
	currentPrice,
	filters: { isSaved },
	id,
	image,
	isInteractive,
	name,
	position,
	priceChangePercentage24H,
	symbol,
}: Props) {
	const { toggleSave } = useCoinStore();
	const {
		error,
		isSuccess: isToggleSavedSuccess,
		mutate: mutateSaved,
	} = useMutation({
		mutationFn: async (id: string) => await axios.post<boolean>(`/coins/saved/${id}`),
	});
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
			mutateSaved(id);
			toggleSave(id, !isSaved);
		} catch (err) {
			if (err instanceof AxiosError) {
			}
		}
	}

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
				transition: 'all .2s ease-in-out',
				'&:hover': {
					borderColor: '#6e6d6d',
					transform: 'scale(1.04)',
				},
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
								color: 'white',
							}}
							Svg={isSaved ? HiOutlineX : HiOutlinePlus}
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
				<div
					className={styles({
						display: 'flex',
						flexDirection: 'column',
					})}>
					<h3
						className={styles({
							fontSize: '$40',
							'@min0': {
								fontSize: '$20',
							},
							color: '$white',
						})}>
						{name}
					</h3>
					<h3
						className={styles({
							fontSize: '$30',
							'@min0': {
								fontSize: '$10',
							},
							marginTop: '$2',
							color: '#9A9A9A',
						})}>
						{symbol.toUpperCase()}
					</h3>
				</div>

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
						alignItems: 'center',
						gap: '.6rem',
					})}>
					<Vector
						props={{
							fill: priceChangePercentage24H > 0 ? colors.success.value : colors.error.value,
							width: '10',
						}}
						Svg={priceChangePercentage24H > 0 ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown}
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
