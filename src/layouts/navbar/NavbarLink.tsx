import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { styles } from '~/styles';
import { type CSS } from '~/types';

type Props = {
	children: string;
	hasSeparator: boolean;
	isExternal?: boolean;
	isProtected?: boolean;
	position?: CSS;
	url: string;
};

export function NavbarLink({ children, hasSeparator, isExternal = false, isProtected = false, position, url }: Props) {
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

	const separator = hasSeparator ? (
		<hr className={styles({ backgroundColor: 'hsl(228 18% 16%)', height: '1px' })} />
	) : (
		<></>
	);

	return (
		<>
			{isExternal ? (
				<>
					<a className={styles({ ...linkStyles, ...position })} href={url}>
						{children}
					</a>
					{separator}
				</>
			) : (
				!(isProtected && !isAuthenticated) && (
					<>
						<Link className={styles({ ...linkStyles, ...position })} href={url}>
							{children}
						</Link>
						{separator}
					</>
				)
			)}
		</>
	);
}
