import React from 'react'
import {motion} from 'framer-motion'
function MiniNews(props) {
    const title = "Kisii: KCSE candidate caught with pre-shared Maths exam"
    const date = props.published_on
  return (
    <motion.div
     initial = {{x: 100, opacity:0}}
    animate = {{x:0, opacity:1}}
    transition={{
        ease: "linear",
         duration: .5,
        }}
    className='hidden md:block border-t-2 border-gray-300 text-gray-700'>
        <h1 className='hover:text-orange-500 font-mono font-bold text-[12px] py-6'>{title}</h1>
    </motion.div>
  )
}

export default MiniNews