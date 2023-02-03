type QueryType = 'max-width' | 'min-width';

type QueryUnit = 'em' | 'px' | 'rem';

export function mediaQueryIndex(queryType: QueryType, queryUnit: QueryUnit, queryValues: Array<number>): number {
	let index = 0;
	const sortedQueryValues = queryValues.sort((next, prev) => next - prev);
	for (const [, queryValue] of sortedQueryValues.entries()) {
		const query = `(${queryType}: ${queryValue}${queryUnit})`;
		const { matches } = window.matchMedia(query);
		if (matches) {
			index += 1;
		} else {
			break;
		}
	}

	return index;
}
