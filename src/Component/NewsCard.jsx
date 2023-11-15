import React from 'react'

function NewsCard (props){
    const image = props.image
    const title = props.title
    const published_on = props.published_on
    const slug = props.slug
    // const slug = props.slug
  return (
    <div className=' shadow-lg h-[360px] w-full  rounded-lg p-2 cursor-pointer object-contain'>
        <div>
            <img  className='w-full rounded-md h-[189px]' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3  '>
          
            <div>{published_on}</div>
           
        </div>
        <div className=' font-bold cursor-pointer hover:text-orange-400 ease-in-out duration-150'>{title}</div>
        <div className='border-none  px-1 text-black '>{slug}</div>

    </div>
  )
}

export default NewsCard