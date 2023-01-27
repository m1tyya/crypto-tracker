export function stringsInclude(searchQuery: string, ...searchStrings: Array<string>): boolean {
	for (const string of searchStrings) {
		if (string.toLowerCase().includes(searchQuery.toLowerCase())) {
			return true;
		}
	}

	return false;
}
