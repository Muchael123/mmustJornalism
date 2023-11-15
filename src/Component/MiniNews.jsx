import React from 'react'
import {motion} from 'framer-motion'
function MiniNews(props) {
    const title = props.title
    const date = props.published_on
  return (
    <motion.div
     initial = {{x: 100, opacity:0}}
    animate = {{x:0, opacity:1}}
    transition={{
        ease: "linear",
         duration: .5,
        }}
    className='hidden md:block border-t-2 hover:border-none border-gray-300 text-gray-700'>
        <h1 className='hover:text-orange-500 hover:cursor-pointer font-mono font-bold text-[16px] py-6'>{title}</h1>
    </motion.div>
  )
}

export default MiniNews