import { createStitches, defaultThemeMap } from '@stitches/react';
import type { Property } from '@stitches/react/types/css';

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
			white: 'hsl(0 0% 95%)',
			bg: '#040405',
			'price-down': '#FA0808',
			'price-up': '#1ab012',
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

export function styles(content: CSS) {
	return css({ ...content })();
}
