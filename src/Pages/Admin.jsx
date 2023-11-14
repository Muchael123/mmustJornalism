import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Component/AdminPanel/AdminNavbar';
import Dashboard from '../Component/AdminPanel/Dashboard';
import ProfilePage from '../Component/AdminPanel/ProfilePage';
import AdminSidebar from '../Component/AdminSidebar';
import CreateBlog from './CreateBlog';

import AdminNews from '../Component/AdminPanel/AdminNews';
import AdminBusiness from '../Component/AdminPanel/AdminBusiness';
import AdminEntertainment from '../Component/AdminPanel/AdminEntertainment';
import AdminSports from '../Component/AdminPanel/AdminSports';

function Admin() {
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Default selected item
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (based on your authentication logic)
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      // User is authenticated
      setAuthenticated(true);
    } else {
      // User is not authenticated, redirect or handle accordingly
      setAuthenticated(false);
      // For example, redirect to login page
      window.location.href = '/login';
    }
  }, []);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render the component only if the user is authenticated
  return authenticated ? (
    <div className=' overflow-x-hidden'>
      <div className='relative'>
        <AdminNavbar />
      </div>

      <div className='flex  mt-[80px] w-screen '>
        <div className='w-1/6'>
          <AdminSidebar onItemClick={handleSidebarItemClick} />
        </div>

        <div className='showcase w-5/6'>
          <h5 className='mt-2 text-xl w-full  bold font-semibold text-gray-400 -mb-4  px-10'>{selectedItem}</h5>
          <div className=''>
            <div className=' px-10 py-5 '>
              {/* Render content based on the selected item */}
              {selectedItem === 'Dashboard' && <Dashboard />}
              {selectedItem === 'Add Blog' && <CreateBlog />}
              {selectedItem === 'Profile Settings' && <ProfilePage/> }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null; // Return null if the user is not authenticated
}

export default Admin;