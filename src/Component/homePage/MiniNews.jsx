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
    className='relative hover:text-purple-800 hover:cursor-pointer hidden pl-3 py-6 md:block border-y-2 hover:border-none border-gray-300 text-gray-700'>
        <h1 className=' font-mono font-bold text-[16px] '>{title}</h1>
        <p className='absolute text-sm font-light right-0'>{date}</p>
    </motion.div>
  )
}

export default MiniNews