import React from 'react';
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, changePage, page}) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div>
			{pagesArray.map((p) => <button
				key={p}
				onClick={() => changePage(p)}
				className={page === p ? 'pagination pageCurrent' : 'pagination'}>{p}</button>)}
		</div>
	);
};

export default Pagination;