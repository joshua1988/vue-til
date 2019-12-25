import { auth } from './index';

// users
function loginUser(data) {
	return auth.post('login', data);
}

function signupUser(data) {
	return auth.post('signup', data);
}

export { loginUser, signupUser };
