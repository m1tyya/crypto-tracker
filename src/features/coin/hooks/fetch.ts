import { useQuery } from '@tanstack/react-query';
import { type ZodSchema, ZodError } from 'zod';

import { zodGet } from '../utils';

export function useQueryDisabled(url: string, schema: ZodSchema) {
	return useQuery({
		enabled: false,
		queryFn: () => fetchData(url, schema),
		queryKey: [url, schema],
	});
}

async function fetchData(url: string, schema: ZodSchema) {
	let res;
	try {
		res = await zodGet(url, schema);
	} catch (err) {
		if (err instanceof ZodError) {
			throw err.message;
		}
		throw err;
	}

	return res;
}
