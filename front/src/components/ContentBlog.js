import React from 'react'
import './ContentBlog.css'

const ContentBlog = ({ data }) => {
	return (
		<div className="Content">
			<h1 className='portfolioGeneral'>{data.title}</h1>
		</div >
	)
}

export default ContentBlog