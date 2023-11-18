import React, { useState, useEffect } from "react";
import AdminNavbar from "../Component/AdminPanel/AdminNavbar";
import Dashboard from "../Component/AdminPanel/Dashboard";
import AdminSidebar from "../Component/AdminSidebar";
import CreateBlog from "./CreateBlog";
import ProfilePage from "../Component/AdminPanel/ProfilePage";
import AdminNews from "../Component/AdminPanel/AdminNews";
import AdminBusiness from "../Component/AdminPanel/AdminBusiness";
import AdminEntertainment from "../Component/AdminPanel/AdminEntertainment";
import AdminSports from "../Component/AdminPanel/AdminSports";
import Login from "../Pages/Login";
function Admin() {
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Default selected item
  const [authenticated, setAuthenticated] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Check if the user is authenticated (based on your authentication logic)
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // User is authenticated
      setAuthenticated(true);
    } else {
      // User is not authenticated, redirect or handle accordingly
      setAuthenticated(false);
      // For example, redirect to login page
      window.location.href = "/login";
    }
  }, []);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    setOpen(false);
  };
  const handleSideBar = () => {
    setOpen(!open);
    console.log(open)
  };

  // Render the component only if the user is authenticated
  return authenticated ? (
    <div className="w-full overflow-x-hidden flex items-center">
      
      <div className="relative">
        <AdminNavbar onclick={handleSideBar} />
      </div>

      <div className="flex  mt-[80px] w-screen ">
        <div className="md:w-1/6">
          <AdminSidebar onItemClick={handleSidebarItemClick} open={open } />
        </div>

        <div className="flex flex-col showcase w-full md:w-5/6 ">
          <h5 className="mt-2 text-xl w-full  bold font-semibold text-gray-400 -mb-4  px-10 ml-10">
            {selectedItem}
          </h5>
          <div className="">
            <div className=" px-10 py-5 ">
              {/* Render content based on the selected item */}
              {selectedItem === "Dashboard" && <Dashboard />}
              {selectedItem === "Add Blog" && <CreateBlog />}
              {selectedItem === "Profile Settings" && <ProfilePage />}
              {selectedItem === "News" && <AdminNews />}
              {selectedItem === "Sports" && <AdminSports />}
              {selectedItem === "Business" && <AdminBusiness />}
              {selectedItem === "Entertainment" && <AdminEntertainment />}
              {/* {selectedItem === 'Profile Settings' && <SidePanel />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  ); // Return user to login if the user is not authenticated
}

export default Admin;
