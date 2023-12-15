import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Comments = ({ category, image_id }) => {
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const handleSubmit = async () => {
    const contentWithoutSpaces = content.replace(/\s/g, "");
    if (contentWithoutSpaces.length > 6) {
      const url = ` https://mmust-jowa.onrender.com/api/v1/user/comment/${category}/${image_id}`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, is_anonymous: isAnonymous }),
        });

        if (response.ok) {
          const responseData = await response.json();
          setIsAnonymous(true);
          setContent("");
          toast.success("Blog Successfull Posted 🚀🚀");
        } else {
          console.error("Error submitting comment:", response.statusText);
        }
      } catch (error) {
        toast.error("Error: Check intenet connection");
        
      }
    } else {
      toast.error("Please enter at least 6 characters without spaces.");
     
    }
  };


  return (
    <div className="px-10  w-[100%]">
      <Toaster />
      <h1 className=" uppercase font-bold text-xl  my-5 ">LEAVE A COMMENT</h1>
      <label>
        {/* Comment: */}
        <textarea
          id="textarea"
          name="textarea"
          rows="4"
          cols="30"
          placeholder="Your Comment"
          className="pl-2 resize-none border-2 w-full outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <br />

      <button
        onClick={handleSubmit}
        className=" my-2 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 text-white text-lg cursor-pointer hover:opacity-70 uppercase"
      >
        Submit
      </button>
    </div>
  );
};

export default Comments;
