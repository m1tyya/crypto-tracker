import { type Config } from 'jest';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const jestConfig: Config = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'!./src/**/_*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@/public/(.*)$': '<rootDir>/public/$1',
	},
	// modulePathIgnorePatterns: ['cypress'],
	setupFilesAfterEnv: ['./jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(jestConfig);
