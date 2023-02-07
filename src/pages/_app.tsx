import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import { Container } from '~/components/container';
import { Navbar } from '~/layouts/navbar';
import { globalStyles } from '~/styles';
import { trpc } from '~/utils';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			{globalStyles()}
			<Head>
				<meta charSet='utf-8' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<title>App</title>
			</Head>
			<Hydrate state={pageProps.dehydratedState}>
				<ReactQueryDevtools initialIsOpen={false} />
				<SessionProvider session={session}>
					<Container>
						<Navbar />
						<Component {...pageProps} />
					</Container>
				</SessionProvider>
			</Hydrate>
		</>
	);
}

export default trpc.withTRPC(App);
