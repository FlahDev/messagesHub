import * as c from './chalk';

const runner = (type: string, message: string) => {
	if (type in c) {
		console.log(c[type](message));
	} else {
		console.log(message);
	}

	process.exit(0);
};

runner(process.argv[2], process.argv[3]);
