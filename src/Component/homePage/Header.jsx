import React from 'react'
import { motion } from 'framer-motion'

function Header(props) {
    const heading = props.heading
  return (
    <div>
        <motion.h1
      initial={{x:-100, opacity:0}}
      animate={{
      x: 0, opacity:1}}
      transition={{
        ease: "linear",
         duration: 1,
        }}
    
      className='w-screen mt-20 flex text-2xl font-bold pl-20 justify-left ml-4 mb-2 lg:mb-4 underline decoration-[#0047AB] decoration-4'>latest {heading} News</motion.h1>
    </div>
  )
}

export default Header