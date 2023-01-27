import { type PropsWithChildren } from 'react';

import { styled, styles } from '~/styles';
import { type CSS, type Stitches } from '~/types';

type ButtonVariants = Stitches.VariantProps<typeof ButtonStyled>;

type Props = PropsWithChildren & {
	onClick: () => void;
	position?: CSS;
	variant: ButtonVariants['variant'];
};

const ButtonStyled = styled('button', {
	width: '100%',
	borderRadius: '15px',
	fontWeight: '600',
	padding: '1rem 2rem',
	'@min1': {
		width: 'auto',
	},
	variants: {
		variant: {
			filled: {
				'&:hover': {
					backgroundColor: '$primary-60',
				},
				backgroundColor: '$primary-70',
				color: '$white',
			},
			outlined: {
				'&:hover': {
					backgroundColor: '$bg',
				},
				backgroundColor: '',
				border: '2px solid $primary-50',
				color: '$primary-50',
			},
		},
	},
	whiteSpace: 'nowrap',
});

export function Button({ children, onClick, position, variant }: Props) {
	return (
		<ButtonStyled
			className={styles({
				...position,
			})}
			onClick={onClick}
			variant={variant}>
			{children}
		</ButtonStyled>
	);
}
