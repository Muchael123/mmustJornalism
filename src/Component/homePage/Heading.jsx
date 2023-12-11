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
        <div className='mt-20 flex  justify-between  mb-4'>
          <h1 className='text-2xl lg:text-[20px]  md:text-[18px]  font-bold  decoration-gray-400 '>{title}</h1>
         <Link to= {url}>
          <h1 className="text-gray-700 text-[16px] decoration-purple-700 text-md underline hover:no-underline hover:text-purple-700">{view}</h1>
         </Link>
        </div>
    </motion.div>
  )
}

export default Heading;