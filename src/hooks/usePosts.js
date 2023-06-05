import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return posts
	}, [sort, posts])

	return sortedPosts
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)

	const sortedAndSearchedPosts = useMemo(() => {
		if (sort) {
			return sortedPosts.filter((p) => p[sort].toLowerCase().includes(query.toLowerCase()))
		}
		return sortedPosts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts, sort])

	return sortedAndSearchedPosts
}