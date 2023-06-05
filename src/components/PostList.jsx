import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, removeItem}) => {
	if (!posts.length) {
		return (
			<h3 style={{textAlign: 'center', color: 'lightgray'}}>Posts not found</h3>
		)
	}
	return (
		<div className={'post-list'}>
			<h3>{title}</h3>
			{posts.map((post, index) => <PostItem removeItem={removeItem} key={post.id} post={post}/>)}
		</div>
	);
};

export default PostList;