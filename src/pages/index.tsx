import { type GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { Crypto } from 'public/vectors';

import { Vector } from '~/components/vector';
import { raleway, styles } from '~/styles';

function Home() {
	return (
		<>
			<div
				className={styles({
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					marginX: '5rem',
					textAlign: 'center',
				})}>
				<h2
					className={styles({
						marginTop: '10rem',
						fontSize: 'calc($60 + 2rem)',
						fontWeight: 'bold',
						letterSpacing: '.2rem',
						lineHeight: '130%',
						...raleway.style,
					})}>
					<span className={styles({ color: '#ECC32C' })}>Track</span> crypto prices with{' '}
					<span className={styles({ color: '#DB511F' })}>Taste</span>
				</h2>
				<Vector position={{ width: 'max(30rem, 35%)', marginTop: '$3' }} Svg={Crypto} title='Crypto coins' />
			</div>
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
