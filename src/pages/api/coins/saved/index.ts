import { type NextApiRequest, type NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { prisma } from '~/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(405).end('Only GET requests allowed.');
	}

	const token = await getToken({ req });
	if (!token) {
		res.status(401).end('Login to access coin data');

		return;
	}

	if (!token?.sub) {
		res.status(500).end('Server error. Try again later.');

		return;
	}

	res.json(
		(
			await prisma.user.findUniqueOrThrow({
				where: {
					id: token.sub,
				},
				select: {
					savedCoins: true,
				},
			})
		).savedCoins,
	);
}
