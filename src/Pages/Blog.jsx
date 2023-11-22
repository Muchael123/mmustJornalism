// Blog.js
import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';
import Content from '../Component/BlogChat';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer';
import Comments from '../Component/Comments';

function Blog() {
  const { id, category } = useParams(); // Destructure id from useParams
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    const apiUrl = ` https://mmust-jowa.onrender.com/api/v1/user/${category}/${id }`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === 'object' && !Array.isArray(data)) {
          setNewsData(data);
        } else {
          console.error('API response is not an object:', data);
        }
      })
      .catch((error) => console.error(`Error fetching ${category} data:`, error));
  }, [id,category]);
  console.log(newsData);

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden  px-2 py-24 sm:py-32 lg:px-0 bg-[#f5f5f5]">
        <div className="flex pl-8 ml-24 flex-row">
          <div className='flex justify-even'>
            {/* Check if newsData has data before rendering */}
            {Object.keys(newsData).length > 0 && (
              <Content className='flex-4'
                key={id}
                id={newsData.id}
                title={newsData.title}
                body={newsData.body}
                author={newsData.author}
                author_image = {newsData.author_image}
                published_on={newsData.published_on}
                image={newsData.image}                
              />
              
            )}
            </div>
            <SidePanel />
          
        </div>
        
      </div>
      <Comments category={category} image_id={id}/>
      <Footer />
    </div>
  );
}

export default Blog;