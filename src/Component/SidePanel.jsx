import React from "react";

const SidePanel = () => {
  return (
    <>
      <div>
        <div>
          <ul className="">
            <h5 className="mb-1 text-xl bold font-semibold text-gray-400">
              CATEGORIES
            </h5>
            <li className="text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400">
              {" "}
              News{" "}
            </li>
            <hr className="w-full my-2 border-gray-300" />
            <li className="text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400">
              Sports
            </li>
            <hr className="w-full my-2 border-gray-300" />
            <li className="text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400">
              Business
            </li>
            <hr className="w-full my-2 border-gray-300" />
            <li className="text-gray-400 hover:cursor-pointer hover:underline hover:decoration-blue-400">
              Entertaiment
            </li>{" "}
            <hr className="w-full my-2 border-gray-300" />
          </ul>
          <ul className="mt-5">
            <h5 className="mb-1 text-xl bold font-semibold text-gray-400">
              LATEST POST
            </h5>
            <div className="flex flex-col justify-center w-9/12">
              <div className="flex">
                <div className="mr-4 ">
                  <div className="flex items-center justify-center  mb-3 rounded-full bg-indigo-50">
                    <img
                      className="w-full"
                      src="/src/images/news.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <h6 className="mb-2  w-5/9 font-semibold leading-5">
                    They urge you to put down
                  </h6>
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600"> 28 Dec 2020 -</span>
                    traveling
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center  mb-3 rounded-full bg-indigo-50">
                    <img
                      className="w-full"
                      src="/src/images/news.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    They urge you to put down
                  </h6>
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600"> 28 Dec 2020 -</span>
                    traveling
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center mb-3 rounded-full bg-indigo-50">
                    <img
                      className="w-full"
                      src="/src/images/news.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    They urge you to put down
                  </h6>
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600"> 28 Dec 2020 -</span>
                    traveling
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
