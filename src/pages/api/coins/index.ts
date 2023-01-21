import type { NextApiRequest, NextApiResponse } from 'next';
import { ZodError } from 'zod';

import type { CoinFetchData } from '~/features/coin';
import { CoinDataSchema, URL } from '~/features/coin';
import type { ResponseError } from '~/types';

type ResponseSuccess = Array<CoinFetchData>;

type ResponseData = ResponseError | ResponseSuccess;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: `${req.method} not allowed. You can only make GET requests.` });
	}

	const coinData = (await (await fetch(URL)).json()) as Array<CoinFetchData>;

	try {
		CoinDataSchema.parse(coinData.at(0));

		return res.json(coinData);
	} catch (err) {
		if (err instanceof ZodError) {
			return res.status(500).end(err.message);
		}
	}
};
