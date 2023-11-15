import React from 'react'

function LatestCatNews(props) {
    const item = props.item
  return (
      <div className='flex-col flex bg-gray-100 hover:bg-gray-200 flex-2 rounded-md border-b-2 hover:border-purple-300 shadow-md hover:shadow-lg hover:cursor-pointer hover:text-purple-800 align-center ml-4 transition-transform duration-500 ease-in-out transform hover:scale-105'>
        <img src={item.image} className='rounded-lg w-[100%] max-w-[450px] p-3' />

        <h1 className='mx-2 px-2 font-bold'>{item.title}</h1>
      </div>

  )
}

export default LatestCatNews;