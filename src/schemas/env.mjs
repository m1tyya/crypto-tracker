// @ts-check
import { z } from 'zod';

const envSchemaServer = z.object({
	DATABASE_URL: z.string().url(),
	GOOGLE_CLIENT_ID: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	JWT_SECRET: z.string(),
	NEXTAUTH_SECRET: z.string().length(32),
	NEXTAUTH_URL: z.string().url(),
	NODE_ENV: z.enum(['development', 'production', 'test']),
});

const envSchemaClient = z.object({
	// NEXT_PUBLIC_VAR: z.string(),
});

// export const env = envSchemaServer.parse(process.env);
