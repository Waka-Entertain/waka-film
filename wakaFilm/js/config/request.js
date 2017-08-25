import axios from 'axios';
import qs from 'qs';
import lodash from 'lodash';
import config from './index';

const { CORS, baseURL, apiKey } =config

axios.defaults.baseURL = baseURL;

const fetch = options => {
	let { method = 'get', data, fetchType, url } = options;
	url=CORS+url
	const cloneData = lodash.cloneDeep(data);

	switch (method.toLowerCase()) {
		case 'get':
			console.log(url,cloneData)
			return axios.get(url, {
				params: cloneData
			});
		case 'delete':
			return axios.delete(url, {
				data: cloneData
			});
		case 'post':
			return axios.post(url, cloneData);
		case 'put':
			return axios.put(url, cloneData);
		case 'patch':
			return axios.patch(url, cloneData);
		default:
			return axios(options);
	}
};

export default function request(options) {
	options.data = { ...options.data, api_key: apiKey };
	return fetch(options)
		.then(response => {
			const { statusText, status } = response;
			let data = response.data;
			return {
				success: true,
				message: statusText,
				status,
				...data
			};
		})
		.catch(error => {
			const { response } = error;
			let msg;
			let status;
			let otherData = {};
			if (response) {
				const { data, statusText } = response;
				otherData = data;
				status = response.status;
				msg = data.status_message || statusText;
			} else {
				status = 600;
				msg = '网络错误,请稍后重试';
			}
			return { success: false, status, message: msg, ...otherData };
		});
}
