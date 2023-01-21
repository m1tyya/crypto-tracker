import Link from 'next/link';

import { styles } from '~/styles';
import type { CSS } from '~/types';

type Props = {
	children: string;
	isExternal?: boolean;
	url: URL;
};

export function NavbarLink({ children, isExternal = false, url }: Props) {
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
			<div className={styles({ paddingY: '$1' })}>
				{isExternal ? (
					<a className={styles({ ...linkStyles })} href={url.href}>
						{children}
					</a>
				) : (
					<Link className={styles({ ...linkStyles })} href={url}>
						{children}
					</Link>
				)}
			</div>
			<hr className={styles({ backgroundColor: 'hsl(228 18% 16%)', height: '1px' })} />
		</>
	);
}
