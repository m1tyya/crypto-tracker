import { type NextApiRequest, type NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { prisma } from '~/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
	const token = await getToken({ req });

	if (!token) {
		res.status(401).end('Login to update coin data');

		return;
	}

	if (!token?.sub) {
		res.status(500).end('Server error. Try again later.');

		return;
	}

	const { id: coinId } = req.query;
	if (typeof coinId !== 'string') {
		res.status(400).end('Invalid query parameters. Please specify coin id to update.');

		return;
	}

	const [savedCoin] = (
		await prisma.user.findUniqueOrThrow({
			where: {
				id: token.sub,
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
			res.json(savedCoin !== undefined);
			break;
		}
		case 'POST': {
			if (savedCoin) {
				await prisma.user.update({
					where: {
						id: token.sub,
					},
					data: {
						savedCoins: {
							delete: {
								id: coinId,
							},
						},
					},
				});

				res.json(false);
				break;
			} else {
				await prisma.user.update({
					where: {
						id: token.sub,
					},
					data: {
						savedCoins: {
							create: {
								id: coinId,
							},
						},
					},
				});

				res.json(true);
				break;
			}
		}
		default: {
			res.status(405).end(`Method ${req.method} is invalid.`);
		}
	}
}
