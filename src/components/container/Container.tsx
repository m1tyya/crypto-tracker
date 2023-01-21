import { INTER } from '~/constants';
import { styles } from '~/styles';

type Props = {
	children: React.ReactNode;
};

export function Container({ children }: Props) {
	return (
		<div
			className={styles({
				backgroundColor: '$bg',
				color: '$white',
				minHeight: '100vh',
				...INTER.style,
			})}>
			{children}
		</div>
	);
}
