import request from '../config/request';
import config from '../config/index';

const api = config.api;

export function getUpcoming(params) {
	return request({
		url: api.upcoming,
		method: 'get',
		data: params
	});
}
