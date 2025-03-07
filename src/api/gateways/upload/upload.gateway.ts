import { Api } from '$api/config/api';

export const useUploadGateway = () => {
	const upload = async (file: File) => {
		const formData = new FormData();
		formData.append('file', file);

		const api = new Api();

		const response = await api.request({
			method: 'POST',
			url: '/process',
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});

		return response.data;
	};

	return { upload };
};
