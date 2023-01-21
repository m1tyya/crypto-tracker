import { useSession } from 'next-auth/react';

export function useUserId() {
	const { data } = useSession();
	if (!data?.user) {
		return -1;
	}

	return data.user.id;
}
