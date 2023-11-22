import React from 'react'
import { Link } from 'react-router-dom';

function NewsCard (props){
  const { title, image, slug, published_on, author, id ,category} = props; // Destructure id from props

  const url = `/Blog/${category}/${id}`; // Use id in the URL
  localStorage.setItem('id', props.key);
    // const slug = props.slug
  return (
    <div>
      <Link to={url}>
      <div className=' shadow-lg h-[360px] w-full  rounded-lg p-2 cursor-pointer object-contain'>
        <div>
            <img  className='w-full rounded-md h-[189px]' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3  '>
          
            <div className='text-[10px]'>{published_on}</div>
           
        </div>
        <div className=' font-bold cursor-pointer hover:text-orange-400 ease-in-out duration-150'>{title}</div>
        <div className='border-none  px-1 text-black '>{slug}</div>
      </div>
      </Link>
      </div>
  )
}

export default NewsCard
