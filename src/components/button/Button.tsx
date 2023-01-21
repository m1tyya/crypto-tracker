import { styled, styles } from '~/styles';
import { type CSS, type Stitches } from '~/types';

type ButtonVariants = Stitches.VariantProps<typeof ButtonStyled>;

type Props = {
	children: React.ReactNode;
	onClick: () => void;
	position?: CSS;
	variant: ButtonVariants['variant'];
	width?: ButtonVariants['width'];
};

const ButtonStyled = styled('button', {
	borderRadius: '15px',
	fontWeight: '600',
	padding: '1rem 2rem',
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
				border: '1px solid $primary-50',
				color: '$primary-50',
			},
		},
		width: {
			full: {
				width: '100%',
			},
			normal: {
				width: '100%',
			},
		},
	},
	whiteSpace: 'nowrap',
});

export function Button({ children, onClick, position, variant, width }: Props) {
	return (
		<ButtonStyled
			className={styles({
				...position,
			})}
			onClick={onClick}
			variant={variant}
			width={width}>
			{children}
		</ButtonStyled>
	);
}
