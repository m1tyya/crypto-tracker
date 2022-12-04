'use client';

import { useState } from 'react';

import { styles, vars } from '~/styles';

import { Logo } from './Logo';
import { MenuToggle } from './MenuToggle';
import { NavbarList } from './NavbarList';

export const Navbar = () => {
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
				height: vars.navbarHeight,
				inset: '0',
				paddingX: vars.paddingNav,
				position: 'sticky',
				width: '100%',
			})}
			id='primary-nav'>
			<Logo />
			<MenuToggle isOpen={isOpen} onClick={toggleMenu} />
			<NavbarList show={isOpen} />
		</nav>
	);
};
