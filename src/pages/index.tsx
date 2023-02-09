import { type GetServerSideProps } from 'next';
import { crypto } from 'public/images';

import { getServerAuthSession } from '~/server';
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
				<div
					className={styles({
						width: 'max(25rem, 33%)',
						marginTop: '$3',
					})}>
					<picture>
						<img sizes='' src={crypto.src} width='300vw' />
					</picture>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerAuthSession(ctx);
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
