import React from 'react'
import Lottie from "lottie-react";
import Loader from "../../public/Loader.json";
const LoadingSpinner = () => {
  return (

    <div className="w-screen h-screen items-center justify-center flex bg-slate-200">
      <div style={{ width: "400px", height: "400px" }}>
        <Lottie animationData={Loader} loop={true} />
      </div>

    </div>
  );
}

export default LoadingSpinner