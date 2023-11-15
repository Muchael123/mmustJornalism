import React, { useEffect, useState } from "react";

function AdminBlogs(props) {
  const image = props.image;
  const title = props.title;
  const published_on = props.published_on;
  const total_comments = props.total_comments;

  const deleteBlog = async () => {
    // console.log(props.id);
    try {
      const response = await fetch(
        "https://mmust-jowa.onrender.com/api/v1/admin/news/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ` + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({
            id: props.id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(props.id);
  return (
    <div className="  col-span-3 shadow-md bg-white    py-2.5 ">
      <ul className="grid shadow-md bg-white  border-solid ml-2 py-2.5 px-2 grid-cols-4 gap-10">
        <li>
          <div className="flex items-center justify-start">
            <img className="w-7/12" src={image} alt="" />
          </div>
        </li>
        <li>{title} </li>
        <ul className="flex gap-16 justify-between ml-4 ">
          <li>{published_on} </li>
          <li className="ml-20">{total_comments} </li>
        </ul>
        <ul className="flex gap-4 justify-end mr-10">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
              />
            </svg>
          </li>
          <li onClick={deleteBlog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z"
              />
            </svg>{" "}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default AdminBlogs;
