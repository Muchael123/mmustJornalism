import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiLoginBoxFill } from "react-icons/ri";
const AdminSidebar = ({ onItemClick, open }) => {
  const name = localStorage.getItem("User");
  const firstName = name ? name.split(" ")[0] : "";
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  const handleLogOut = () => {
    const notification = toast.loading("Logging out...");
   
    localStorage.removeItem("accessToken");
    localStorage.removeItem("User");
    toast.success("Logout successful", {
      id: notification,
    });
    window.location.href = "/Login";
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Toaster />
      <div
        className={`bg-blue-300 fixed w-7/12 md:w-2/12  h-screen  ${
          open ? "left-0 smooth" : "left-[-100%]"
        } md:left-0 smooth `}
      >
        <ul className="flex flex-col justify-center -ml-5 items-start text-lg px-10 mt-3 text-left ">
          <li
            onClick={() => handleItemClick("Profile Settings")}
            className="flex py-1  w-full justify-start text-left items-center gap-3 cursor-pointer mt-6 md:hidden"
          >
            <p className="w-[60px] md:w-[80px] flex gap-[2px] items-center text-[12px]  flex-col md:flex-row justify-start text-left cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6ZM70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58Z"
                />
              </svg>
              Hi, {firstName}{" "}
            </p>
          </li>
          <li
            className="py-1 flex items-center gap-3 cursor-pointer mt-[20px]"
            onClick={() => handleItemClick("Dashboard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.5 9V4H20v5h-6.5ZM4 12V4h6.5v8H4Zm9.5 8v-8H20v8h-6.5ZM4 20v-5h6.5v5H4Zm1-9h4.5V5H5v6Zm9.5 8H19v-6h-4.5v6Zm0-11H19V5h-4.5v3ZM5 19h4.5v-3H5v3Zm4.5-8Zm5-3Zm0 5Zm-5 3Z"
              />
            </svg>
            Dashboard
          </li>
          <li className="py-1 grid grid-cols-3 items-center gap-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M3.497 15.602a.7.7 0 1 1 0 1.398H.7a.7.7 0 1 1 0-1.398h2.797Zm15.803 0a.7.7 0 1 1 0 1.398H5.529a.7.7 0 1 1 0-1.398H19.3ZM3.497 9.334a.7.7 0 1 1 0 1.399H.7a.7.7 0 1 1 0-1.399h2.797Zm15.803 0a.7.7 0 1 1 0 1.399H5.528a.7.7 0 1 1 0-1.399H19.3ZM3.497 3a.7.7 0 1 1 0 1.398H.7A.7.7 0 1 1 .7 3h2.797ZM19.3 3a.7.7 0 1 1 0 1.398H5.528a.7.7 0 1 1 0-1.398H19.3Z"
              />
            </svg>
            <p className="-ml-6">Categories</p>
            <svg
              className=""
              onClick={toggleDropdown}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m7 10l5 5l5-5H7Z" />
            </svg>
            {isOpen && (
              <ul className="dropdown-menu w-full flex flex-col ml-10 -mt-2 ">
                <li onClick={() => handleItemClick("News")}>News</li>
                <li onClick={() => handleItemClick("Sports")}>Sports</li>
                <li onClick={() => handleItemClick("Business")}>Business</li>
                <li onClick={() => handleItemClick("Entertainment")}>
                  Entertainment
                </li>
              </ul>
            )}
          </li>

          <li
            className="py-1 flex items-center gap-3 cursor-pointer"
            onClick={() => handleItemClick("Add Blog")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 10.5v-1h7v1H8Zm0 3v-1h7v1H8Zm0 3v-1h7v1H8ZM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2h-1Zm-14 12V4h10.923v1H4.5v14h14V9.077h1V20h-16Z"
              />
            </svg>
            Add Blog
          </li>
        </ul>
        <button
          onClick={handleLogOut}
          className="md:hidden flex mr-2 md:ml-4 md:mr-[-20px]   outline-none border-none bg-blue-500 px-10 py-2 rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-300 mt-[50px] ml-[20px]"
        >
          <p
            className="flex items-center text-[14px] text-white font-bold gap-1"
            onClick={handleLogOut}
          >
            <span className="text-sm"> Logout </span>
            <RiLoginBoxFill />
          </p>
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;
