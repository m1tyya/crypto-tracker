import type { NextPage } from 'next';

import { FilteredCards } from '~/features/coin';
import { SearchBar } from '~/features/search';

const Home: NextPage = () => (
	<>
		<SearchBar />
		<FilteredCards />
	</>
);

export default Home;
