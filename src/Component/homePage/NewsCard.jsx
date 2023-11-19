import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function NewsCard (props){
   
  const title = props.title;
  const image = props.image;
   const slug = props.slug;
   const published_on = props.published_on;
   const id = 3;

  const url = `/Blog/${id}`; // Use id in the URL
  localStorage.setItem('id', props.key);
    // const slug = props.slug
  return (
    <div className='shadow-md flex-1 flex flex-col h-fit max-w-[400px] m-7 bg-slate-100 border-gray-300 border-2 rounded-lg'>
      <div className='p-2 rounder-lg  bg-red-100'>
        <img src={image} alt="the image" className='w-[100%] obj max-h-[250px]' />
      </div>
        <div className='flex flex-col px-6 divide-y-2'>
          <h1 className='text-gray-800 text-[24px] font-mono font-bold pt-4'><Link className='hover:text-orange-500'>{title}
          
          </Link>
      </h1>
      <p className='py-3 px-3'>{slug}
       <Typewriter 
               words = {[`${slug}`]}
               loop = {1}
               delaySpeed={500}
               cursorBlinking = {false}
               typeSpeed={10}
               />
      </p>
      <p className='inline text-right text-gray-600 px-6 pt-7'>
      <Typewriter 
               words = {[`${published_on}`]}
               loop = {1}
               delaySpeed={500}
               cursorBlinking = {false}
               typeSpeed={80}
               />
      </p>
        </div>
      </div>
  )
}

export default NewsCard