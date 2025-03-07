export interface ApiRequestProps {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	url: string;
	data?: any;
	headers?: any;
}
