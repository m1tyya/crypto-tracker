import NextLink from 'next/link';
import type { URL } from 'url';

type LinkProps = {
	children: React.ReactNode;
	url: URL;
};

export function Link({ children, url }: LinkProps) {
	return <NextLink href={url.href}>{children}</NextLink>;
}
