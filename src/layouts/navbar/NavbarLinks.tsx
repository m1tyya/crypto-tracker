import { styled } from '~/styles';
import { apiUrl } from '~/utils';

import { NavbarLink } from './NavbarLink';

const NavbarLinksStyled = styled('div', {
	'@min1': {
		display: 'flex',
		flexDirection: 'row',
	},
});

export function NavbarLinks() {
	return (
		<NavbarLinksStyled>
			{
				<NavbarLink hasSeparator={true} isProtected={true} position={{ paddingY: '$1' }} url={apiUrl('/saved')}>
					Saved
				</NavbarLink>
			}
		</NavbarLinksStyled>
	);
}
