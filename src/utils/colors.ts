import { adjust } from 'better-color-tools';
import { type ColorOutput, from } from 'better-color-tools/dist/parse';

type ColorVariable = {
	[name: string | number]: string | number | boolean;
};

export function generateColorShades(shades: number, primaryColor: ColorOutput): Array<ColorOutput> {
	const colorShades = Array<ColorOutput>();
	const colorBase = from('');
	if (!Number.isInteger(shades) || shades < 1 || shades > 9 || shades % 2 !== 1) {
		throw new Error('Please specify an odd integer number of shades between 1 and 9.');
	}

	for (let i = 0; i < shades; i++) {
		console.log(colorBase.oklch);
		const adjustee = adjust(colorBase.oklchVal, { mode: 'relative', lightness: -0.1 * Math.floor(shades / 2) });
		// console.log(adjustee);
		const shade = from(adjustee);
		colorShades.push(shade);
	}

	console.log();

	return colorShades;
}

export function generateColorVariables(colorShades: Array<ColorOutput>, colorName: string): Array<ColorVariable> {
	const BASE_INDEX = 50;
	const STEP = 10;
	const colorVariables = Array<ColorVariable>();

	for (const [index, shade] of colorShades.entries()) {
		colorVariables.push({
			[`${colorName}-${BASE_INDEX - STEP * (Math.floor(colorShades.length / 2) - index)}`]: shade.hex,
		});
	}

	return colorVariables;
}