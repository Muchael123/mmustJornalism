import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import BlogCard from '../Component/BlogCard';
import MainCatNews from '../Component/Category/MainCatNews';

function Sports  () {
  const id = 3;
  const category = 'Sports';
  const [newsData, setNewsData] = useState([]);
  const [newsOther, setNewsOther] = useState([]);

 useEffect(() => {
  // Fetch news data from the API
  fetch('https://mmust-jowa.onrender.com/api/v1/user/sports')
    .then((response) => response.json())
    .then((data) => {
      const valuesArray = Object.values(data);
      setNewsOther(data); // Convert object values to an array
      if (valuesArray && valuesArray.length > 0) {
        setNewsData(valuesArray[0]);
       
      }
    })
    .catch((error) => console.error('Error fetching news data:', error));
}, [id]);

 const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  
  return (
   <div className='overflow-x-hidden'>
     <div className='relative mb-24'>
      <Navbar/>
     
    </div>
    <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center'>News</h1>
        <div className='p-5 flex flex-row w-[100vw] '>   
          <MainCatNews
            id={newsData.id}
            title={newsData.title}
             category = {category}
            slug={newsData.slug}
            published_on={formatToLocalTime(newsData.published_on)}
            image={newsData.image_id}
            otherNews = {newsOther}
          />
        </div>
      </div>  
  
  )
}

export default Sports