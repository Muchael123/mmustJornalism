import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="w-full text-white flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-between items-center fixed top-0 left-0 mb-10 md:px-20 lg:px-40 max-[768px]:px-10">
      <div className='z-50'>
        <Link to="/">
          <img className="w-20 h-20 object-cover  cursor-pointer" src="/src/images/logo.png" alt="" />

        </Link>
      </div>
      <div className="flex gap-10">
        <ul
          className={`${
            isMenuOpen
              ? 'min-[768px]:visible fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.9)] flex flex-col justify-center items-center'
              : 'hidden'
          } md:flex flex-row w-full h-full gap-10`}
        >
          <li className=' active:text-purple-600'>
            <Link to="/News">News</Link>
          </li>
          <li className=' active:text-purple-600'>
            <Link to="/Sports">Sports</Link>
          </li>
          <li className=' active:text-purple-600'>
            <Link to="/Business">Business</Link>
          </li>
          <li className=' active:text-purple-600  '>
            <Link to="/Entertainment">Entertainment</Link>
          </li>
        </ul>
        <div className={`min-[768px]:hidden cursor-pointer z-50`} onClick={toggleMenu}>
          <Icon icon="fa:navicon" width="30" height="30" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
