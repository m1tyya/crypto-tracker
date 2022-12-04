import { styled } from '~/styles';

const NavbarLinksStyled = styled('div', {
	'@min1': {
		display: 'flex',
		flexDirection: 'row',
	},
});

export const NavbarLinks = () => <NavbarLinksStyled>{/* Links here */}</NavbarLinksStyled>;
