import { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';
import Content from '../Component/Blog';
import { useParams } from 'react-router-dom'; 

function Blog() {
  const { id } = useParams(); 
  const [newsData, setNewsData] = useState({}); // Changed to object

  useEffect(() => {
    // Fetch business data from the API
    const apiUrl = `https://mmust-jowa.onrender.com/api/v1/user/News/${id}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Ensure the data is an object before setting the state
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
      <Navbar/>
      <div className="grid grid-cols-3 overflow-hidden bg-white px-6 py-24 sm:py-32  lg:px-0">
        <div className="col-span-2 pl-24">
          <div className=' '>
            {/* Render the single object content */}
            <Content
              key={newsData.id} // Assuming the object has an 'id' field
              title={newsData.title}
              body={newsData.body}
              author={newsData.author}
              published_on={newsData.published_on}
              image={newsData.image}
            />
          </div>
        </div>
        <div className='w-11/12'>
          <SidePanel/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
