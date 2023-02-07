import { type Options } from 'ky';

import { getBaseUrl } from '~/utils';

export const options: Options = {
	prefixUrl: getBaseUrl(),
};
