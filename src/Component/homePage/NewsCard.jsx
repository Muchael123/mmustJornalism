import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function NewsCard(props) {
  const title = props.title;
  const image = props.image;

  const category = props.category;
  const published_on = props.published_on;
  const id = props.id;

  const url = `/Blog/${category}/${id}`; // Use id in the URL
  localStorage.setItem("id", props.key);
  
  return (
    <Link to={url} className="group shadow- flex-1 flex flex-col  bg-[#fafafa] border rounded-lg hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="px-2 pt-2  flex-1">
        <img
          src={image}
          alt="the image"
          className="w-[100%] rounded-md h-full  object-cover max-h-[240px]"
        />
      </div>
      <div className="flex flex-col  px-2 align-top ">
        <h1 className="text-gray-800 group-hover:text-purple-800 transition-colors duration-200  ease-in-out flex-1 text-[13px] font-bold pt-2">
            {title}
        </h1>

        <p className="inline text-left text-gray-600  py-4 text-[10px]">
          <Typewriter
            words={[`${published_on}`]}
            loop={1}
            delaySpeed={500}
            cursorBlinking={false}
            typeSpeed={80}
          />
        </p>
      </div>
    </Link>
  );
}

export default NewsCard;
