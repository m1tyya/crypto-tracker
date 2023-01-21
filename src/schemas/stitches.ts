import { z } from 'zod';

export const stitchesConfigSchema = z.object({
	media: z.object({
		min0: z.string().refine(validateMediaQueries),
		min1: z.string().refine(validateMediaQueries),
		min2: z.string().refine(validateMediaQueries),
		min3: z.string().refine(validateMediaQueries),
	}),
	theme: z.object({
		colors: z.object({}),
	}),
});

function validateMediaQueries(query: string) {
	return query.includes('min-width:');
}
