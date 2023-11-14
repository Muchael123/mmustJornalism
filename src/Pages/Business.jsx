import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useParams } from 'react-router-dom'; 
import BlogCard from '../Component/BlogCard';

function Business  () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch business data from the API
    fetch('https://mmust-jowa.onrender.com/api/v1/user/business')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
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
    <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center'>Business</h1>

    <div className='w-9/12 mx-auto mt-4 grid grid-cols-2 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 overflow-x-hidden '>
    
      
      {newsData.map((item, id) => (
          <BlogCard
            key={id}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image}
          />
        ))}
        </div>
    </div>
  
  )
}

export default Business