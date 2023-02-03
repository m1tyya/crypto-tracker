import { type PropsWithChildren } from 'react';

import { INTER } from '~/constants';
import { styles } from '~/styles';

type Props = PropsWithChildren;

export function Container({ children }: Props) {
	return (
		<div
			className={styles({
				position: 'relative',
				backgroundColor: '$bg',
				color: '$white',
				minHeight: '100vh',
				...INTER.style,
			})}>
			{children}
		</div>
	);
}
