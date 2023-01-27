import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { useRef } from 'react';

import { Container } from '~/components/container';
import { Navbar } from '~/layouts/navbar';
import { globalStyles } from '~/styles';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
	const queryClient = useRef(new QueryClient());

	return (
		<>
			{globalStyles()}
			<Head>
				<meta charSet='utf-8' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<title>App</title>
			</Head>
			<QueryClientProvider client={queryClient.current}>
				<Hydrate state={pageProps.dehydratedState}>
					<ReactQueryDevtools initialIsOpen={false} />
					<SessionProvider session={pageProps.session}>
						<Container>
							<Navbar />
							<Component {...pageProps} />
						</Container>
					</SessionProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	);
}

export default App;
