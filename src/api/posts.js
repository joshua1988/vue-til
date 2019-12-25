import { posts } from './index';

// posts
function createNewPost(data) {
	return posts.post('/', data);
}

function fetchPosts() {
	return posts.get('/');
}

function fetchPostById(id) {
	return posts.get(id);
}

function editPostById(id, data) {
	return posts.put(id, data);
}

function deletePostById(id) {
	return posts.delete(id);
}

export {
	createNewPost,
	fetchPosts,
	fetchPostById,
	editPostById,
	deletePostById,
};
