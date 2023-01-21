import { useRef } from 'react';

import { Vector } from '~/components/vector';
import { useCoinStore } from '~/features/coin';
import { Search } from '~/features/search';
import { styles } from '~/styles';
import { stringIncludes } from '~/utils';

export function SearchBar() {
	const { coinList, hide, show } = useCoinStore();
	const searchQueryRef = useRef<HTMLInputElement>(null);

	function filterCoins() {
		if (!searchQueryRef.current) {
			throw new Error('Input not defined');
		}

		for (const coin of coinList) {
			const searchQuery = searchQueryRef.current.value;
			if (stringIncludes(coin.name, searchQuery)) {
				show(coin.id);
			} else {
				hide(coin.id);
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
				paddingX: '1.5rem',
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
				onChange={() => filterCoins()}
				placeholder='Search for coins'
				ref={searchQueryRef}
				type='text'
			/>
		</div>
	);
}
