import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import University from './components/University'
import SelectCountry from './components/SelectCountry'

function App() {
	const [country, setCountry] = useState("")
	const [input, setInput] = useState("")
	const [search, setSearch] = useState("")

	const handelChange = (e) => {
		setCountry(e.label)
		console.log(e.label);
	}

	return (
		<div >
			<h1 className='text-3xl'>WELCOME SAAR</h1>
			<h1 className='p-5 text-xl font-bold'>Chose your country</h1>
			<SelectCountry onCountryChange={handelChange}/>
			<input
				type='text'
				placeholder='Enter the university name'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 m-3 leading-8 transition-colors duration-200 ease-in-out"
			></input>
			<University country={country} search={search} />
		</div>
	)
}

export default App
