import React from 'react';



export default function TailCard({ title, imageUrl, location, searchKeyword }) {
    let tags = '';
    if (searchKeyword.includes(',')) {
        tags= searchKeyword.split(',')
        tags = tags.map(kw => <span key={kw} className='items-center py-0.5 text-sm font-medium text-center text-gray  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                    {kw}
                              </span>)
    }
    else tags = searchKeyword;
    
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt={title} />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-blue-300">
            {location}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tags}</p>
      </div>
    </div>
  );
}
