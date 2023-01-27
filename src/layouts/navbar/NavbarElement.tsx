import { type PropsWithChildren } from 'react';

import { styles } from '~/styles';
import { type CSS } from '~/types';

type Props = PropsWithChildren & {
	hasSeparator?: boolean;
	position: CSS;
};

export function NavbarElement({ children, hasSeparator = false, position }: Props) {
	return (
		<>
			<div className={styles({ ...position })}>{children}</div>
			{hasSeparator && <hr className={styles({ backgroundColor: 'hsl(228 18% 16%)', height: '1px' })} />}
		</>
	);
}
