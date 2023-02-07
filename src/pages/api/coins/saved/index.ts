import { type NextApiRequest, type NextApiResponse } from 'next';

import { getServerAuthSession, prisma } from '~/server';

export default async function create(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(405).end('Only GET requests allowed.');
	}

	const session = await getServerAuthSession({ req, res });
	if (!session) {
		res.status(401).end('Login to access coin data');

		return;
	}

	res.json(
		(
			await prisma.user.findUniqueOrThrow({
				where: {
					id: session.user.id,
				},
				select: {
					savedCoins: true,
				},
			})
		).savedCoins,
	);
}
