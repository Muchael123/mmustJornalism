
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function RegistrationForm() {
 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm: '',
  },);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://mmust-jowa.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers:
        {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Registration was successful, you can redirect the user to the login page
        // Replace 'login-page' with the actual URL of your login page
       
        window.location.href = '/Admin';
        
      } else if (response.status === 400) {
        // Handle errors (e.g., display an error message to the user)
        console.error('Registration failed');
      }  else if (response.status === 200) {
        // Handle errors (e.g., display an error message to the user)
        console.error('Registration failed');
      

      } else {
        // Handle other status codes as needed
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
<div className='w-screen flex items-center justify-center h-screen mx-auto '>
    <form className='w-96  h-2/3 flex flex-col  justify-center gap-3 px-5 shadow-lg rounded-lg ' onSubmit={handleSubmit}>
      <div>
        <label className='text-gray-500' htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className='bg-transparent  border-b-2 outline-none px-2  w-full '
          autoComplete='false'
          autoFocus
        />
      </div>
      <div>
        <label className='text-gray-500' htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className='bg-transparent  border-b-2 outline-none   px-2  w-full'
          autoComplete='false'

        />
      </div>
      <div>
        <label className='text-gray-500' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='bg-transparent  border-b-2 outline-none   px-2  w-full'
          autoComplete='false'

        />
      </div>
      <div>
        <label className='text-gray-500'htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className='bg-transparent  border-b-2 outline-none   px-2  w-full'
          autoComplete='false'

        />
      </div>
      <div>
        <label className='text-gray-500' htmlFor="confirm">Confirm Password:</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          className='bg-transparent  border-b-2 outline-none   px-2 w-full'
          autoComplete='false'
        />
      </div>
      <button className='bg-gradient-to-r  from-indigo-500 via-purple-700 to-pink-500 p-2 rounded-3xl text-white mt-2' type="submit">Register</button>
      <div className='flex w-full justify-between px-2 text-xs'>
        <p>Already have an account?</p>
        <Link to='/login'><p className='text-blue-700 hover:underline cursor-pointer duration-200'>Sign In</p></Link>
      </div>
    </form>
    </div>
  );
}

export default RegistrationForm;
// /* eslint-disable react/no-unescaped-entities */




