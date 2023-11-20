import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function MainNews (props){
   
    const image = props.image;
    const category= props.category;
    const title = props.title;
    const slug = props.slug;
    const id = props.id
    console.log("Maich",id);
    const url = `/Blog/${category}/${id}`;
    const published_on = props.published_on

  return (
  <div>
   
    <div
    className='flex md:flex-row flex-col  max-[475px]:flex-col max-[475px]:w-11/12 bg-slate-100 hover:bg-slate-100   w-9/12  justify-start rounded-lg  md:h-[360px]  h-fit snap-mandatory snap-center
    max-[475px]:h-[420px] max-[475px] md:gap-5 md:mx-2  mt-10 py-5  shadow-lg hover:shadow-2xl transition-all duration-5 00 ease-in-out  px-2 max-[475px]:py-2 '>
        <motion.div
        initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1,
          }}
         className=' w-full max-[475px]:w-full max-[475px]:h-1/2 gap-2'>
           <img className=' md:rounded-lg rounded-md w-full md:h-80 h-[90%] max-[475px]  object-cover mb-4' src={image} alt="Latest News..." /></motion.div>
        <motion.div
        initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1,
          }}
        className='flex flex-col md:w-1/2 w-full max-[475px]:w-full max-w-[475px] gap-2'>
           <Link to={url}>
            <h1 className='font-bold text-2xl hover:text-orange-500 w-full  flex r cursor-pointer decoration-gray-400 justify-left  hover:underline'>{title}</h1></Link>
            <div className='border-none  px-1 text-black '>
             <Typewriter 
               words = {[`${slug}`]}
               loop = {1}
               delaySpeed={500}
               cursorBlinking = {false}
               typeSpeed={10}
               />
              </div>
            <h1 className='font-light text-[12px] pt-12 text-right -bottom-12 pr-3'>
               <Typewriter 
               words = {[`${published_on}`]}
               loop = {1}
               delaySpeed={500}
               cursorBlinking = {false}
               typeSpeed={80}
               />
            </h1>
           </motion.div>
    </div>
    
  </div>
  )
}

export default MainNews