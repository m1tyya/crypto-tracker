import './src/schemas/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
	swcMinify: true,
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		config.module.rules.push({
			issuer: { and: [/\.(js|ts|md)x?$/] },
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

export default nextConfig;
