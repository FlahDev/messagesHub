import chalk from 'chalk';

export const log = (message: string) => chalk.hex('#fdfdfd')(message);

export const error = (message: string) => chalk.red(message);

export const info = (message: string) => chalk.hex('#3ecccb')(message);

export const highligh = (message: string) => chalk.hex('#dafe62')(message);

export const valid = (message: string) => chalk.hex('#41c731')(message);
