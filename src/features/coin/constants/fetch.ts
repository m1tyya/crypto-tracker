export const PROTOCOL = 'https';
export const DOMAIN = 'api.coingecko.com';
export const PATH = 'api/v3/coins/markets';
export const PARAMS = 'vs_currency=usd&per_page=10&page=1&price_change_percentage=24h';
export const URL = `${PROTOCOL}://${DOMAIN}/${PATH}?${PARAMS}`;
export const FETCH_INTERVAL = 40 * 1000;
