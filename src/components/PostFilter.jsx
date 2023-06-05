import React from 'react';
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {

	return (
		<div>
			<Input
				type="text"
				placeholder={'Поиск...'}
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
			/>
			<Select
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue={'Сортировать'}
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'desc', name: 'По описанию'}
				]}
			/>
		</div>
	);
};

export default PostFilter;