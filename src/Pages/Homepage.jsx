import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Component/Category'
import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import LoadingSpinner from '../Component/LoadingSpinner';
import MiniNews from '../Component/MiniNews';

function Homepage() {
  const [newsData, setNewsData] = useState([]);
  const[latestData,setLatestData]=useState([]);
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

      <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center mb-2 lg:mb-4'>LATEST NEWS</h1>

     <div className='flex flex-row justify-around  shadow-md px-2 w-full'>
       {latestData.map((item, index) => (
          <MainNews
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
        <div className='flex flex-col pt-12 flex-1'>
          {latestData.map((item, index) => (
          <MiniNews
          key={index}
          title={item.title}
          published_on={formatToLocalTime(item.published_on)}
         />))
          }
          {latestData.map((item, index) => (
          <MiniNews
          key={index}
          title={item.title}
          published_on={formatToLocalTime(item.published_on)}
         />))
          }
        </div>
          
         
     </div>
      <div className='w-9/12 mx-auto mt-10 grid grid-cols-3 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
    
      
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      
         

     
      {businessData.map((item, index) => (
          <NewsCard
          key={index}
          title={item.title}
          slug={item.slug}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          />
        ))}

      
        
   </div>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>
   <MainNews image="/src/images/news.jpeg" title="The first Main Blog" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad, sunt temporibus architecto eveniet recusandae libero suscipit veniam doloribus nostrum qui! Nobis deleniti vero quia assumenda iure reiciendis. Repellat ut at, corrupti quibusdam voluptate laboriosam aliquid numquam enim ipsa sed!"/>

   <div className='w-full  justify-center flex mt-7 -mb-10 '>
    <div className='bg-orange-500 p-2 rounded-3xl text-white cursor-pointer '>MORE STORIES</div>
    </div>
    <div className='w-full flex'>
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>SPORTS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Sports">VIEW MORE</Link></p>
      
    </div>

    <div className='w-full flex'>
      {sportsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>BUSINESS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Business">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {moreBusinessData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>ENTERTAINMENT</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Entertainment">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {entertainmentData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      </div>
    
   </div>
 
  

    
  ):  (
    <LoadingSpinner />
  );
}

export default Homepage;