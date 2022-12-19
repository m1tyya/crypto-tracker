import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import { z } from 'zod';

import { Vector } from '~/components/vector';
import { styles } from '~/styles';
import { stringIncludes } from '~/utils';
import Search from '~vectors/search.svg';

export const CoinSchema = z.object({
	id: z.string(),
	image: z.string(),
	name: z.string(),
	current_price: z.number().transform((num) => +num.toFixed(2)),
	price_change_percentage_24h: z.number().transform((num) => +num.toFixed(2)),
	symbol: z.string(),
});

export type Coin = z.infer<typeof CoinSchema>;

type SearchBarProps = {
	coinList: Array<Coin>;
	setFilteredCoinList: Dispatch<SetStateAction<Array<Coin>>>;
};

export const SearchBar = ({ coinList, setFilteredCoinList }: SearchBarProps) => {
	const searchQueryRef = useRef<HTMLInputElement>(null);

	function filterCoins() {
		if (!searchQueryRef.current) {
			throw new Error('Input not defined');
		}

		setFilteredCoinList([]);
		for (const coin of coinList) {
			const searchQuery = searchQueryRef.current.value;
			if (stringIncludes(coin.name, searchQuery)) {
				setFilteredCoinList((prev) => [...prev, coin]);
			}
		}
	}

	return (
		<div
			className={styles({
				backgroundColor: '#2e3034',
				margin: '0 auto',
				display: 'flex',
				alignItems: 'center',
				paddingX: '2rem',
				maxWidth: '50%',
				border: '2px solid #6D6D6D',
				height: '5rem',
				borderRadius: '1.5rem',
			})}>
			<Vector props={{ fill: '#fff', height: '50%' }} Svg={Search} />

			<input
				className={styles({
					backgroundColor: 'inherit',
					color: '$white',
					marginLeft: '1rem',
					flex: '1',
				})}
				id='search'
				name='search'
				onChange={filterCoins}
				placeholder='Search for coins'
				ref={searchQueryRef}
				type='text'
			/>
		</div>
	);
};
