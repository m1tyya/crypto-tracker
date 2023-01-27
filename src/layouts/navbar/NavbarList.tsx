import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '~/components/button';
import { styles, theme } from '~/styles';

import { NavbarElement } from './NavbarElement';
import { NavbarLinks } from './NavbarLinks';

type NavbarListProps = {
	isShown: boolean;
};

export function NavbarList({ isShown }: NavbarListProps) {
	const isAuthenticated = useSession().status === 'authenticated';

	async function handleAuth() {
		await (isAuthenticated
			? signOut()
			: signIn('google', {
					callbackUrl: '/dashboard',
			  }));
	}

	return (
		<div
			className={styles({
				backgroundColor: '$bg',
				display: isShown ? 'block' : 'none',
				left: '0',
				minHeight: '100vh',
				padding: '$2 $paddingNav',
				position: 'fixed',
				top: theme.sizes.navbarHeight,
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
			<NavbarElement position={{ paddingY: '$2' }}>
				<Button onClick={handleAuth} variant={'outlined'}>
					{isAuthenticated ? 'Logout' : 'Login'}
				</Button>
			</NavbarElement>
		</div>
	);
}
