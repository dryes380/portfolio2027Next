import React from 'react'
import './ContentBlog.css'
import { Tag } from 'antd'

const ContentBlog = ({ data }) => {
	return (
		<div className="Content">
			<h1>{data.title} <Tag color='blue-inverse'>{data.type}</Tag></h1>
			<div>{data.content}</div>
		</div>
	)
}

export default ContentBlog