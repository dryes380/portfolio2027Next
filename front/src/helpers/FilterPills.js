import React from 'react'
import { Tag } from 'antd'

const FilterPills = ({ setInitial, setPersonal, setPrivate, articlesSortByTitle }) => {
	return (
		<>
			<Tag color='blue-inverse' onClick={() => setInitial(articlesSortByTitle)}>All</Tag>
			<Tag color='cyan-inverse' onClick={() => setInitial(setPersonal)}>personal</Tag>
			<Tag color='green-inverse' onClick={() => setInitial(setPrivate)}>private</Tag>
		</>
	)
}

export default FilterPills