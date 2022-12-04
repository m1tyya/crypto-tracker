import NextLink from 'next/link';

import type { Url } from '~/types';

type LinkProps = {
	children: React.ReactNode;
	href: Url;
};

export const Link = ({ children, href }: LinkProps) => <NextLink href={href}>{children}</NextLink>;
