// Blog.js
import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';
import Content from '../Component/Blog';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer';

function Blog() {
  const { id } = useParams(); // Destructure id from useParams
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    const apiUrl = `https://mmust-jowa.onrender.com/api/v1/user/News/${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'object' && !Array.isArray(data)) {
          setNewsData(data);
        } else {
          console.error('API response is not an object:', data);
        }
      })
      .catch((error) => console.error('Error fetching news data:', error));
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-white px-2 py-24 sm:py-32 lg:px-0">
        <div className="flex pl-8 ml-24">
          <div className='flex justify-between'>
            {/* Check if newsData has data before rendering */}
            {Object.keys(newsData).length > 0 && (
              <Content className='flex-3'
                key={newsData.id}
                title={newsData.title}
                body={newsData.body}
                author={newsData.author}
                published_on={newsData.published_on}
                image={newsData.image}
              />
              
            )}
            </div>
            <SidePanel flex-1/>
          
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
