import React,{ useState, useEffect } from 'react';
import ThreeDots from './ThreeDots';
import AdminBlogs from './AdminBlogs';

function Dashboard  ()  {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch('https://mmust-jowa.onrender.com/api/v1/admin/news/latest', {
          method: 'GET',
          headers: {
            mode: 'cors',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + localStorage.getItem('accessToken'),
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setLatestNews(data);
      } catch (error) {
        console.error('Error fetching latest news:', error);
      }
    };

    fetchLatestNews();
  }, []);

  console.log(latestNews)

  const formatToLocalTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return (
    <>
      {/* statistics */}
      <div className=" grid gap-10 col-span-3 items-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="mb-2  font-bold">Total Posts</p>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              144K
            </h6>
          </div>
        </div>

        <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="mb-2  font-bold">Comments</p>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              144K
            </h6>
          </div>
        </div>
        <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="mb-2  font-bold">Categories</p>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              144K
            </h6>
          </div>
        </div>
      </div>
      {/* latest post  */}
      <div className="  col-span-3 shadow-md bg-white    py-2.5 ">
        <ul className="hidden lg:grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10">
          <li>IMAGE</li>
          <li>HEADLINE</li>
          <ul className="hidden lg:flex gap-24 justify-between ml-4 ">
            <li>DATE</li>
            <li>STATUS</li>
            <li>VIEWS</li>
          </ul>
        </ul>
      </div>

      <div className="relative col-span-3 shadow-md lg:bg-blue-400 bg:white    lg:py-0.5 py-2.5">
        {latestNews.map((item, id) => (
          <AdminBlogs
            key={id}
            title={item.title}
            total_comments={item.total_comments}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
          />
        ))}
      </div>
    </>
  );
}

<<<<<<< HEAD
export default Dashboard
// import React,{ useState, useEffect } from 'react';
// import ThreeDots from './ThreeDots';
// import AdminBlogs from './AdminBlogs';

// function Dashboard  ()  {
//   const [latestNews, setLatestNews] = useState([]);

//   useEffect(() => {
//     const fetchLatestNews = async () => {
//       try {
//         const response = await fetch('https://mmust-jowa.onrender.com/api/v1/admin/news/latest', {
//           method: 'GET',
//           headers: {
//             mode: 'cors',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ` + localStorage.getItem('accessToken'),
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setLatestNews(data);
//       } catch (error) {
//         console.error('Error fetching latest news:', error);
//       }
//     };

//     fetchLatestNews();
//   }, []);

//   console.log(latestNews)

//   const formatToLocalTime = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, };
//     return new Date(dateString).toLocaleString(undefined, options);
//   };
//   return (
//     <>
//     {/* statistics */}
//       <div className=" grid gap-10 col-span-3 items-center sm:grid-cols-2 lg:grid-cols-3">
          
//           <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
//             <div className="p-5">
//               <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
//                 <svg
//                   className="w-8 h-8 text-deep-purple-accent-400"
//                   stroke="currentColor"
//                   viewBox="0 0 52 52"
//                 >
//                   <polygon
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     fill="none"
//                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                   />
//                 </svg>
//               </div>
//               <p className="mb-2  font-bold">Total Posts</p>
//               <h6 className="text-3xl font-bold text-deep-purple-accent-400">
//             144K
//           </h6>
//             </div>
//           </div>
          
//           <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
//             <div className="p-5">
//               <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
//                 <svg
//                   className="w-8 h-8 text-deep-purple-accent-400"
//                   stroke="currentColor"
//                   viewBox="0 0 52 52"
//                 >
//                   <polygon
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     fill="none"
//                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                   />
//                 </svg>
//               </div>
//               <p className="mb-2  font-bold">Comments</p>
//               <h6 className="text-3xl font-bold text-deep-purple-accent-400">
//             144K
//           </h6>
//             </div>
//           </div>
//           <div className="grid  justify-between overflow-hidden  text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
//             <div className="p-5">
//               <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
//                 <svg
//                   className="w-8 h-8 text-deep-purple-accent-400"
//                   stroke="currentColor"
//                   viewBox="0 0 52 52"
//                 >
//                   <polygon
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     fill="none"
//                     points="29 13 14 29 25 29 23 39 38 23 27 23"
//                   />
//                 </svg>
//               </div>
//               <p className="mb-2  font-bold">Categories</p>
//               <h6 className="text-3xl font-bold text-deep-purple-accent-400">
//             144K
//           </h6>
//             </div>
//           </div>
//         </div>
//       {/* latest post  */}
//       <div className='  col-span-3 shadow-md bg-white    py-2.5 '>
//         <ul className='hidden lg:grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10'>
//           <li>IMAGE</li>
//           <li>HEADLINE</li>
//           <ul className='hidden lg:flex gap-24 justify-between ml-4 '>
//           <li>DATE</li>
//           <li >STATUS</li>
//           <li>VIEWS</li>
//           </ul>
//         </ul> 
//          </div>

//         <div className='relative col-span-3 shadow-md lg:bg-blue-400 bg:white    lg:py-0.5 py-2.5'>

//         {latestNews.map((item, id) => (
//           <AdminBlogs
//             key={id}
//             title={item.title}
//             total_comments={item.total_comments}
//             published_on={formatToLocalTime(item.published_on)}
//             image={item.image_id}
//           />
//         ))}
        


//         {/* <ul className='justify-center items-center grid lg:grid-cols-4 grid-cols-2  gap-2.5 md:gap-6.5 lg:gap-10 shadow-md bg-white  border-solid ml-1 lg:ml-2 py-2.5 lg:px-2 px-1'>
//           <li>
//           <div className="flex items-center justify-between mb-6">
//               <img className='flex-1 rounded-[5px] object-cover mr-3' src="/src/images/news.jpeg" alt="" />

//               </div>
//           </li>
//           <li><p className='bg-red-500 justify-center lg:bg-inherit'> Lorem ipsum dolor sit amet consectetur adipisicing elitatem?</p></li>
//           <ul className='flex gap-16 justify-between ml-4 '>
//           <li className='text-[8px] lg:text-[14px]'>10/11/2023 <br/> 1:24PM</li>
//           <li >Available</li>
//           <li><span className='text-bold lg:hidden'>Comments:</span>20</li>
//           </ul>
//           <ul className='flex gap-4 justify-end mr-20'> 
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"/></svg> </li>
//           </ul>
//           <ThreeDots />
//          </ul> */}
//            </div>
// {/* 
//            <div className='  col-span-3 shadow-md bg-white    py-2.5 '>
//         <ul className='grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10'>
//           <li>
//           <div className="flex items-center justify-start">
//               <img className='w-7/12' src="/src/images/news.jpeg" alt="" />

//               </div>
//           </li>
//           <li> Lorem ipsum dolor sit amet consectetur adipisicing elitatem?</li>
//           <ul className='flex gap-16 justify-between ml-4 '>
//           <li>10/11/2023 <br /> 1:24PM</li>
//           <li>Available</li>
//           <li>20</li>
//           </ul>
//           <ul className='flex gap-4 justify-end mr-20'> 
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"/></svg> </li>
//           </ul>
//          </ul>
//            </div>

//            <div className='  col-span-3 shadow-md bg-white    py-2.5 '>
//         <ul className='grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10'>
//           <li>
//           <div className="flex items-center justify-start">
//               <img className='w-7/12' src="/src/images/news.jpeg" alt="" />

//               </div>
//           </li>
//           <li> Lorem ipsum dolor sit amet consectetur adipisicing elitatem?</li>
//           <ul className='flex gap-16 justify-between ml-4 '>
//           <li>10/11/2023 <br /> 1:24PM</li>
//           <li>Available</li>
//           <li>20</li>
//           </ul>
//           <ul className='flex gap-4 justify-end mr-20'> 
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"/></svg> </li>
//           </ul>
//          </ul>
//            </div>
//            <div className=' col-span-3 shadow-md bg-white    py-2.5 '>
//         <ul className='grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10'>
//           <li>
//           <div className="flex items-center justify-start">
//               <img className='w-7/12' src="/src/images/news.jpeg" alt="" />

//               </div>
//           </li>
//           <li> Lorem ipsum dolor sit amet consectetur adipisicing elitatem?</li>
//           <ul className='flex gap-16 justify-between ml-4 '>
//           <li>10/11/2023 <br /> 1:24PM</li>
//           <li>Available</li>
//           <li>20</li>
//           </ul>
//           <ul className='flex gap-4 justify-end mr-20'> 
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg></li>
//             <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"/></svg> </li>
//           </ul>
//          </ul>
//            </div> */}
      
      
  
    
//     </>
//   )
// }

// export default Dashboard
=======
export default Dashboard;
>>>>>>> 3a1f0f23440ba1106e5ea700eacfc4e637f827db
