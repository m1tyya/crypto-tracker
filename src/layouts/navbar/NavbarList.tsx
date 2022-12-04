import { styles, vars } from '~/styles';

import { NavbarLinks } from './NavbarLinks';

type NavbarListProps = {
	show: boolean;
};

export const NavbarList = ({ show }: NavbarListProps) => (
	<div
		className={styles({
			backgroundColor: '$bg',
			display: show ? 'block' : 'none',
			left: '0',
			minHeight: '100vh',
			padding: `$2 ${vars.paddingNav}`,
			position: 'fixed',
			top: vars.navbarHeight,
			width: '100%',
			'@min1': {
				alignItems: 'inherit',
				backgroundColor: 'inherit',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginLeft: '4vw',
				minHeight: 'initial',
				padding: '0',
				position: 'static',
			},
		})}>
		<NavbarLinks />
	</div>
);
