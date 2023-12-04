import React from "react";
import Lottie from "lottie-react";
import Loader from "../../public/Loader.json";
const LoadingSpinner = () => {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col bg-slate-300">
      <h1 className="font-extrabold text-[25px] text-gray-500">MMUST JOSA</h1>
      <div style={{ width: "400px", height: "400px" }}>
        <Lottie animationData={Loader} loop={true} />
      </div>
      <p className="text-gray-500 text-sm">
       Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
