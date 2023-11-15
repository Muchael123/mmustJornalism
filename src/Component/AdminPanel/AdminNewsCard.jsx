import React from 'react'

function AdminNewsCard (props){
    const image = props.image
    const title = props.title
    const published_on = props.published_on
    const slug = props.slug
    // const slug = props.slug
  return (
    <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm '>
    
        <img  className='object-cover w-full h-64' src={image} alt="" />
        <div className="p-5 border border-t-0">
        <div className='flex gap-3 mt-3  '>
          
          <div className="text-gray-600">{published_on}</div>
         
      </div>
      <div className=' font-bold cursor-pointer hover:text-orange-400 ease-in-out duration-150'>{title}</div>
      <div className='border-none  px-1 text-black '>{slug}</div>
      <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Read more
          </a>
        </div>
     

    </div>
  )
}

export default AdminNewsCard