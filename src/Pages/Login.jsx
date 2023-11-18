/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// const notify = () => toast("Here is your toast.");
function LoginForm() {
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

      console.log(response);
      if (response.status === 200) {
        toast.success("Login successful", {
          id: notification,
        });

        // Login was successful
        const data = await response.json();
        console.log(data);
        console.log(data);

        const access_token = data.success.access_token;
        const user = data.success.User;

        console.log(access_token);
        console.log(user);

        console.log(access_token);
        console.log(user);

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("User", user);
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("User", user);

        // Store the access token in local storage (you can also use cookies)

        // Redirect the user to a protected page or perform other actions
        // Replace 'protected-page' with the actual URL of the protected page
        window.location.href = "/Admin";
      } else if (response.status === 401) {
        window.location.href = "/Admin";
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

      <div className="w-screen flex items-center justify-center h-screen mx-auto">
        <form
          className="w-96  h-2/3 flex flex-col  justify-center gap-5 px-5 shadow-lg rounded-lg "
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-gray-500" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent  border-b-2 outline-none   px-2  w-full"
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
              className="bg-transparent  border-b-2 outline-none   px-2  w-full"
              autoComplete="false"
            />
          </div>

          <button
            className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-3xl text-white mt-2"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex w-full justify-between px-2 text-xs">
            <p>Don't have an account?</p>
            <Link to="/signin">
              <p className="text-blue-700 hover:underline cursor-pointer duration-200">
                Sign Up
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default LoginForm;
