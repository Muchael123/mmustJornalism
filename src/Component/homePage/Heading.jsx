import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function Heading(props) {
  const title = props.title;
  const view = "view more";
  const category = props.category; 
  const url = "/" + category;
  return (
    <motion.div
    initial = {{x: -100, opacity:0}}
    animate = {{x: 0, opacity:1}}
     transition={{
            ease: 'linear',
            duration: 1,
          }}
    >
        <div className='w-screen px-12   mt-20 flex  justify-between  mb-4'>
          <h1 className='text-2xl lg:text-[26px]  md:text-[18px]  font-bold  decoration-gray-400 '>{title}</h1>
         <Link to= {url}>
          <h1 className="text-gray-700 text-[16px] decoration-orange-500 text-md underline hover:no-underline hover:text-orange-500">{view}</h1>
         </Link>
        </div>
    </motion.div>
  )
}

export default Heading;