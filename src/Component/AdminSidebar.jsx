import React from "react";
import { useState } from "react";

const AdminSidebar = ({ onItemClick, open }) => {
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-blue-300 md:fixed w-7/12 md:w-2/12  h-full absolute ${
          open ? "left-0 smooth" : "left-[-100%]"
        } md:left-0 smooth `}
      >
        <ul className="flex flex-col justify-center -ml-5 items-start text-lg px-10 mt-3 text-left ">
          <li
            className="py-1 flex items-center gap-3 cursor-pointer"
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
          <li
            className="py-1 flex items-center gap-3 cursor-pointer"
            onClick={() => handleItemClick("Profile Settings")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M107.19 159a56 56 0 1 0-46.38 0a91.83 91.83 0 0 0-53.93 38.81a4 4 0 1 0 6.7 4.37a84 84 0 0 1 140.84 0a4 4 0 1 0 6.7-4.37A91.83 91.83 0 0 0 107.19 159ZM36 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48Zm212 95.35a4 4 0 0 1-5.53-1.17A83.81 83.81 0 0 0 172 164a4 4 0 0 1 0-8a48 48 0 1 0-17.82-92.58a4 4 0 1 1-3-7.43a56 56 0 0 1 44 103a91.83 91.83 0 0 1 53.93 38.86a4 4 0 0 1-1.11 5.5Z"
              />
            </svg>
            Profile
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
