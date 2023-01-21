import type { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { useRef } from 'react';

import { type FilterList, FilteredCards } from '~/features/coin';
import { SearchBar } from '~/features/search';

import { authOptions } from './api/auth/[...nextauth]';

function Saved() {
	const filters = useRef<FilterList>(new Set(['isSaved']));

	return (
		<>
			<SearchBar />
			<FilteredCards pageFilters={filters.current} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return { props: {} };
};

export default Saved;
