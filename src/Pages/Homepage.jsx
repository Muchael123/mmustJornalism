import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import LoadingSpinner from '../Component/LoadingSpinner';

function Homepage() {
  const id = 3;
  const [newsData, setNewsData] = useState([]);
  const [latestData, setLatestData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [moreBusinessData, setMoreBusinessData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch latest news data
        const latestResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/news');
        const latestData = await latestResponse.json();
        setLatestData(latestData.slice(0, 1));

        // Fetch sports data
        const sportsResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/sports');
        const sportsData = await sportsResponse.json();
        setSportsData(sportsData.slice(0, 3));

        // Fetch entertainment data
        const entertainmentResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/entertainment');
        const entertainmentData = await entertainmentResponse.json();
        setEntertainmentData(entertainmentData.slice(0, 3));

        // Fetch news data
        const newsResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/news');
        const newsData = await newsResponse.json();
        setNewsData(newsData.slice(1, 3));

        // Fetch business data
        const businessResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/business');
        const businessData = await businessResponse.json();
        setBusinessData(businessData.slice(0, 1));

        // Fetch more business data
        const moreBusinessResponse = await fetch('https://mmust-jowa.onrender.com/api/v1/user/business');
        const moreBusinessData = await moreBusinessResponse.json();
        setMoreBusinessData(moreBusinessData.slice(0, 3));

        setLoading(true); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(true); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, [id]);

  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false,  };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return loading? (
    
    <div className=' overflow-x-hidden'>
      <div className='relative mb-24'>
      <Navbar/>
      </div >

      <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center -mb-8'>LATEST NEWS</h1>

      {latestData.map((item, id) => (
          <MainNews
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'News'}
          />
        ))}
      <div className='w-9/12 mx-auto mt-10 grid grid-cols-3 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
    
      
      {newsData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'News'}
          />
        ))}
      
         

     
      {businessData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'Business'}
          />
        ))}

      
        
   </div>
   <div className='w-9/12 mx-auto mt-10   '>
    
    <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>NEWS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/News">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {newsData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'News'}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>SPORTS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Sports">VIEW MORE</Link></p>
      
    </div>

    <div className='w-full flex'>
      {sportsData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'Sports'}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>BUSINESS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Business">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {moreBusinessData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'Business'}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>ENTERTAINMENT</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Entertainment">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {entertainmentData.map((item, id) => (
          <NewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'Entertainment'}
          />
        ))}
      </div>
    
   </div>
 
    </div> 

    
  ):  (
    <LoadingSpinner />
  );
}

export default Homepage;