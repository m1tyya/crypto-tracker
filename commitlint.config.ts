import { type UserConfig } from '@commitlint/types';

const commitLintConfig: UserConfig = {
	parserPreset: 'conventional-changelog-conventionalcommits',
	prompt: {
		questions: {
			type: {
				enum: {
					build: {
						description: 'Build process',
						title: 'Build',
					},
					chore: {
						description: 'Config change',
					},
					ci: {
						description: 'Changes to continuous integration',
					},
					deprecate: {
						description: 'Deprecate feature',
					},
					docs: {
						description: 'Documentation change',
						title: 'Documentation',
					},
					feat: {
						description: 'New feature',
						title: 'Features',
					},
					fix: {
						description: 'Bug fix',
						title: 'Fixes',
					},
					perf: {
						description: 'Performance improvement',
						title: 'Performance',
					},
					refactor: {
						description: 'Code refactor',
					},
					remove: {
						description: 'Remove a feature',
					},
					revert: {
						description: 'Undo commit',
					},
					test: {
						description: 'Testing changes',
						title: 'Testing',
					},
					security: {
						description: 'Security changes',
						title: 'Security',
					},
					style: {
						description: 'Code style change',
					},
				},
			},
		},
	},
	rules: {
		'body-leading-blank': [2, 'always'],
		'body-max-line-length': [2, 'never', 72],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'deprecate',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'remove',
				'revert',
				'security',
				'style',
				'test',
			],
		],
		'scope-empty': [2, 'never'],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
	},
};

module.exports = commitLintConfig;
