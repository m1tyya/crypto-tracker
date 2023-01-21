import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { prisma } from '~/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(405).end('Only GET requests allowed.');
	}

	const token = await getToken({ req });
	if (!token) {
		res.end('Login to access coin data');
	}

	res.json(
		(
			await prisma.user.findUniqueOrThrow({
				where: {
					id: token!.sub,
				},
				select: {
					savedCoins: true,
				},
			})
		).savedCoins,
	);
}
