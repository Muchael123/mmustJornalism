// Blog.js
import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';
import Content from '../Component/BlogChat';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer';

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
  }, []);


  return (
    <div>
      <Navbar />
      <div
            
       className="px-2 py-24 flex flex-col md:flex-row  lg:px-6 ">
        <div className="md:px-5 flex-2 bg-[#f5f5f5] max-w-screen p-8 md:ml-24 m-2   w-fit px-4">
          <div className=' justify-even'>
            {/* Check if newsData has data before rendering */}
            {Object.keys(newsData).length > 0 && (
              <Content className=''
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

            
        </div>
        <div className='bg-[#f5f5f5] md:block flex-1'>
              <SidePanel />
           </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;