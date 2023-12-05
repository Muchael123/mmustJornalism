/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Here is your toast.");
function LoginForm() {
  // Example dynamic style values
  const gradientColors = ["#5000ca", "#8b5cf6", "#f472b6"];

  // Create a linear gradient style object
  const linearGradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors.join(", ")})`,
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const notification = toast.loading("authenticating...");

    let response;
    try {
      response = await fetch(
        "https://mmust-jowa.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        toast.success("Login successful", {
          id: notification,
        });

        // Login was successful
        const data = await response.json();

        const access_token = data.success.access_token;
        const user = data.success.User;

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("User", user);
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("User", user);

        // Store the access token in local storage (you can also use cookies)

        // Redirect the user to a protected page or perform other actions
        // Replace 'protected-page' with the actual URL of the protected page
        window.location.href = "/Admin";
      } else if (response.status === 401) {
        // window.location.href = "/Admin";
        toast.error("Login failed, invalid credentials", {
          id: notification,
        });
        console.error("Login failed");
      } else if (response.status === 401) {
        // Handle authentication failure (e.g., display an error message)
        toast.error("Login failed, invalid credentials", {
          id: notification,
        });
        console.error("Login failed");
      } else {
        // Handle other status codes as needed
        toast.error("An error occurred", {
          id: notification,
        });
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      toast.error("An internal error occurred", {
        id: notification,
      });
      console.error("An internal error occurred:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Toaster />

      <div className="w-screen flex flex-col items-center justify-center h-screen mx-auto relative bg-[aliceblue]">
        <form
          className="w-96  h-2/3 flex flex-col  justify-center gap-5 px-8 shadow-lg rounded-lg relative z-10 bg-white"
          onSubmit={handleSubmit}
        >
          <img
            src="/images/logo.png"
            alt=""
            className="w-[150px] h-[150px] absolute top-0 translate-x-[50%] object-cover"
          />
          <div className="mt-6">
            <label className="text-gray-500" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email e.g example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100  border-b-2 outline-none   px-2  w-full py-2 rounded-lg"
              autoComplete="false"
            />
          </div>
          <div>
            <label className="text-gray-500" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="bg-gray-100  border-b-2 outline-none   px-2  w-full py-2 rounded-lg"
              autoComplete="false"
            />
          </div>

          <button
            className="bg-gradient-to-r  from-indigo-500 via-purple-700 to-pink-500 p-2 rounded-3xl text-white mt-2"
            type="submit"
          >
            Sign In
          </button>
          {/* <div className="flex w-full justify-between px-2 text-xs">
            <p>Don't have an account?</p>
            <Link to="/signin">
              <p className="text-blue-700 hover:underline cursor-pointer duration-200">
                Sign Up
              </p>
            </Link>
          </div> */}
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-[100%]"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {gradientColors.map((color, index) => (
                <stop
                  key={index}
                  offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                  style={{ stopColor: color }}
                />
              ))}
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,181.3C672,192,768,224,864,224C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
export default LoginForm;
