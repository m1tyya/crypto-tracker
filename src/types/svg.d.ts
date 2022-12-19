declare module '*.svg' {
	import type { ReactElement, SVGProps } from 'react';

	export const content: (props: SVGProps<SVGElement>) => ReactElement;
}
