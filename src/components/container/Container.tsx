import { INTER } from '~/constants';
import { styles } from '~/styles';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
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
