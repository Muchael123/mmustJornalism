import React, { useState, useEffect } from "react";
import { useRef } from "react";

const CreateBlog = () => {
  const [img, setImg] = useState();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    image: {},
    category: "News", // Default category
  });
  const scrollRef = useRef();
  const [filePreview, setFilePreview] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status when the component mounts
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    try {
      // Check if the user is authenticated based on the API response
      const response = await fetch(
        "https://mmust-jowa.onrender.com/api/auth/login/check",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("An error occurred while checking authentication:", error);
      setIsAuthenticated(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the user is authenticated before submitting the blog
    if (!isAuthenticated) {
      console.error("User not authenticated. Unable to create a blog.");

      return (window.location.href = "/login");
    }

    try {
      // Generate a unique identifier for the file
      const fileId = generateUniqueId();

      // Append the file id to the form data
      const formDataWithId = {
        ...formData,
        image: filePreview,
      };git

      const response = await fetch(
        "https://c469-197-248-176-94.ngrok-free.app/api/v1/admin/createblog",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify(formDataWithId), // You need to convert your JSON data to FormData
        }
      );
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

      if (response?.ok) {
        console.log("Blog post created successfully");
        // console.log(formDataWithId);

        // Assuming the server returns the URL of the uploaded image
        const imageResponse = await response.json();
        // const imageUrl = imageResponse.image_path;

        // Use the imageUrl to display the image
        console.log(imageResponse);
        setImg(imageResponse.image_path);
      } else {
        console.error("Failed to create blog post");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const generateUniqueId = () => {
    // Implement a function to generate a unique identifier (e.g., UUID)
    // You can use libraries like `uuid` for this purpose.
    // For simplicity, let's use a basic example.
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  // Function to convert JSON data to FormData
  const formDataToFormData = (data) => {
    const formData = new FormData();

    for (const key in data) {
      if (data[key] instanceof File) {
        formData.append(key, data[key], data[key].name);
      } else {
        formData.append(key, data[key]);
      }
    }

    return formData;
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // For file input
    if (type === "file" && files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFilePreview(e.target.result);
      };

      reader.readAsDataURL(files[0]);

      // Do not set the file directly to state, it will be handled by FormData

      setFormData({
        ...formData,
        [name]: files[0], // This line is not needed
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  console.log(formData);
  return (
    <>
      <div className="">
        {/* create new blog */}
        <form
          className="w-full flex items-center justify-center flex-col  mt-2 gap-9  md:grid md:grid-cols-3 max-w-2l bg-white-100  px-4 py-10 mb-10 md:mx-auto sm:text-left  md:mb-12 "
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          {/* ... your existing form fields ... */}

          {/* posttitle  */}
          <div className="col-span-2 shadow-lg px-5 w-8/10 w-full ">
            <div className="mt-2  ">
              <div className="w-full">
                <label className="block  text-lg  font-semibold text-gray-600">
                  HEADLINE
                </label>
                <div className="mt-1 w-[90%] ">
                  <div className="flex shadow-sm w-full">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleChange}
                      value={formData.title}
                      className="block  text-2xl font-bold uppercase w-full border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:normal-case placeholder:font-normal  sm:text-sm sm:leading-6 rounded-md"
                      placeholder="Enter Title"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <label className="block mt-2 mb-2 text-lg bold font-semibold text-gray-600">
                DESCRIPTION
              </label>
              <div className="mt-1 w-[90%]">
                <div className="outline-none flex shadow-sm  border-1  w-full">
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    onChange={handleChange}
                    value={formData.slug}
                    className="block  text-2xl font-bold uppercase w-full border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:normal-case placeholder:font-normal  sm:text-sm sm:leading-6 rounded-md"
                    placeholder="Enter description"
                  />
                </div>
              </div>
            </div>

            {/* post type  */}

            {/* description */}
            <div className="">
              <label className="block mt-2 mb-2 text-lg bold font-semibold text-gray-600">
                TEXT
              </label>
              <div className="mt-2 w-[90%]">
                <textarea
                  id="about"
                  name="body"
                  rows={4}
                  onChange={handleChange}
                  value={formData.body}
                  className="resize-none border-2 block w-full h-fixed rounded-md py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Post category */}
            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block mb-2 mt-5 text-base text-gray-600"
              >
                Post Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>News</option>
                  <option>Sports</option>
                  <option>Business</option>
                  <option>Entertainment</option>
                </select>
              </div>
            </div>

            {/* file uploads */}
            <div className="col-span-full">
              <label className="block mb-2 mt-5 text-base text-gray-700">
                Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {filePreview && (
                    <img
                      src={filePreview}
                      alt="File Preview"
                      className="mb-4 max-w-full max-h-96"
                    />
                  )}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[110px] h-[30px] "
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        onChange={handleChange}
                        name="image"
                        type="file"
                        // value={formData.image_id}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/4">
            <div className="flex flex-col">
              <button
                type="submit"
                className="mb-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                PUBLISH
              </button>
              <button className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                PREVIEW
              </button>
            </div>
          </div>
        </form>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default CreateBlog;
