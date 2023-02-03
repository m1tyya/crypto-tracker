import { styles } from '~/styles';
import { type CSS } from '~/types';

type VectorProps = {
	position?: CSS;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
	title?: string;
};

export function Vector({ position, props, Svg, title }: VectorProps) {
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
