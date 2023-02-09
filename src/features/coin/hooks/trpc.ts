import { api } from '~/utils';

import { FETCH_INTERVAL } from '../constants';

export function useCoinsFetch() {
	return api.coin.fetch.useQuery(undefined, { staleTime: FETCH_INTERVAL });
}

export function useCoinsSavedGetAll() {
	return api.coin.saved.getAll.useQuery();
}

export function useCoinsSavedPost() {
	const context = api.useContext();

	return api.coin.saved.post.useMutation({
		onSuccess: () => {
			context.coin.saved.getAll.invalidate();
		},
	});
}
