import type { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]';

function Home() {
	return (
		<>
			<h1>Home Page</h1>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await unstable_getServerSession(req, res, authOptions);
	if (session) {
		return {
			redirect: {
				destination: '/dashboard',
				permanent: false,
			},
		};
	}

	return { props: {} };
};

export default Home;
