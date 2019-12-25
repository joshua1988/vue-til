import { posts } from './index';

// posts
function createNewPost(data) {
	try {
		return posts.post('/', data);
	} catch (error) {
		console.log(error);
		return error;
	}
}

function fetchPosts() {
	try {
		return posts.get('/');
	} catch (error) {
		console.log(error);
		return error;
	}
}

function fetchPostById(id) {
	try {
		return posts.get(id);
	} catch (error) {
		console.log(error);
		return error;
	}
}

function editPostById(id, data) {
	try {
		return posts.put(id, data);
	} catch (error) {
		console.log(error);
		return error;
	}
}

function deletePostById(id) {
	try {
		return posts.delete(id);
	} catch (error) {
		console.log(error);
		return error;
	}
}

export {
	createNewPost,
	fetchPosts,
	fetchPostById,
	editPostById,
	deletePostById,
};
