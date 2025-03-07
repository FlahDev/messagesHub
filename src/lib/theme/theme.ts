import { writable } from 'svelte/store';

const colors = {
	neutral0: '#000000',
	neutral100: '#373F45',
	neutral300: '#8E959A',
	neutral550: '#EDEDE6',
	neutral500: '#C6C6C5',
	neutral600: '#BEBEBE',
	neutral700: '#f0f0f0',
	neutral800: '#F7F8F7',
	neutral900: '#FEFEFA',
	neutral1000: '#FFFFFF',
	green200: '#039A90',
	green800: '#49D0A0',
	green900: '#65F2B2',
	green1000: '#E0FEE5',
	red600: '#CD3E63',
	red400: '#E16B7E',
	blue100: '#073B4C',
	blue500: '#0378DB'
};

export const theme = writable({
	colors
});

export type Colors = keyof typeof colors;
