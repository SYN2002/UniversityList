import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function SelectCountry({ onCountryChange }) {
	const [value, setValue] = useState('')
	const options = useMemo(() => countryList().getData(), [])

	const changeHandler = value => {
		setValue(value)
		onCountryChange(value)
	}

	return <Select options={options} value={value} onChange={changeHandler}
	className='flex justify-center' />
}

export default SelectCountry