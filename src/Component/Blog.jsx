import React from 'react'
import Navbar from '../Component/Navbar';
import { IoMdTime } from "react-icons/io";


function Content(props) {
    const id = props.key
    const title = props.title
    const image = props.image
    const body = props.body
    const published_on = props.published_on
    const author = props.author
  return (
    <div>
        <Navbar/>
 <div className="" key={id}>
 <div className="col-span-2 pl-7 lg:pl-3">
    <div className="lg:row-start-1 lg:mx-auto  lg:w-full">
      <div className="lg:pr-1">
        <div className="w-full">
          {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{title}</h1>
          <div className="sm:text-center flex gap-5 items-center">
            <a href="/" aria-label="Author" className=" mb-1">
            <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div className='alignt-center flex flex-col gap-1 font-mono text-left'>
            <p className="flex mt-3 justify-between divide-x gap-1  font-medium leading-4 text-gray-600"><IoMdTime /> 
            <span className='text-[10px] font-light bg'>{published_on}</span></p>
            
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-left">
            By {author}
            </p>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className="pl-2  pr-6">
      <img className="w-[80%] max-w-none rounded-md bg-gray-900 object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] mb-10" src={image} alt="News image"/>
    </div>

    <div className="lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
      <div className="lg:pr-4">
        <div className="text-base leading-7 text-gray-700">
        {body}
         </div>
      </div>
    </div>
  
  </div>
  <div className='w-11/12'>
    
  </div>
</div>

    </div>
  )
}

export default Content;