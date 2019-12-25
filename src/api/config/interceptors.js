import store from '@/store/index.js';
import { getAuthFromCookie } from '@/utils/cookies.js';

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			config.headers.Authorization =
				store.getters['userToken'] || getAuthFromCookie();
			return config;
		},
		error => Promise.reject(error.response),
	);
	instance.interceptors.response.use(
		config => config,
		error => Promise.reject(error.response),
	);
	return instance;
}

export { setInterceptors };
