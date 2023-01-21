import Link from 'next/link';

import { Vector } from '~/components/vector';
import { styles } from '~/styles';
import { LogoImage } from '~vectors';

export function Logo() {
	return (
		<Link
			className={styles({
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'row',
			})}
			href='/'>
			<Vector props={{ width: '30', fill: '#ffffff' }} Svg={LogoImage} />
			<span
				className={styles({
					fontSize: '2rem',
					marginLeft: '1rem',
				})}>
				PriMo
			</span>
		</Link>
	);
}
