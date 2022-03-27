import React, { useState } from 'react'
import './index.css'
import Container from './components/Container/Container'

function App() {
	const [state, setState] = useState(0)

	const handleClick = () => {
		setState((state) => state + 1)
	}
	return (
		<Container>
			<h1 className={'font-bold text-4xl text-white'}>{state}</h1>
			<button
				type='button'
				className={'p-4 bg-slate-800 rounded-md text-white'}
				onClick={handleClick}
			>
				Click
			</button>
		</Container>
	)
}

export default App
