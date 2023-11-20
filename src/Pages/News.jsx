import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import MainCatNews from '../Component/Category/MainCatNews.jsx'
import OtherCategories from '../Component/Category/OtherCategories.jsx';


function News  () {
 
  const [newsData, setNewsData] = useState([]);
  const [newsOther, setNewsOther] = useState([]);

 useEffect(() => {
  // Fetch news data from the API
  fetch('https://mmust-jowa.onrender.com/api/v1/user/news')
    .then((response) => response.json())
    .then((data) => {
      const valuesArray = Object.values(data);
      setNewsOther(data); // Convert object values to an array
      if (valuesArray && valuesArray.length > 0) {
        setNewsData(valuesArray[0]);
       
      }
    })
    .catch((error) => console.error('Error fetching news data:', error));
}, []);
  console.log("other news:",newsOther);
 

  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className='flex flex-col justify-between'>
      <Navbar />
      <div className=''>
        <h1> hello world</h1>
      </div>
      {/* <Footer/> */}
      </div>   

    
    
  
  )
}

export default News