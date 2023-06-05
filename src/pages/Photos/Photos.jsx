import React, { useEffect, useRef, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { API } from "../../api/api";
import s from "./Photos.module.css";
import { getPageCount } from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";
import Loader from "../../components/UI/loader/Loader";
import { useObserver } from "../../hooks/useObserver";

const Photos = () => {
	const [photos, setPhotos] = useState([]);
	const [limit, setLimit] = useState(10);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const lastElement = useRef();

	const [fetchPhotos, isPhotosLoading, photoError] = useFetching(
		async (limit, page) => {
			let response = await API.getPhotos(limit, page);
			setPhotos([...photos, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useObserver(lastElement, page < totalPages, isPhotosLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPhotos(limit, page);
	}, [page]);

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<div>
			<h1>Photos</h1>
			<div className={s.container}>
				{photos.map((photo, index) => (
					<div key={index} className={s.photo}>
						<h4>
							{photo.id}. {photo.title}
						</h4>
						<img src={photo.thumbnailUrl} alt="photo" />
					</div>
				))}
			</div>
			{isPhotosLoading && <Loader />}
			<div ref={lastElement} style={{ height: 20 }} />
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default Photos;
