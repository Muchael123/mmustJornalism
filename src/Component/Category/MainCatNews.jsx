import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import OtherCategories from './OtherCategories';
// import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import MainNews from '../homePage/MainNews';




function MainCatNews(props) {
    const id = props.id;
    console.log("id is from MainCat", id)
    const category = props.category;
    const newsOther = props.otherNews
    const title = props.title;
    const body = props.slug;
    const url = `/Blog/${category}/${id}`;
    const published_on = props.published_on;
    const image = props.image;
  return (
    <div className='w-[100vw] h-auto  flex justify-left p-1'>
        <div className='flex-3 bg-red-200'>
            <MainNews 
            title={title} 
            category = {category} 
            id = {id}
            published_on={published_on} 
            slug = {body} 
            url={url} 
            image={image} />
        </div>
        
        <div className='flex-2  bg-[#f0f5f5]'>
           
         
                    {newsOther.slice(1).map((item, id) => (
                    <OtherCategories
                        key={item.id}
                        
                        id={item.id}
                        title={item.title} 
                        category={category}// Ensure 'title' prop is passed
                    />
      ))}  
        </div>
    </div>
  )
}

export default MainCatNews