import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function NewsCard(props) {
  const title = props.title;
  const image = props.image;
  const slug = props.slug;
  const category = props.category;
  const published_on = props.published_on;
  const id = props.id;

  const url = `/Blog/${category}/${id}`; // Use id in the URL
  localStorage.setItem("id", props.key);
  // const slug = props.slug
  return (
    <div className="shadow-md  flex-1 flex flex-col h-fit  m-7  bg-slate-100 border-gray-300 border-2 rounded-lg md:max-w-[400px]">
      <div className="p-2 rounder-lg">
        <img
          src={image}
          alt="the image"
          className="w-[100%] object-cover max-h-[250px]"
        />
      </div>
      <div className="flex flex-col px-6 divide-y-2">
        <h1 className="text-gray-800 text-[24px] font-mono font-bold pt-4">
          <Link to={url} className="hover:text-purple-500">
            {title}
          </Link>
        </h1>
        <p className="py-3 px-3 text-[13px]">
          <Typewriter
            words={[`${slug}`]}
            loop={1}
            delaySpeed={500}
            cursorBlinking={false}
            typeSpeed={5}
          />
        </p>
        <p className="inline text-right text-gray-600 px-6 py-7 text-[10px]">
          <Typewriter
            words={[`${published_on}`]}
            loop={1}
            delaySpeed={500}
            cursorBlinking={false}
            typeSpeed={80}
          />
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
