import Link from 'next/link';

import { Vector } from '~/components/vector';
import { styles } from '~/styles';
import LogoImage from '~vectors/logo.svg';

export const Logo = () => (
	<Link
		className={styles({
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'row',
		})}
		href='/'>
		<Vector props={{ width: '3rem', fill: '#ffffff' }} Svg={LogoImage} />
		<span
			className={styles({
				fontSize: '2rem',
				marginLeft: '1rem',
			})}>
			PriMo
		</span>
	</Link>
);
