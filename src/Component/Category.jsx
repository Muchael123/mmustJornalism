import React from 'react'
import NewsCard from './NewsCard'

function Category (props)  {
    const category = props.category
  return (
    <div className=' w-9/12 max-[475px]:w-11/12 mx-auto mt-10'>
        <div className='flex justify-between '>
            <h5 className=' font-bold  text-lg mb-1'>{category}</h5>
            <h5 className=' cursor-pointer hover:text-purple-700 ease-in-out hover:underline duration-150'>VIEW MORE</h5>
        </div>
        <div className=' grid grid-cols-3 gap-3 max-[475px]:grid-cols-1 '>
        <NewsCard image="/src/images/news.jpeg"  published_on="32 minutes ago" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad  "/>
        <NewsCard image="/src/images/news.jpeg" published_on="32 minutes ago" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad"/>
        <NewsCard image="/src/images/news.jpeg"  published_on="32 minutes ago" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad "/>
        </div>
        
    </div>
  )
}

export default Category