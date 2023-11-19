import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import OtherCategories from './OtherCategories';
// import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';




function MainCatNews(props) {
    const id = props.id;
    const newsOther = props.otherNews
    const title = props.title;
    const link = props.link;
    const body = props.slug;
    const postUrl = `blog/${id}`;
    const published_on = props.published_on;
    const image = props.image;
  return (
    <div className='w-[100vw] h-auto  flex justify-even p-5'>
        <div className='my-12 md:flex-3 m-3  bg-[#f5f5f5] flex-1 flex flex-col md:flex-row h-fit max-h-[85%] overflow-hidden'>
            
           <img src={image} alt={title} className='rounded-lg h- :w-[60%] max-h-[250px] object-cover  mr-5'/>
           <div>
            <div className='my-4'>
                <Link to={postUrl}>
                <h1 className=' lg:text-[26px] text-[24px] font-sans font-bold hover:underline decoration-blue-700'>{title}</h1></Link>

            </div>
            <p>{body}
                </p>

                <span className='w-full justify-end inline-flex gap-3  pt-6 pr-3'><IoTimeOutline />
                    {published_on}
                </span>
           </div>
            
        </div>
        <div className='flex-1 p-5  bg-[#f5f5f5]'>
            <div className='t-5 bg-green min-h-[70px]'>
            </div>
                    {newsOther.map((item, index) => (
          <OtherCategories
            key={item.id}
            id={item.id}
            title={item.title} // Ensure 'title' prop is passed
          />
      ))}
        </div>
    </div>
  )
}

export default MainCatNews