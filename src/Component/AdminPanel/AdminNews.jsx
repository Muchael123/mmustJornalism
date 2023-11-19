import React, { useEffect, useState } from 'react';
import AdminNewsCard from './AdminNewsCard';

const AdminNews = () => {
    const id = 3;
    const [latestNews, setLatestNews] = useState([]);
   
  
  
    useEffect(() => {
      const fetchLatestNews = async () => {
        try {
          const response = await fetch('https://mmust-jowa.onrender.com/api/v1/admin/blogs/news', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ` + localStorage.getItem('accessToken'),
            },
          });
          
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setLatestNews(data);
  
         
        } 
        catch (error) {
          console.error('Error fetching latest news:', error);
        }
      };
  
      fetchLatestNews();
    }, [id]);
    
      const formatToLocalTime = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
        return new Date(dateString).toLocaleString(undefined, options);
      };
  return (
    <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {latestNews.map((item,id) => (
          <AdminNewsCard
          key={id}
          id={item.id}
          title={item.title}
          slug={item.slug}
          total_comments={item.total_comments}
          published_on={formatToLocalTime(item.published_on)}
          image={item.image_id}
          category={'News'}
          />
        ))}
     </div>  
     </div>  
     </div>  
        
  );
}

export default AdminNews;
