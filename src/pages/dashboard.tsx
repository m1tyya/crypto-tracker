import { type GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { useRef } from 'react';

import { type Filter, FilteredCards } from '~/features/coin';
import { SearchBar } from '~/features/search';

function Dashboard() {
	const pageFilters = useRef<Set<Filter>>(new Set(['isFound']));

	return (
		<>
			<SearchBar />
			<FilteredCards pageFilters={pageFilters.current} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = await getToken({ req });
	if (!token) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return { props: {} };
};

export default Dashboard;
