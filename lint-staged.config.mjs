// @ts-nocheck
import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint();
	const ignoredFiles = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
	const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);

	return filteredFiles.join(' ');
};

// eslint-disable-next-line import/no-default-export
export default {
	'*.{js,cjs,mjs,jsx,ts,tsx}': async (files) => {
		const filesToLint = await removeIgnoredFiles(files);

		return [`eslint --max-warnings=0 ${filesToLint}`];
	},
};
