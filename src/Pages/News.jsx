import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import MainCatNews from '../Component/Category/MainCatNews.jsx'
import BlogCard from '../Component/BlogCard';
import OtherCategories from '../Component/Category/OtherCategories.jsx';


function News  () {
  const id = 3;
  const [newsData, setNewsData] = useState([]);
  const [newsOther, setNewsOther] = useState([]);
  const url = `https://mmust-jowa.onrender.com/api/v1/user/news`

 useEffect(() => {
  // Fetch news data from the API
  fetch({url})
    .then((response) => response.json())
    .then((data) => {
      const valuesArray = Object.values(data);
      setNewsOther(data.slice(0)); // Convert object values to an array
      if (valuesArray && valuesArray.length > 0) {
        setNewsData(valuesArray[0]);
       
      }
    })
    .catch((error) => console.error('Error fetching news data:', error));
}, [id]);
  console.log("other news:",newsOther);
  console.log(newsData)

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
            url = {url}
            title={newsData.title}
            slug={newsData.slug}
            published_on={formatToLocalTime(newsData.published_on)}
            image={newsData.image_id}
            otherNews = {newsOther}
          />
        </div>
      </div>   

    
    
  
  )
}

export default News