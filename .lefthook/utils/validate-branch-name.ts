/* eslint-disable no-console */
import { execSync } from 'child_process';
import { confirm } from '@inquirer/prompts';

import * as c from './chalk/chalk';

const protectedBranches = ['develop', 'main', 'master', 'hotfix'];
const publicBranches = ['feature', 'chore', 'release', 'refactor'];

const runner = async () => {
	try {
		const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

		if (protectedBranches.includes(branchName)) {
			const accepted = await confirm({
				message: c.error(
					`You are pushing to a protected branch ${branchName}. Are you sure you want to continue?`
				),
				default: false
			});

			if (!accepted) {
				console.log(c.log('Push was aborted. Nothing has changed.'));
				return process.exit(1);
			}

			console.log(c.highligh(`Forcing push to protected branch ${branchName}.`));

			return process.exit(0);
		}

		if (!publicBranches.some((branch) => branchName.startsWith(branch))) {
			console.log(c.error(`Branch name ${branchName} is not allowed.`));

			let message = c.log('Use one of allowed branch names (');

			publicBranches.forEach((branch, index) => {
				message += c.highligh(branch);

				if (index < publicBranches.length - 1) {
					message += c.highligh('|');
				}
			});

			message += c.log(')');

			console.log(message);

			return process.exit(1);
		}
	} catch (error) {
		if (error instanceof Error && error.name === 'ExitPromptError') {
			return process.exit(1);
		}

		console.error(error);

		process.exit(1);
	}
};

runner();
/* eslint-enable no-console */
