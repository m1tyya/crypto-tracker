import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Vector } from '~/components/vector';
import { useCoinStore } from '~/features/coin';
import { styles } from '~/styles';
import { stringsInclude } from '~/utils';

export function SearchBar() {
	const { coinList, resetShow, toggleShow } = useCoinStore();
	const searchQueryRef = useRef<HTMLInputElement>(null);
	const { events } = useRouter();

	function filterCoins() {
		if (!searchQueryRef.current) {
			throw new Error('Input not defined');
		}

		for (const coin of coinList) {
			const searchQuery = searchQueryRef.current.value;
			const isFound = stringsInclude(searchQuery, coin.name, coin.symbol);
			toggleShow(coin.id, isFound);
		}
	}

	useEffect(() => {
		events.on('routeChangeComplete', resetShow);

		return () => {
			events.off('routeChangeComplete', resetShow);
		};
	}, [events]);

	return (
		<div
			className={styles({
				backgroundColor: '#2e3034',
				margin: '0 auto',
				display: 'flex',
				alignItems: 'center',
				paddingX: '1.5rem',
				maxWidth: '50%',
				border: '2px solid #6D6D6D',
				height: '5rem',
				borderRadius: '1.5rem',
			})}>
			<Vector position={{ size: '2rem' }} Svg={BsSearch} />
			<input
				className={styles({
					backgroundColor: 'inherit',
					color: '$white',
					marginLeft: '1rem',
					flex: '1',
				})}
				id='search'
				name='search'
				onChange={() => filterCoins()}
				placeholder='Search for coins'
				ref={searchQueryRef}
				type='text'
			/>
		</div>
	);
}
