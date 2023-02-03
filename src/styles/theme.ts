import { createStitches, defaultThemeMap } from '@stitches/react';
import { type Property } from '@stitches/react/types/css';

import { stitchesConfigSchema } from '~/schemas';
import { type CSS } from '~/types';

export const bps: Array<number> = [600, 900, 1200, 1500];

export const { config, css, getCssText, globalCss, styled, theme } = createStitches({
	media: {
		min0: '(min-width: 600px)',
		min1: '(min-width: 900px)',
		min2: '(min-width: 1200px)',
		min3: '(min-width: 1500px)',
	},
	theme: {
		colors: {
			bg: '#17171a',
			error: '#FA0808',
			primary: '#3B176A',
			'primary-50': '#EEBC51',
			success: '#1ab012',
			white: 'hsl(0 0% 95%)',
		},
		fontSizes: {
			10: 'clamp(1.6rem, 0.34vw + 1.46rem, 1.9rem)',
			20: 'clamp(2rem, 0.61vw + 1.76rem, 2.53rem)',
			30: 'clamp(2.5rem, 1vw + 2.1rem, 3.38rem)',
			40: 'clamp(3.13rem, 1.56vw + 2.5rem, 4.5rem)',
			50: 'clamp(3.91rem, 2.38vw + 2.96rem, 6rem)',
			60: 'clamp(3.05rem, 3.89vw + 2.08rem, 5rem)',
		},
		sizes: {
			navbarHeight: '8rem',
		},
		space: {
			paddingNav: '6vw',
			1: '1rem',
			2: '2rem',
			3: '3rem',
			4: '4rem',
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
		marginX: (value: Property.Margin) => ({
			marginLeft: value,
			marginRight: value,
		}),
		marginY: (value: Property.Margin) => ({
			marginTop: value,
			marginBottom: value,
		}),
		paddingX: (value: Property.Padding) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: Property.Padding) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		size: (value: Property.Width) => ({
			width: value,
			height: value,
		}),
	},
});

stitchesConfigSchema.parse(config);

export function styles(content: CSS) {
	return css({ ...content })();
}

export const { colors, fontSizes, sizes, space } = theme;
