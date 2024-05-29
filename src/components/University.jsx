import React, { useState, useEffect } from 'react'
import { fetchData } from '../api/api'
import UniversityCard from './UniversityCard'

const University = ({ country, search }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetching = async () => {
            setIsLoading(true);
            const result = await fetchData(country)
            if (result.error) {
                setError(result.error);
                setData([]);
            } else {
                if(result.data.length === 0){
                    alert("No data found")
                }
                setData(result.data);
                setError(null);
            }
            setIsLoading(false);
        }
        if (country)
            fetching()
    }, [country])
    const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <h1 className='text-xl mb-4'>University List</h1>
            {isLoading && <p className='text-xl font-semibold text-black-300'>Loading...</p>}
            <div className="flex flex-wrap">
                {filteredData.map((item,key) => (
                    <UniversityCard key={key} university={item} />
                ))}
            </div>
        </>
    )
}

export default University