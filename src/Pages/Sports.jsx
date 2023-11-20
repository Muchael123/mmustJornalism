import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import MainCatNews from '../Component/Category/MainCatNews.jsx'
import OtherCatNews from '../Component/Category/OtherCatNews.jsx';
import NewsCard from '../Component/homePage/NewsCard.jsx';


function News  () {
 
  const [newsData, setNewsData] = useState([]);
  const [sideNews, setSideNews] = useState([]);
  const [newsOther, setNewsOther] = useState([]);

 useEffect(() => {
  // Fetch news data from the API
fetch('https://mmust-jowa.onrender.com/api/v1/user/sports')
    .then((response) => response.json())
    .then((data) => {
        const valuesArray = Object.values(data);
        console.log(Array.isArray(valuesArray));
        setNewsOther(valuesArray.slice(3));
        setSideNews(valuesArray.slice(1, 3));
        if (valuesArray && valuesArray.length > 0) {
            setNewsData(valuesArray[0]);
        }
    })
    .catch((error) => {
        console.error('Error fetching news data:', error);
    });
}, []);
  console.log("other news:",newsOther);
 

  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className='flex flex-col'>
      <Navbar />
      <h1 className='my-12 py-12 text-[24px] font-bold text-center tracking-wider'>Main Sports News</h1>
      <div className='flex '>
      <div>
         <div className='flex justify-center  flex-row px-7 divide-x- gap-12'> 
            
          <MainCatNews
          id={newsData.id}
          title={newsData.title}
          slug={newsData.slug}
          category = {"Sports"}
          published_on={formatToLocalTime(newsData.published_on)}
          image={newsData.image_id}
          />
            
            <div className='p-4 justify-center  rounded-lg border-gray-300 bg-slate-100 hidden md:block'>
              {sideNews.map((item, key) => (
                <OtherCatNews
                key={item.key}
                id={item.id}
                title={item.title}
                category = {"Sports"}
                published_on={formatToLocalTime(item.published_on)}
                />
              ))}
              </div>
          </div>
      </div>
       
      </div>
      <h1 className='my-12 py-12 text-[24px] font-bold text-center tracking-wider'>Other Sports News</h1>
      {newsOther.map((item, key) => (
                <NewsCard
                key={item.key}
                image = {item.image_id}
                slug = {item.slug}
                id={item.id}
                title={item.title}
                category = {"Sports"}
                published_on={formatToLocalTime(item.published_on)}
                />
              ))}
      <Footer/>
      </div>   

    
    
  
  )
}

export default News