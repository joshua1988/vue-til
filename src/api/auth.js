import { auth } from './index';

// users
function loginUser(data) {
	try {
		return auth.post('login', data);
	} catch (error) {
		console.log(error);
		return error;
	}
}

function signupUser(data) {
	try {
		return auth.post('signup', data);
	} catch (error) {
		console.log(error);
		return error;
	}
}

export { loginUser, signupUser };
