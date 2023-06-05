import React from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
	const router = useNavigate()
	return (
		<div className={'post'}>
			<div className="postContainer">
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className={"post__buttons"}>
				<Button onClick={() => router(`/posts/${props.post.id}`)}>Open</Button>
				<Button onClick={() => props.removeItem(props.post.id)}>Delete</Button>
			</div>
		</div>
	);
};

export default PostItem;