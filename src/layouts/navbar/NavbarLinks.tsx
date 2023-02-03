import { styled } from '~/styles';
import { apiUrl } from '~/utils';

import { NavbarElement } from './NavbarElement';
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
				<NavbarElement hasSeparator={true} position={{ paddingY: '$1' }}>
					<NavbarLink isProtected={true} url={apiUrl('/saved')}>
						Saved
					</NavbarLink>
				</NavbarElement>
			}
		</NavbarLinksStyled>
	);
}
