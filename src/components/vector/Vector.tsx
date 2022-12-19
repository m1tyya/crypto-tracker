import { styles } from '~/styles';
import type { CSS } from '~/types';

type VectorProps = {
	position?: CSS;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Vector = ({ position, props, Svg }: VectorProps) => (
	<Svg
		className={styles({
			...position,
		})}
		{...props}
	/>
);
