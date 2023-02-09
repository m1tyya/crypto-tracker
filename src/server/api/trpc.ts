/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * tl;dr - This is where all the tRPC server stuff is created and plugged in.
 * The pieces you will need to use are documented accordingly near the end.
 */

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the
 * database, the session, etc.
 */
/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and
 * transformer.
 */
import { type PrismaClient } from '@prisma/client';
import { initTRPC, TRPCError } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { type Session } from 'next-auth';
import superjson from 'superjson';

import { getServerAuthSession } from '../auth';
import { prisma } from '../db';

type CreateContextOptions = {
	session: Session | null;
};

type InnerContext = {
	prisma: PrismaClient;
	session: Session | null;
};

const createInnerTrpcContext = ({ session }: CreateContextOptions): InnerContext => ({
	session,
	prisma,
});

export const createTrpcContext = async (opts: CreateNextContextOptions) => {
	const { req, res } = opts;
	const session = await getServerAuthSession({ req, res });

	return createInnerTrpcContext({
		session,
	});
};

const t = initTRPC.context<typeof createTrpcContext>().create({
	transformer: superjson,
	errorFormatter({ shape }) {
		return shape;
	},
});

export const createTrpcRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
	if (!ctx.session || !ctx.session.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			session: { ...ctx.session, user: ctx.session.user },
		},
	});
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
