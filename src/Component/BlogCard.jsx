import React from 'react'
import { Link } from 'react-router-dom';

function BlogCard  (props)  {
    const id = props.id
    const title = props.title
    const image = props.image
    const slug = props.slug
    const published_on = props.published_on
    const author = props.author
  return (
    <div>
        <div className=' shadow-lg  w-full  rounded-lg p-2 cursor-pointer object-contain'>
        <div>
            <img  className='w-full rounded-md h-[250px]' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3  '>
          
            <div className='bg-orange-400 border-none cursor-pointer px-1 text-white font-semibold'>{author}</div>
            <div>{published_on}</div>
           
        </div>
        <Link to={`/Blog/${id}`} className='font-bold hover:text-orange-400 ease-in-out duration-150'>
          {title}
        </Link>
        <Link to={`/Blog/${id}`} className='border-none px-1 text-black'>
          {slug}
        </Link>
    </div>

    </div>
  )
}

export default BlogCard