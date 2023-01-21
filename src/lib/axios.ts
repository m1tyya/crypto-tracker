import axiosInstance from 'axios';

import { WEBSITE_URL } from '~/constants';

export const axios = axiosInstance.create({
	baseURL: `${WEBSITE_URL}/api`,
});
