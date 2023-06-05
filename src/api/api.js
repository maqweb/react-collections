import axios from "axios";

export const API = {
	getPosts(limit = 10, page = 1) {
		return axios.get("https://jsonplaceholder.typicode.com/posts", {
			params: {
				_limit: limit,
				_page: page,
			},
		});
	},
	getById(id) {
		return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	},
	getCommentsByPostId(id) {
		return axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
	},
	getPhotos(limit = 10, page = 1) {
		return axios.get(`https://jsonplaceholder.typicode.com/photos`, {
			params: {
				_limit: limit,
				_page: page,
			},
		});
	},
};
