import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { styles } from '~/styles';
import { type CSS } from '~/types';

type Props = {
	children: string;
	isExternal?: boolean;
	isProtected?: boolean;
	url: URL;
};

export function NavbarLink({ children, isExternal = false, isProtected = false, url }: Props) {
	const isAuthenticated = useSession().status === 'authenticated';
	const linkStyles: CSS = {
		'&:hover': {
			opacity: '0.7',
		},
		'@min1': {
			marginRight: '2vw',
		},
		color: 'inherit',
		fontSize: '2rem',
		fontWeight: '500',
	};

	return (
		<>
			{isExternal ? (
				<a className={styles({ ...linkStyles })} href={url.href}>
					{children}
				</a>
			) : (
				!(isProtected && !isAuthenticated) && (
					<Link className={styles({ ...linkStyles })} href={url.pathname}>
						{children}
					</Link>
				)
			)}
		</>
	);
}
