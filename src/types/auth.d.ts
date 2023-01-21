import { type DefaultUser, type ISODateString } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		expires: ISODateString;
		user?: DefaultUser & {};
	}
}
