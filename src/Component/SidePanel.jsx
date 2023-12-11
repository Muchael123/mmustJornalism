import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTruncate } from "../../hooks/useTruncate";
const SidePanel = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [newsCat, setNewsCat] = useState([]);

  useEffect(() => {
    const apiUrl = "https://mmust-jowa.onrender.com/api/v1/user/blog/latest";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is an object with categories
        

        // Extracting ids while retaining category information
        const extractedData = Object.keys(data).map((category) => ({
          ...data[category],
          category,
        }));
        setNewsData(extractedData);

        const extractedCategories = Object.keys(data);
        setNewsCat(extractedCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Rest of your component logic...

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
    <div className="flex-2 px-10">
      <div className="min-h-[50px]"></div>
      {newsData.map((item, index) => (
        <div key={index} className="flex">
          <div className="">
            <Link
              to={`/blog/${item.category}/${item.id}`}
              onClick={() =>
                (window.location.href = `/blog/${item.category}/${item.id}`)
              }
            >
              <h6 className="mb-2 w-5/9 font-semibold leading-5 hover:text-purple-700">
                {useTruncate(item.title, 100)}
              </h6>
            </Link>
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">{item.published_on}</span>
            </p>
            <hr className="w-full my-6 border-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidePanel;
