import { useState } from 'react';

import { styles } from '~/styles';

import { Logo } from './Logo';
import { MenuToggle } from './MenuToggle';
import { NavbarList } from './NavbarList';

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<nav
			className={styles({
				justifyContent: 'space-between',
				'@min1': {
					justifyContent: 'normal',
				},
				alignItems: 'center',
				backdropFilter: 'blur(8px)',
				backgroundColor: '$bg',
				display: 'flex',
				height: '$navbarHeight',
				inset: '0',
				paddingX: '$paddingNav',
				position: 'sticky',
				width: '100%',
				zIndex: '99',
			})}
			id='primary-nav'>
			<Logo />
			<MenuToggle isOpen={isOpen} onClick={toggleMenu} />
			<NavbarList isShown={isOpen} />
		</nav>
	);
}
