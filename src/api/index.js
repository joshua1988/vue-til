import axios from 'axios';
import { setInterceptors } from './config/interceptors';

// instance & interceptor
function create(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options));
	return instance;
}

function createWithAuth(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options));
	setInterceptors(instance);
	return instance;
}

export const auth = create(process.env.VUE_APP_API_URL);
export const posts = createWithAuth(`${process.env.VUE_APP_API_URL}posts/`);
