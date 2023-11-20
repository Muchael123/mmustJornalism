import React from "react";
import { useLocation, useNavigate,  } from "react-router-dom";

function PreviewBlog() {
  const location = useLocation();
  const navigate = useNavigate();
//   const history = useHistory();
  const formData = location.state.formData;
  const imageUrl = formData.image && URL.createObjectURL(formData.image);

  return (
    <div>
      <h1 className="text-red-500">Preview Blog</h1>
      <div className="flex flex-row max-[475px]:flex-col max-[475px]:w-11/12 w-9/12 mx-auto justify-start rounded-md h-[360px] max-[475px]:h-[420px] max-[475px]:gap-1 gap-5 mt-10 py-5 shadow-xl px-2 max-[475px]:py-2">
        <div className="w-1/2 max-[475px]:w-full max-[475px]:h-1/2 max-[475px]:gap-2">
          {imageUrl && (
            <img
              className="w-full h-80 max-[475px]:h-full max-[475px]:object-cover rounded-md object-contain"
              src={imageUrl}
              alt="Uploaded"
            />
          )}
        </div>
        <div className="w-1/2 max-[475px]:w-full max-[475px]:h-1/2 max-[475px]:gap-2">
          <h1 className="font-bold text-2xl hover:text-orange-500 w-full flex r cursor-pointer">
            {formData?.title}
          </h1>
          <div className="border-none px-1 text-black">{formData?.slug}</div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
         window.location
        }}
        className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        PREVIEW
      </button>
    </div>
  );
}

export default PreviewBlog;
