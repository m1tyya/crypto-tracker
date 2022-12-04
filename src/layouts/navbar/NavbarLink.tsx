import Link from 'next/link';

import { styles } from '~/styles';
import type { Url } from '~/types';

type NavbarItemProps = {
	children: string;
	url: Url;
};

export const NavbarLink = ({ children, url }: NavbarItemProps) => (
	<>
		<div className={styles({ paddingY: '$1' })}>
			<Link
				className={styles({
					'&:hover': {
						opacity: '0.7',
					},
					'@min1': {
						marginRight: '2vw',
					},
					color: 'inherit',
					fontSize: '2rem',
					fontWeight: '500',
				})}
				href={url}>
				{children}
			</Link>
		</div>
		<hr className={styles({ backgroundColor: 'hsl(228 18% 16%)', height: '1px' })} />
	</>
);
