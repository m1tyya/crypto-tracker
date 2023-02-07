import { type MutableRefObject, forwardRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Vector } from '~/components/vector';
import { FETCH_INTERVAL } from '~/features/coin';
import { styles } from '~/styles';
import { trpc } from '~/utils';

type Props = {
	searchQueryRef: MutableRefObject<HTMLInputElement | undefined>;
};

export const SearchBar = forwardRef(({ searchQueryRef }: Props) => {
	const {
		data: coinData,
		fetchStatus: fetchStatusCoinData,
		status: statusCoinData,
	} = trpc.coin.coinMarketData.useQuery(undefined, { staleTime: FETCH_INTERVAL });
	const {
		data: savedCoinList,
		fetchStatus: fetchStatusSavedCoinList,
		status: statusSavedCoinList,
	} = trpc.coin.savedCoinList.useQuery();

	return (
		<div
			className={styles({
				backgroundColor: '#2e3034',
				margin: '0 auto',
				display: 'flex',
				alignItems: 'center',
				marginTop: '$4',
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
				placeholder='Search for coins'
				ref={searchQueryRef as MutableRefObject<HTMLInputElement>}
				type='text'
			/>
		</div>
	);
});
