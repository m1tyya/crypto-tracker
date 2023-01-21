import { WEBSITE_URL } from '~/constants';

export function apiUrl(href: string) {
	return new URL(`${WEBSITE_URL}${href}`);
}
