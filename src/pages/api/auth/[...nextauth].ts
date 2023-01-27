import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { type NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '~/lib/prisma';

// import { env } from '~/schemas';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	callbacks: {
		session: async ({ session, token }) => {
			if (session.user) {
				session.user.id = token.sub!;
			}

			return session;
		},
		jwt: async ({ token, user }) => {
			if (user) {
				token.sub = user.id;
				token.email = user.email;
			}

			return token;
		},
	},
	jwt: {
		maxAge: 60 * 60 * 24 * 10,
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	session: {
		strategy: 'jwt',
	},
};

export default NextAuth(authOptions);
