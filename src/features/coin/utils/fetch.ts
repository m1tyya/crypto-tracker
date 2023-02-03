import { type z } from 'zod';

import { axios } from '~/lib/axios';

export async function zodGet<TResponseSchema extends z.Schema>(
	url: string,
	responseSchema: TResponseSchema,
): Promise<z.infer<TResponseSchema>> {
	const response = await axios<z.infer<TResponseSchema>>(url, {
		method: 'GET',
	});

	return responseSchema.parse(response.data);
}

export async function zodPost<TQuerySchema extends z.Schema, TResponseSchema extends z.Schema>(
	url: string,
	querySchema: TQuerySchema,
	query: z.infer<TQuerySchema>,
	responseSchema: TResponseSchema,
): Promise<z.infer<TResponseSchema>> {
	const response = await axios(url, {
		method: 'POST',
		data: JSON.stringify({
			query: querySchema.parse(query),
		}),
	});

	return responseSchema.parse(await response.data);
}
