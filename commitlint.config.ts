import type { UserConfig } from '@commitlint/types';

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
						title: 'Bug Fixes',
					},
					perf: {
						description: 'Performance improvement',
						title: 'Performance',
					},
					refactor: {
						description: 'Code refactor',
						title: 'Refactoring',
					},
					revert: {
						description: 'Undo commit',
						title: 'Reverts',
					},
					test: {
						description: 'Testing changes',
						title: 'Testing',
						emoji: 'sdsd',
					},
				},
			},
		},
	},
	rules: {
		'body-full-stop': [2, 'always', '.'],
		'type-enum': [2, 'always', ['build', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'test']],
		'scope-empty': [2, 'never'],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
	},
};

module.exports = commitLintConfig;
