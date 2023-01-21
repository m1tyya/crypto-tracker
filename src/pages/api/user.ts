import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req });
	if (!token) {
		return res.status(401).end('Log in first to access coin data.');
	}

	return res.json(token.sub);
}
