import React, { useState, useEffect } from "react";
import AdminNavbar from "../Component/AdminPanel/AdminNavbar";
import AdminSidebar from "../Component/AdminSidebar";
import Login from "../Pages/Login";
import Dashboard from "../Component/AdminPanel/Dashboard";
import CreateBlog from "./CreateBlog";
import ProfilePage from "../Component/AdminPanel/ProfilePage";
import AdminNews from "../Component/AdminPanel/AdminNews";
import AdminBusiness from "../Component/AdminPanel/AdminBusiness";
import AdminEntertainment from "../Component/AdminPanel/AdminEntertainment";
import AdminSports from "../Component/AdminPanel/AdminSports";

const routeConfig = {
  Dashboard,
  "Add Blog": CreateBlog,
  "Profile Settings": ProfilePage,
  News: AdminNews,
  Sports: AdminSports,
  Business: AdminBusiness,
  Entertainment: AdminEntertainment,
};

function CB() {
  const [selectedItem, setSelectedItem] = useState("Add Blog");
  const [authenticated, setAuthenticated] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setAuthenticated(false);
      window.location.href = "/login";
    }
  }, []);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    setOpen(false);
  };

  const handleSideBar = () => {
    setOpen(!open);
  };

  return authenticated ? (
    <div className="w-full overflow-x-hidden flex items-center">
      <div className="relative">
        <AdminNavbar
          onItemClick={handleSidebarItemClick}
          onclick={handleSideBar}
        />
      </div>

      <div className="flex mt-[80px] w-screen">
        <div className="md:w-1/6">
          <AdminSidebar onItemClick={handleSidebarItemClick} open={open} />
        </div>

        <div className="flex flex-col showcase w-full md:w-5/6">
          <h5 className="mt-2 text-xl w-full bold font-semibold text-gray-400 -mb-4 px-10 ml-10">
            {selectedItem}
          </h5>
          <div className="px-10 py-5">
            {React.createElement(routeConfig[selectedItem])}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default CB;
