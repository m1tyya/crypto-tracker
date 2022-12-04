import { type AppProps, type AppType } from 'next/app';
import Head from 'next/head';

import { Container } from '~/components/container';
import { Navbar } from '~/layouts/navbar';
import { globalStyles } from '~/styles';

const RootLayout: AppType = ({ Component, pageProps }: AppProps) => (
	<>
		{globalStyles()}
		<Head>
			<meta charSet='utf-8' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<title>App</title>
		</Head>
		<Container>
			<Navbar />
			<Component {...pageProps} />
		</Container>
		<Component />
	</>
);

export default RootLayout;
