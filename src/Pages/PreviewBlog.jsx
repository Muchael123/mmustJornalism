import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function PreviewBlog() {
    const gradientColors = ["#5000ca", "#8b5cf6", "#f472b6"];
  const location = useLocation();
  const navigate = useNavigate();
  //   const history = useHistory();
  const formData = location.state.formData;

  const imageUrl = formData.image && URL.createObjectURL(formData.image);

  return (
    <div className="relative flex flex-col justify-center w-full">
      <h1 className="font-bold text-xl uppercase text-gray-500 ml-[16%] mt-5">
        Preview Blog
      </h1>
      <div className="flex items-center justify-center w-full flex-col p-5">
        <div className="w-full md:w-[70%] flex md:flex-row gap-5 mt-10 py-5 shadow-xl px-2  flex-col items-center">
          <div className="">
            {imageUrl && (
              <img
                className="w-full h-80 max-[475px]:h-full max-[475px]:object-cover rounded object-contain"
                src={imageUrl}
                alt="Uploaded"
              />
            )}
          </div>
          <div className=" w-full md:w-1/2 max-[475px]:w-full max-[475px]:h-1/2 max-[475px]:gap-2">
            <p className="mt-5 uppercase font-bold">
              Category : {formData?.category}
            </p>
            <h1 className="font-bold text-2xl hover:text-orange-500 w-full flex r cursor-pointer uppercase mt-2">
              {formData?.title}
            </h1>
            <div className="border-none px-1 text-black w-full">
              <p className="mt-5 uppercase font-bold">slug : </p>
              <p className="text-sm ">{formData?.slug}</p>
            </div>
            <p className="mt-5 uppercase font-bold">body : </p>
            <p className="capitalize text-sm ">{formData?.body}</p>
          </div>
        </div>
        <div className=" flex gap-5 mt-5">
          <button
            type="button"
            onClick={() => {
              navigate("/CB");
            }}
            className=" rounded-md bg-indigo-600 px-6 w-[280px] py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back to Edit and Post
          </button>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="sticky bottom-0 w-[100%]"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                style={{ stopColor: color }}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,181.3C672,192,768,224,864,224C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );

}

export default PreviewBlog;
