import { styles } from '~/styles';
import type { Stitches } from '~/types';

type IconProps = {
	position?: Stitches.CSS;
	size: string;
	svg: any;
};

export const Icon = ({ position, size, svg }: IconProps) => (
	<div className={styles({ ...position, size })}>{svg()}</div>
);
