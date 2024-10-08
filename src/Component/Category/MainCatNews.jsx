import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import OtherCategories from "./OtherCategories";
// import { formatDistanceToNow } from 'date-fns';
import { Link } from "react-router-dom";
import MainNews from "../homePage/MainNews";

function MainCatNews(props) {
  const [parse, setParse] = useState(null); // State to hold the parser function
  const id = props.id;
  const category = props.category;
  const title = props.title;
  const body = props.slug;
  const url = `/Blog/${category}/${id}`;
  const published_on = props.published_on;
  const image = props.image;

  useEffect(() => {
    const loadParser = async () => {
      const { default: parser } = await import("html-react-parser");
      setParse(() => parser); // Set the parser function in state
    };

    loadParser();
  }, []);
  console.log(props.slug);
  return (
    <div className="mt-8 flex flex-2 md:flex-row flex-col w-full gap-3 h-fit  bg-slate-100 rounded-lg p-5 min-w-screen max-h-max  ">
      <div className="rounded-lg p-1 md:min-w-[300px] max-w-[350px] border-2 ">
        <img src={image} className="w-full" />
      </div>

      <div>
        <h1 className="max-w-1/2 font-bold ">
          <Link to={url} className="hover:text-purple-700">
            {title}
          </Link>
        </h1>
        {parse && <p>{parse(body)}</p>}
        <p className="font-light tracking-wide p-8 text-[12px] text-right">
          {published_on}
        </p>
      </div>
    </div>
  );
}

export default MainCatNews;
