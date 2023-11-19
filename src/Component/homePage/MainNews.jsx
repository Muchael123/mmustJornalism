import React from 'react'
import {motion} from 'framer-motion'
import MiniNews from './MiniNews'
import { Link } from 'react-router-dom'

function MainNews (props){
    const url = `/Blog/${category}/${id}`;
    const image = props.image
    const category= props.category
    const title = props.title
    const slug = props.slug
    const published_on = props.published_on

  return (
    <motion.div
     initial = {{x: -100, opacity:0}}
    animate = {{x:0, opacity:1}}
    transition={{
        ease: "linear",
         duration: .5,
        }}
     className='w-[full] flex-3 flex flex-col md:flex-row m-6 bg-[#f5f5f5] rounded-lg  md:w-[60%]'>
      <div className='flex md:flex-row justify-center md:justify-between lx-2'>
        <img src={image} alt="Logo" className='h-[100%] md:flex-3 rounded-lg mx-5'/>
       
      </div>
       <div className='relative m-5 md:w-[50%] w-[100]  flex-2 pr-3'>
            
            <Link to={url}>
             <h1 className='hover:text-purple-900 text-[18px] font-courier font-bold text-center'>{title}</h1>
            </Link>
             <p className='mb-6 ml-4'>{slug}</p>
             <p className='absolute text-right font-light text-[12px] bottom-0 right-0'>{published_on}</p>
        </div>
        </motion.div>
        
  )
}

export default MainNews