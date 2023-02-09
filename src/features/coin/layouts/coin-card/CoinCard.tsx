import Image from 'next/image';
import { useRef } from 'react';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { ZodError } from 'zod';

import { Vector } from '~/components/vector';
import { type Coin, useCoinsSavedPost } from '~/features/coin';
import { colors, styles, theme } from '~/styles';
import { type PickRenameMulti } from '~/types';
import { formatFixedPoint, formatThousandSeparators } from '~/utils';

type GeneralProps = PickRenameMulti<
	Coin,
	{ current_price: 'currentPrice'; price_change_percentage_24h: 'priceChangePercentage24H' }
>;

type LoadedProps = GeneralProps & {
	isInteractive: boolean;
	isLoaded: true;
};

type LoadingProps = Partial<GeneralProps> & { isInteractive: boolean; isLoaded: false };

type Props = LoadedProps | LoadingProps;

function formatPrice(price: number): string {
	return `$ ${formatThousandSeparators(formatFixedPoint(price, 2), ' ')}`;
}

function formatPriceChange(priceChange: number): string {
	return `${formatFixedPoint(Math.abs(priceChange), 2)} %`;
}

export function CoinCard({
	currentPrice,
	filters,
	id,
	image,
	isInteractive,
	isLoaded,
	name,
	priceChangePercentage24H,
	symbol,
}: Props) {
	const { mutate: toggleSaved, status: statusToggleSaved } = useCoinsSavedPost();
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
			toggleSaved({ coinId: id!, isSaved: filters!.isSaved });
		} catch (err) {
			if (err instanceof ZodError) {
			}
		}
	}

	return (
		<div
			className={styles({
				$$border: '.3rem',
				position: 'relative',
				backgroundColor: '#222531',
				border: '2px solid #3d3d3d',
				borderRadius: '2rem',
				zIndex: '1',
				display: 'grid',
				alignItems: 'center',
				gridTemplateColumns: '1fr 1fr',
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
						height: '3rem',
					})}>
					{isLoaded && (
						<>
							<button
								className={styles({
									visibility: 'hidden',
									size: '3rem',
									borderRadius: '1rem',
									backgroundColor: '#1C1C1C',
								})}
								onClick={handleToggle}
								title={filters.isSaved ? 'Unsave' : 'Save'}>
								<Vector
									position={{
										display: 'block',
										margin: '0 auto',
										color: 'white',
									}}
									Svg={filters.isSaved ? HiOutlineX : HiOutlinePlus}
								/>
							</button>
						</>
					)}
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
						flex: '1 1 auto',
						flexDirection: 'column',
					})}>
					<div
						className={styles({
							$$fontSize: theme.fontSizes[40],
							'@min0': {
								$$fontSize: theme.fontSizes[20],
							},
							overflow: 'hidden',
							borderRadius: '.8rem',
							backgroundColor: isLoaded ? 'inherit' : 'Silver',
							height: '$$fontSize',
							fontSize: '$$fontSize',
							width: isLoaded ? 'auto' : '60%',
						})}>
						{isLoaded && (
							<h3
								className={styles({
									'@min0': {
										fontSize: '$20',
									},
									color: '$white',
								})}>
								{name}
							</h3>
						)}
					</div>

					<div
						className={styles({
							$$fontSize: theme.fontSizes[30],
							'@min0': {
								$$fontSize: theme.fontSizes[10],
							},
							borderRadius: '.6rem',
							backgroundColor: isLoaded ? 'inherit' : 'Silver',
							height: '$$fontSize',
							fontSize: '$$fontSize',
							width: isLoaded ? 'auto' : '20%',
							marginTop: '$2',
						})}>
						{isLoaded && (
							<h3
								className={styles({
									color: '#9A9A9A',
								})}>
								{symbol.toUpperCase()}
							</h3>
						)}
					</div>
				</div>
				<div
					className={styles({
						size: '5rem',
						position: 'relative',
						overflow: 'hidden',
						borderRadius: isLoaded ? 'unset' : '3rem',
						backgroundColor: isLoaded ? 'inherit' : 'Silver',
					})}>
					{isLoaded && (
						<Image
							alt={`${name} Logo`}
							fill={true}
							priority={true}
							sizes='50'
							src={image}
							style={{ objectFit: 'cover' }}
						/>
					)}
				</div>
			</div>
			<div
				className={styles({
					display: 'flex',
					flex: '1 1 auto',
					justifyContent: 'space-between',
					gridArea: 'market',
					marginTop: '3rem',
				})}>
				<div
					className={styles({
						$$fontSize: theme.fontSizes[20],
						'@min0': {
							$$fontSize: theme.fontSizes[10],
						},
						borderRadius: '.8rem',
						backgroundColor: isLoaded ? 'inherit' : 'Silver',
						height: '$$fontSize',
						fontSize: '$$fontSize',
						width: isLoaded ? 'auto' : '40%',
					})}>
					{isLoaded && (
						<span
							className={styles({
								color: '#AFAFAF',
							})}>
							{formatPrice(currentPrice)}
						</span>
					)}
				</div>
				<div
					className={styles({
						display: 'flex',
						alignItems: 'center',
						gap: '.6rem',
						backgroundColor: isLoaded ? 'inherit' : 'Silver',
						// width: '70%'
					})}>
					{isLoaded && (
						<>
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
						</>
					)}
				</div>
			</div>
		</div>
	);
}
