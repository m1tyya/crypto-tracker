import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '~/components/button';
import { styles, theme } from '~/styles';

import { NavbarLinks } from './NavbarLinks';

type NavbarListProps = {
	isShown: boolean;
};

export function NavbarList({ isShown }: NavbarListProps) {
	const { data } = useSession();

	async function handleSignIn() {
		await signIn('google', {
			callbackUrl: '/dashboard',
		});
	}

	async function handleSignOut() {
		await signOut();
	}

	const authBtn = data ? (
		<>
			<p>Welcome {data.user?.name}</p>
			<Button onClick={handleSignOut} variant={'outlined'}>
				Logout
			</Button>
		</>
	) : (
		<Button onClick={handleSignIn} variant={'outlined'}>
			Login
		</Button>
	);

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
			{authBtn}
		</div>
	);
}
