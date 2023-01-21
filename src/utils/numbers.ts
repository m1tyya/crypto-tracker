export function roundToDecimals(num: number, decimals: number): number {
	if (decimals < 0) {
		throw new Error('Cannot round with negative decimals.');
	}

	return Math.round(num * 10 ** decimals) / 10 ** decimals;
}

export function formatThousandSeparators(num: number | string, separator: string): string {
	if (separator.length !== 1) {
		throw new Error('You must specify one character to separate thousands.');
	}

	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatFixedPoint(num: number, decimals: number): string {
	if (decimals < 0) {
		throw new Error('Cannot format with negative decimals.');
	}

	return num.toFixed(decimals);
}
