import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNews from '../Component/homePage/MainNews'
import NewsCard from '../Component/homePage/NewsCard'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import LoadingSpinner from '../Component/LoadingSpinner';
import Heading from '../Component/homePage/Heading';
import { motion } from 'framer-motion';

function Homepage() {
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
        setBusinessData(businessData.slice(0, 3));
        

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
  }, []);


  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false,  };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return loading? (
    
    <div className=' overflow-x-hidden'>
      <div className='relative mb-24'>
      <Navbar/>
      </div >

       <motion.div
    initial = {{x: -100, opacity:0}}
    animate = {{x: 0, opacity:1}}
     transition={{
            ease: 'linear',
            duration: 1,
          }}
    >
        <h1 className='w-screen bg- mt-20 flex text-2xl font-bold justify-center text-[26px] justify-left -mb-8 underline decoration-gray-400'>Main News</h1>
    </motion.div>

      {latestData.map((item, key) => (
          <MainNews
          key={item.id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          category = {"News"}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
        ))}
         <Heading title = {"Business News"} category = "business"/>
      <div className='flex justify-even my-5 flex-col md:flex-row snap-mandatory snap-center'>
        {/* <Businesss News /> */}
        {businessData.map((item, key) => (
          <NewsCard
          key={item.id}
          category = {"Business"}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
        ))} </div>
        {/* Entertainment News */}
        <Heading title = {"Entertainment News"} category = "entertainment"/>
         <div className='flex justify-even my-5 flex-col md:flex-row snap-mandatory snap-center'>
        {entertainmentData.map((item, key) => (
          <NewsCard
          key={item.id}
          id={item.id}
          category = {"Entetainment"}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
          
        ))} </div>
        {/* SportsNews */}
        <Heading title = {"Sport News"} category = "sports"/>
         <div className='flex justify-even my-5 flex-col md:flex-row snap-mandatory snap-center'>
        {sportsData.map((item, key) => (
          <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          category = {"Sports"}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
        ))}</div>
        {/* News */}
        
        <Heading title = {"Other News"} category = "news"/>
         <div className='flex justify-even my-5 flex-col md:flex-row snap-mandatory snap-center'>
        {newsData.map((item, key) => (
          <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
        ))}</div>
        {/* <Footer /> */}
    </div> 

    
  ):  (
    <LoadingSpinner />
  );

  }
export default Homepage;