/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
	},
	compiler: {
		emotion: true,
	},
	distDir: 'dist',
	images: {
		remotePatterns: [
			{
				hostname: 'assets.coingecko.com',
				protocol: 'https',
			},
		],
	},
	i18n: {
		defaultLocale: 'en-US',
		locales: ['en-US'],
	},
	reactStrictMode: true,
	webpack(config) {
		config.experiments = { ...config.experiments };
		config.module.rules.push({
			issuer: { and: [/\.(js|ts|md)x?$/] },
			test: /\.svg$/i,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						titleProp: true,
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
