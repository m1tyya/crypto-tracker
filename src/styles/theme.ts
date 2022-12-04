import { createStitches, defaultThemeMap } from '@stitches/react';

import { type CSS } from '~/types';

export const { config, css, getCssText, globalCss, styled, theme } = createStitches({
	media: {
		min0: '(min-width: 600px)',
		min1: '(min-width: 900px)',
		min2: '(min-width: 1200px)',
		min3: '(min-width: 1500px)',
	},
	theme: {
		colors: {
			text: 'hsl(0 0% 95%)',
			bg: '#0E0C12',
		},
		space: {
			1: '1rem',
			2: '2rem',
			3: '3rem',
			4: '3rem',
			re1: '1vw',
			re2: '4vw',
			re3: '6vw',
		},
	},
	themeMap: {
		...defaultThemeMap,
		paddingX: 'space',
		paddingY: 'space',
	},
	utils: {
		marginX: (value: string) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: string) => ({
			marginTop: value,
			marginBottom: value,
		}),
		paddingX: (value: string) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: string) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		size: (value: string) => ({
			width: value,
			height: value,
		}),
	},
});

export function styles(content: CSS) {
	return css({ ...content })();
}