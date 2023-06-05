import "./../App.css";
import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import { usePosts } from "../hooks/usePosts";
import { API } from "../api/api";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const [fetchPosts, isPostLoading, postError] = useFetching(
		async (limit, page) => {
			let response = await API.getPosts(limit, page);
			setPosts(response.data);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const addItem = (item) => {
		setPosts([item, ...posts]);
		setModal(false);
	};
	const removeItem = (id) => {
		setPosts([...posts].filter((post) => post.id !== id));
	};
	const changePage = (page) => {
		setPage(page);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="container">
			<Button onClick={() => setModal(true)}>Создать</Button>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm addItem={addItem} posts={posts} />
			</Modal>
			<hr style={{ margin: "15px 0" }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && (
				<h3
					style={{
						textAlign: "center",
						color: "lightgray",
						marginTop: 20,
					}}
				>
					Error: ${postError}
				</h3>
			)}
			<PostList
				removeItem={removeItem}
				posts={sortedAndSearchedPosts}
				title={"Posts list"}
			/>
			{isPostLoading ? (
				<Loader />
			) : (
				<Pagination
					page={page}
					changePage={changePage}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
}

export default Posts;
