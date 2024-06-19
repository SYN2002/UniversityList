import React from 'react';

const UniversityCard = ({ university }) => {
    return (
        <div className=" bg-blue-300 shadow-md rounded-lg p-6 w-80 m-4">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWddYuG8o0bd0SSEtkos_Htk5twoLlgPLwA&s' alt={university.name}
            className=' h-54 w-full'></img>
            <h2 className="text-xl font-bold mb-2 underline">{university.name || 'Not found'}</h2>
            <p className="text-gray-700 mb-1 text-lg">Country: {university.country}</p>
            <p className="text-gray-700 mb-1 text-lg">State: {university["state-province"] || 'Not found'}</p>
            <p className="text-gray-700 mb-1 text-lg">Domain: <a href={university.domains[0]} className='text-red-600'>{university.domains[0]}</a></p>
            <a 
                className="text-blue-600 underline" 
                href={university.web_pages[0]} 
                target='_blank' 
                rel="noopener noreferrer"
            >
                Visit Website
            </a>
        </div>
    );
};

export default UniversityCard;
