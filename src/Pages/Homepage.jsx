import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNews from '../Component/homePage/MainNews';
import NewsCard from '../Component/NewsCard';
import Navbar from '../Component/Navbar';
import LoadingSpinner from '../Component/LoadingSpinner';
import MiniNews from '../Component/homePage/MiniNews';
import Footer from '../Component/Footer';
import { motion } from 'framer-motion';
import Header from '../Component/homePage/Header';
import HomeNewsPage from '../Component/homePage/HomeNewsPage';

function Homepage() {
  const [newsData, setNewsData] = useState([]);
  const businessHeading = "Business";
  const sportsHeading = "Sports";
  const newsHeading = "";
  const [latestData, setLatestData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [moreBusinessData, setMoreBusinessData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const url = 'https://mmust-jowa.onrender.com/api/v1/user/'; 
  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    return new Date(dateString).toLocaleString(undefined, options);

  };

  const fetchInfo = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setNewsData(data.News);
        console.log(data);
        setLatestData(data.News[0]);
        setBusinessData(data.Business);
        setSportsData(data.Sports);
        setEntertainmentData(data.Entertainment);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show an error message to the user
        setLoading(false); // Set loading to false in case of an error
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className='overflow-x-hidden'>
      <div className='relative mb-24'>
        <Navbar />
      </div>

      <Header
       heading = {newsHeading}
      />

      <div className='flex flex-row justify-between shadow-md px-2 w-full'>
          <MainNews
            key={latestData.id}
            title={latestData.title}
            slug={latestData.slug}
            published_on={formatToLocalTime(latestData.published_on)}
            image={latestData.image}
          />
          <div className='flex flex-col flex-1'>
            {newsData.slice(1).map((item, index) => (
          <MiniNews
            key={index}
            id = {item.id}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
          </div>
           
        {/* Render MainNews and MiniNews components here using latestData */}
      </div>
      <HomeNewsPage 
      businessHeading ={businessHeading}
      businessData = {businessData}
      />
      <HomeNewsPage 
      businessHeading ={sportsHeading}
      businessData = {sportsData}
      />
      <Footer />
      </div>

     
     
  );
}

export default Homepage;
