import React, { useState, useEffect } from 'react'

export const LoadingPage = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])


	return (
		<>
			{loading ? <>...loading</>
				: null}
		</>
	)
}

export default LoadingPage