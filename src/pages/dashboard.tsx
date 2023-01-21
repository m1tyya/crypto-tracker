import { useQuery } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { useEffect, useRef, useState } from 'react';

import type { CoinFetchData } from '~/features/coin';
import { type FilterList, FETCH_INTERVAL, FilteredCards, useCoinStore } from '~/features/coin';
import { SearchBar } from '~/features/search';
import { axios } from '~/lib/axios';
import { type FetchError } from '~/types';

type Props = {
	userId: string;
};

function Dashboard({ userId }: Props) {
	const pageFilters = useRef<FilterList>(new Set(['isFound']));
	const [fetchError, setFetchError] = useState<FetchError>({ message: '' });
	const { add, coinList, updateData } = useCoinStore();
	const {
		data: coinData,
		isError: isCoinDataError,
		isLoading: isCoinDataLoading,
		isSuccess: isCoinDataSuccess,
		status: coinDataStatus,
	} = useQuery({
		queryFn: async () => await (await axios.get<Array<CoinFetchData>>('/coins')).data,
		queryKey: ['coin-data'],
		refetchInterval: FETCH_INTERVAL,
	});

	const {
		data: savedCoinList,
		isSuccess: isSavedCoinListSuccess,
		refetch: refetchSavedCoins,
	} = useQuery({
		queryFn: async () => await (await axios.get('/coins/saved')).data,
		queryKey: ['saved-coins', coinList],
	});

	useEffect(() => {
		// if (isSavedCoinListSuccess) {
		// 	console.log(savedCoinList);
		// }
		// if (coinList.length === 0) {
		// 	refetchSavedCoins();
		// }
		// if (isCoinDataSuccess && isSavedCoinListSuccess) {
		// 	updateData(coinData, savedCoinList);
		// 	setFetchError({ message: '' });
		// } else if (isCoinDataSuccess) {
		// 	updateData(coinData);
		// 	setFetchError({ message: '' });
		// }
		// if (isCoinDataError) {
		// 	setFetchError({ message: 'An error occured.' });
		// }
	}, [coinDataStatus]);

	return (
		<>
			{isCoinDataSuccess && <SearchBar />}
			{/* {isCoinDataError && <ErrorText errorMessage={fetchError.message} />} */}
			{isCoinDataSuccess && <FilteredCards pageFilters={pageFilters.current} />}
			{/* {isCoinDataLoading && <h3>Loading...</h3>} */}
		</>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
	const token = await getToken({ req });
	if (!token) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return { props: { userId: token.sub! } };
};

export default Dashboard;
