import { type GetServerSideProps } from 'next';
import { useRef } from 'react';

import { type Filter, FilteredCards } from '~/features/coin';
import { getServerAuthSession } from '~/server';

function Dashboard() {
	const pageFilters = useRef<Set<Filter>>(new Set([]));

	return (
		<>
			<FilteredCards pageFilters={pageFilters.current} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerAuthSession(ctx);
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

export default Dashboard;
