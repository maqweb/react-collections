import React, { useState } from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const PostForm = ({addItem, posts}) => {
	const [post, setPost] = useState({title: '', body: ''})

	const addItemHandler = (e) => {
		e.preventDefault()
		addItem({...post, id: Date.now()})
		setPost({title: '', body: ''})
	}

	return (
		<form>
			<Input type="text"
				   placeholder={'New title'}
				   value={post.title}
				   onChange={e => setPost({...post, title: e.target.value})}
			/>

			<Input type="text"
				   placeholder={'New description'}
				   value={post.desc}
				   onChange={e => setPost({...post, body: e.target.value})}
			/>

			<Button onClick={addItemHandler}>Add</Button>
		</form>
	);
};

export default PostForm;