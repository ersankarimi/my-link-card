import React from 'react'
import './container.style.css'

const Container = ({ children }) => {
	return (
		<div
			className={
				'container flex flex-col justify-center items-center min-h-screen min-w-full bg-main'
			}
		>
			{children}
		</div>
	)
}

export default Container
