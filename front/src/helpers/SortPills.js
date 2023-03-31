import React from 'react'
import { Tag } from 'antd'

const SortPills = ({ toggleSortHandler }) => {
	return (
		<Tag color='orange-inverse' onClick={() => toggleSortHandler()}>Title</Tag>
	)
}

export default SortPills