import { type GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';

function Home() {
	return (
		<>
			<h1>Home Page</h1>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = await getToken({ req });
	if (token) {
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
