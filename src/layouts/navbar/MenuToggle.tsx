import { styles } from '~/styles';

type MenuToggleProps = {
	isOpen: boolean;
	onClick: () => void;
};

export const MenuToggle = ({ isOpen, onClick }: MenuToggleProps) => (
	<div
		aria-controls='primary-nav'
		className={styles({
			'&:hover': {
				'span:first-of-type': {
					width: '110%',
					...(isOpen && {
						width: '100%',
					}),
				},
				'span:last-of-type': {
					width: '50%',
					...(isOpen && {
						width: '100%',
					}),
				},
			},
			display: 'block',
			'@min1': {
				display: 'none',
			},
			cursor: 'pointer',
			div: {
				bottom: '0',
				height: '12px',
				left: '0',
				margin: 'auto',
				position: 'absolute',
				right: '0',
				top: '0',
				width: '22px',
			},
			height: '50px',
			position: 'relative',
			span: {
				'&:first-of-type': {
					top: '0',
					...(isOpen && {
						top: '5px',
						transform: 'rotate(45deg)',
					}),
				},
				'&:last-of-type': {
					bottom: 0,
					...(isOpen && {
						bottom: '5px',
						transform: 'rotate(-45deg)',
					}),
				},
				backgroundColor: 'white',
				borderRadius: '1px',
				display: 'block',
				height: '2px',
				position: 'absolute',
				transition: 'all 0.2s cubic-bezier(0.83, 0.68, 0.55, 0.76)',
				width: '100%',
			},
			width: '50px',
		})}
		onClick={onClick}>
		<div>
			<span></span>
			<span></span>
		</div>
	</div>
);
