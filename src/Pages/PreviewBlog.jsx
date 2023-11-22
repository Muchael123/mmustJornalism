import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PreviewBlog() {
  const location = useLocation();
  const navigate = useNavigate();
  //   const history = useHistory();
  const formData = location.state.formData;
  
  console.log(onclick);
  const imageUrl = formData.image && URL.createObjectURL(formData.image);

  return (
    <div className="flex items-center justify-center w-full flex-col p-5">
      <h1 className="font-bold text-xl uppercase text-gray-500">
        Preview Blog
      </h1>
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
          type="button "
          onClick={() => {
            navigate("/CB");
          }}
          className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          back to Edit
        </button>
        <button
          type="button "
          onClick={() => {}}
          className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          publish now
        </button>
      </div>
    </div>
  );
}

export default PreviewBlog;
