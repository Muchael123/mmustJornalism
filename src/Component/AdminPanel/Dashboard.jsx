import React, { useState, useEffect } from "react";
import ThreeDots from "../ThreeDots";
import AdminBlogs from "../AdminBlogs";

function Dashboard() {
  const [latestNews, setLatestNews] = useState([]);
  const [totalComments, setTotalComments] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch(
          "https://mmust-jowa.onrender.com/api/v1/admin/news/latest",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ` + localStorage.getItem("accessToken"),
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setLatestNews(data);

        const commentsResponse = await fetch(
          "https://mmust-jowa.onrender.com/api/v1/admin/total/comments",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ` + localStorage.getItem("accessToken"),
            },
          }
        );

        if (!commentsResponse.ok) {
          throw new Error(`HTTP error! Status: ${commentsResponse.status}`);
        }

        const totalComments = await commentsResponse.json();
      
        setTotalComments(totalComments);

        const blogsResponse = await fetch(
          "https://mmust-jowa.onrender.com/api/v1/admin/total/blogs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ` + localStorage.getItem("accessToken"),
            },
          }
        );

        if (!blogsResponse.ok) {
          throw new Error(`HTTP error! Status: ${blogsResponse.status}`);
        }

        const blogsData = await blogsResponse.json();
        setTotalBlogs(blogsData);
        
      } catch (error) {
        console.error("Error fetching latest news:", error);
        if (error == "Error: HTTP error! Status: 401") {
           window.location.href = "/login";
        }
      }
    };

    fetchLatestNews();
  }, []);



  const formatToLocalTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return (
    <>
      {/* statistics */}
      <div className="grid gap-10 col-span-3 items-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full  grid  justify-between overflow-hidden  text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl items-center">
          <div className="p-5  w-full">
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
              {totalBlogs}
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
              {" "}
              {totalComments}
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
              4
            </h6>
          </div>
        </div>
      </div>
      {/* latest post  */}
      <div className="  col-span-3 shadow-md     py-2.5 ">
        <ul className="hidden lg:grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10">
          <li>IMAGE</li>
          <li>HEADLINE</li>
          <ul className="hidden lg:flex gap-24 justify-between ml-4 ">
            {/* <li>DATE</li> */}
            <li className="ml-12">COMMENTS</li>
            <li className="ml-[100px]">VIEWS</li>
          </ul>
        </ul>
      </div>

      <div className="relative col-span-3  lg:py-0.5 py-2.5 z-[4]">
        {latestNews.map((item) => (
        
          <AdminBlogs
            key={item.id}
            title={item.title}
            total_comments={item.total_comments}
            published_on={formatToLocalTime(item.published_on)}
            image={item.image_id}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
