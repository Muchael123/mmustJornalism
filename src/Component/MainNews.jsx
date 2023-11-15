import React from 'react'
import {motion} from 'framer-motion'
import MiniNews from './MiniNews'
function MainNews (props){
    const image = 'https://images.citizen.digital/112568/conversions/Screenshot_20231114_113322_X-thumbnail.webp'
    const title = props.title
    const slug = "Whitman noted that her sister had invited Dr. Harsh, a neurosurgeon by profession now, to her wedding but owing to a familial engagement, the good doctor did not grace the event.Recognizing his mistak"
    const published_on = props.published_on

  return (
    <motion.div
     initial = {{x: -100, opacity:0}}
    animate = {{x:0, opacity:1}}
    transition={{
        ease: "linear",
         duration: .5,
        }}
     className='w-[full] flex flex-col md:flex-row m-6 bg-[#f5f5f5] rounded-lg  md:w-[60%]'>
      <div className='flex md:flex-row justify-center md:justify-between lx-2'>
        <img src={image} alt="Logo" className='h-[100%] md:flex-3 rounded-lg mx-5'/>
       
      </div>
       <div className='relative m-5 md:w-[50%] w-[100]  flex-2 pr-3'>
            <h1 className='text-[24px] font-courier font-bold text-center'>{title}</h1>
             <p className='mb-6'>{slug}</p>
             <p className='absolute text-right font-light text-[12px] bottom-0 right-0'>{published_on}</p>
        </div>
        </motion.div>
        
  )
}

export default MainNews