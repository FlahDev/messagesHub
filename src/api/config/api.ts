import axios, { Axios, type AxiosResponse } from 'axios';

import { PUBLIC_API_URL } from '$env/static/public';

import type { ApiRequestProps } from './api.types';

export class Api {
	private axiosInstance!: Axios;

	private createAxiosInstance() {
		return axios.create({
			baseURL: PUBLIC_API_URL,
			timeout: 30_000
		});
	}

	public constructor() {
		this.axiosInstance = this.createAxiosInstance();
	}

	public async request<T>({
		method,
		url,
		data,
		headers
	}: ApiRequestProps): Promise<AxiosResponse<T>> {
		const api = this.axiosInstance;

		const response = await api.request({
			method,
			url,
			data,
			headers
		});

		return response;
	}
}
