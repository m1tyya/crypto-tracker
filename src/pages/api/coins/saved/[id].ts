import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { axios } from '~/lib/axios';
import { prisma } from '~/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let userId;
	try {
		userId = await (await axios.get('/user')).data;
	} catch (err) {
		if (err instanceof AxiosError) {
			if (err.status) {
				return res.status(err.status)?.end(err.message);
			}

			return res.status(500).end(err.message);
		}

		throw err;
	}

	const { coinId } = req.query;
	if (typeof coinId !== 'string') {
		return res.status(400).end('Invalid query parameters. Please specify coin id to update.');
	}

	const [savedCoin] = (
		await prisma.user.findUniqueOrThrow({
			where: {
				id: userId,
			},
			select: {
				savedCoins: {
					where: {
						id: coinId,
					},
				},
			},
		})
	).savedCoins;

	switch (req.method) {
		case 'GET': {
			return savedCoin !== undefined;
		}
		case 'POST': {
			if (!savedCoin) {
				await prisma.user.update({
					where: {
						id: userId,
					},
					data: {
						savedCoins: {
							create: {
								id: coinId,
							},
						},
					},
				});

				return true;
			} else {
				await prisma.user.update({
					where: {
						id: userId,
					},
					data: {
						savedCoins: {
							delete: {
								id: coinId,
							},
						},
					},
				});
			}

			return false;
		}
		default: {
			res.status(405).end(`Method ${req.method} is invalid.`);
		}
	}
}
