import React from 'react'
import { Link } from 'react-router-dom';

function OtherCategories(props) {
    const id = props.id;
    const url = `/Blog/${id}`;
    const title = props.title;
  return (
     <div className='hidden md:flex flex-col h-fit  divide-y-2 border-gray-400 border-t-2 m-3'>
        <Link to={url}>
        <div className='p-5 '>
            <h1 className='hover:text-orange-400 font-bold space-x-3'>{title}</h1>
        </div>
        </Link>
        </div>
  )
}

export default OtherCategories