import Link from 'next/link';

import { Icon } from '~/components/icon';
import { styles } from '~/styles';
import earth from '~icons/earth.svg';

export const Logo = () => (
	<Link
		className={styles({
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
		})}
		href='/'>
		<Icon size={'4rem'} svg={earth} />
		<span
			className={styles({
				fontSize: '2rem',
				marginLeft: '1rem',
			})}>
			MyApp
		</span>
	</Link>
);
