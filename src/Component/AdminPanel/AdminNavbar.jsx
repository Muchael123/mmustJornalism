import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
const AdminNavbar = ({ onclick }) => {
  const name = localStorage.getItem("User");
  const firstName = name ? name.split(" ")[0] : "";
  const handleLogOut = () => {
    console.log('log out')
    localStorage.removeItem("accessToken");
    localStorage.removeItem("User");
    window.location.href = "/Login";
  };
  return (
    <div className="w-full text-white flex  flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  items-center fixed top-0   md:px-20  justify-between z-[9999]">
      <div className="z-[9999] flex items-center">
        <img
          className="w-20 h-20 object-cover mr-14 md:mr-32  cursor-pointer"
          src="/src/images/logo.png"
          alt=""
        />

        <div className="flex text-2xl font-bold justify-between items-center">
          <h1 className="w-[100px] md:w-[700px] mr-12 md:mr-10">
            <span className="hidden md:block">
              MMUST JOURNALISM STUDENTS ASSOCIATION
            </span>
            <span className="block md:hidden text-[22px] md:mr-3">M-JOSA</span>
          </h1>
          <button onClick={onclick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
                clipRule="evenodd"
                className="md:hidden"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" flex md:gap-2 justify-center items-center ">
        <div className="border-r mr-2 px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
              />
              <circle cx="12" cy="3" r="1" />
            </g>
          </svg>
        </div>
        <p className="w-[60px] md:w-[80px] flex gap-[2px] items-center text-[12px]  flex-col md:flex-row justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6ZM70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58Z"
            />
          </svg>
          Hi, {firstName}{" "}
        </p>
        {/* <svg
          className=""
          // onClick={toggleDropdown}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m7 10l5 5l5-5H7Z" />
        </svg> */}
        <p
          className="text-[30px] text-white font-extrabold"
          onClick={handleLogOut}
        >
          {" "}
          <RiLoginBoxFill />
        </p>
        {/* <button
          onClick={handleLogOut}
          className="mr-2 md:ml-4 md:mr-[-40px] rounded-sm  outline-none border-none bg-blue-500 px-4 py-1"
        >
          logout
        </button> */}
      </div>
    </div>
  );
};

export default AdminNavbar;
