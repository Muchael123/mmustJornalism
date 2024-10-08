import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTruncate } from "../../../hooks/useTruncate";
import { parse } from "date-fns";

function MainNews(props) {
  const image = props.image;
  const category = props.category;
  const title = props.title;
  const [parse, setParse] = useState(null); // State to hold the parser function
  const id = props.id;
  const url = `/Blog/${category}/${id}`;
  const published_on = props.published_on;
  const slug = useTruncate(props.slug, 200);

  useEffect(() => {
    const loadParser = async () => {
      const { default: parser } = await import("html-react-parser");
      setParse(() => parser); // Set the parser function in state
    };

    loadParser();
  }, []);
  return (
    <Link to={url}>
      <div className="group hover:scale-105 transition-all duration-200 ease-in-out grid lg:grid-cols-2 lg:gap-4 bg-slate-100 hover:bg-slate-100     rounded-lg  mt-12 p-3">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className=" w-full  gap-2"
        >
          <img
            className=" md:rounded-lg rounded-md w-full h-full max-h-[285px]  object-cover mb-4"
            src={image}
            alt="Latest News..."
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="flex flex-col"
        >
          <div className="flex-1">
            <h1 className="font-bold text-2xl group-hover:text-purple-700 w-full  flex r cursor-pointer decoration-gray-400 justify-left  ">
              {title}
            </h1>

            <div className="border-none  px-1 text-black ">
              {
                parse && <p>{parse(slug)}</p>
                // <Typewriter
                //   words={[`${parse(slug)}`]}
                //   loop={1}
                //   delaySpeed={500}
                //   cursorBlinking={false}
                //   typeSpeed={10}
                // />
              }
            </div>
          </div>
          <h1 className="font-light text-[12px]  text-right -bottom-12 pr-3">
            <Typewriter
              words={[`${published_on}`]}
              loop={1}
              delaySpeed={500}
              cursorBlinking={false}
              typeSpeed={80}
            />
          </h1>
        </motion.div>
      </div>
    </Link>
  );
}

export default MainNews;
