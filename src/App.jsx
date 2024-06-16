import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

	return (
		<>
			<Navbar />
			<div className='mt-8'>
				<Input />
			</div>
			<Footer />
		</>
	)
}

export default App
