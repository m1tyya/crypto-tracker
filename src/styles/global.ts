import { globalCss } from './theme';

export const globalStyles = globalCss({
	'*, *::before, *::after': {
		boxSizing: 'border-box',
	},
	':root': {
		fontSize: '62.5%',
	},
	a: {
		color: 'inherit',
		textDecoration: 'none',
	},
	'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,button,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,html,i,iframe,img, input, ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video':
		{
			backgroundColor: 'transparent',
			border: '0',
			font: 'inherit',
			lineHeight: '1',
			margin: '0',
			padding: '0',
		},
	body: {
		fontSize: '1.6rem',
		lineHeight: 1,
		minHeight: '100vh',
	},
	button: {
		cursor: 'pointer',
	},
	'flex > *': {
		minWidth: '0',
		minHeight: '0',
		overflow: 'hidden',
	},
	input: {
		width: '100%',
	},
	ul: {
		listStyle: 'none',
	},
	'input:focus': {
		outline: 'unset',
	},
});
