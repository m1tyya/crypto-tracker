import { Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import { Container } from '~/components/container';
import { Navbar } from '~/layouts/navbar';
import { globalStyles } from '~/styles';
import { api } from '~/utils';

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
					<Provider>
						<Container>
							<Navbar />
							<Component {...pageProps} />
						</Container>
					</Provider>
				</SessionProvider>
			</Hydrate>
		</>
	);
}

export default api.withTRPC(App);
