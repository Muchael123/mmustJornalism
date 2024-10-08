import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const CreateBlog = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();
  const [filePreview, setFilePreview] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const checkUserAuthentication = async () => {
    try {
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
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("An error occurred while checking authentication:", error);
      setIsAuthenticated(false);
      if (error === "Error: HTTP error! Status: 401") {
        window.location.href = "/login";
      }
    }
  };

  const handleSubmit = async (event) => {
    const notification = toast.loading("Posting your blog...");
    event.preventDefault();

    if (!isAuthenticated) {
      console.error("User not authenticated. Unable to create a blog.");
      return (window.location.href = "/login");
    }

    try {
      const formDataWithId = { ...formData, image: filePreview };

      const response = await fetch(
        "https://mmust-jowa.onrender.com/api/v1/admin/createblog",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify(formDataWithId),
        }
      );

      if (response?.ok) {
        toast.success("Blog post created successfully", {
          id: notification,
        });
        setFilePreview(null);
        updateFormData({
          title: "",
          slug: "",
          body: "",
          image: null,
          category: "News",
        });
      } else {
        toast.error("Failed to create blog post", {
          id: notification,
        });
        console.error("Failed to create blog post");
      }
    } catch (error) {
      toast.error("An error occurred", {
        id: notification,
      });
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFilePreview(e.target.result);
      };

      reader.readAsDataURL(files[0]);
    } else {
      updateFormData({ [name]: value });
    }
  };

  const handleQuillChange = (name) => (value) => {
    updateFormData({ [name]: value });
  };

  return (
    <>
      <Toaster />
      <div className="w-full">
        <form
          className="w-full flex items-center justify-center flex-col mt-2 gap-9 md:grid md:grid-cols-3 max-w-2l bg-white-100 px-4 py-10 mb-10 md:mx-auto sm:text-left md:mb-12"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2 shadow-lg px-5 w-8/10 w-full">
            <div className="mt-2">
              <div className="w-full">
                <label className="block text-lg font-semibold text-gray-600">
                  HEADLINE
                </label>
                <div className="mt-1 w-[90%]">
                  <div className="flex shadow-sm w-full">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleChange}
                      value={formData.title}
                      required={true}
                      className="block text-2xl font-bold uppercase w-full border-2 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:normal-case placeholder:font-normal sm:text-sm sm:leading-6 rounded-md"
                      placeholder="Enter Title"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <label className="block mt-2 mb-2 text-lg bold font-semibold text-gray-600">
                SMALL DESCRIPTION
              </label>
              <div className="mt-2 w-[90%]">
                <ReactQuill
                  value={formData.slug}
                  onChange={handleQuillChange("slug")}
                  required={true}
                  className="react-quill"
                  modules={quillModules}
                  theme="snow"
                />
              </div>
            </div>

            {/* React Quill for DESCRIPTION TEXT */}
            <div className="">
              <label className="block mt-2 mb-2 text-lg bold font-semibold text-gray-600">
                DESCRIPTION TEXT
              </label>
              <div className="mt-2 w-[90%]">
                <ReactQuill
                  value={formData.body}
                  onChange={handleQuillChange("body")}
                  required={true}
                  className="react-quill"
                  modules={quillModules}
                  theme="snow"
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
                  required={true}
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

            {/* File uploads */}
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
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[110px] h-[30px]"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        onChange={handleChange}
                        name="image"
                        type="file"
                        required={true}
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
              <input
                type="submit"
                value="PUBLISH"
                // onClick={handleSubmit}
                className="mb-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />

              <button
                type="button"
                onClick={() => {
                  const noti = toast.loading(
                    "Naviating to preview, your fields will be saved as draft..."
                  );
                  setTimeout(() => {
                    navigate("/PreviewBlog", {
                      state: {
                        formData,
                      },
                    });
                    toast.success("previewed successfully...", {
                      id: noti,
                    });
                  }, 2000);
                }}
                className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                PREVIEW
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
