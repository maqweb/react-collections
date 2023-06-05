import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { API } from "../api/api";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchingPostById, isLoadingPostId, PostIdError] = useFetching(
		async (id) => {
			let response = await API.getById(id);
			setPost(response.data);
		}
	);

	const [fetchComments, isLoadingComment, commentError] = useFetching(
		async (id) => {
			let response = await API.getCommentsByPostId(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchingPostById(params.id);
		fetchComments(params.id);
	}, []);
	return (
		<div>
			<h3>{params.id}.Post</h3>
			{isLoadingPostId ? (
				<Loader />
			) : (
				<div>
					<div>{post.title}</div>
					<div>{post.body}</div>
				</div>
			)}
			{isLoadingComment ? (
				<Loader />
			) : (
				comments.map((c) => (
					<div style={{ margin: 20 }} key={c.id}>
						<div>{c.name}</div>
						<div>{c.email}</div>
						<div>{c.body}</div>
					</div>
				))
			)}
		</div>
	);
};

export default PostIdPage;
