import { styles } from '~/styles';
import type { CSS } from '~/types';

type VectorProps = {
	position?: CSS;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

export function Vector({ position, props, Svg }: VectorProps) {
	return (
		<>
			<Svg
				className={styles({
					...position,
				})}
				{...props}
				preserveAspectRatio='xMidYMid meet'
			/>
		</>
	);
}
