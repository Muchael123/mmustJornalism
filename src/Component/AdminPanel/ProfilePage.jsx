
import React from 'react';

const ProfilePage = () => {
  return (
<>
    
   
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-fit md:px-24 lg:px-20 lg:py-12 p-8 rounded shadow-xl sm:p-16'>
       <div>
       <h3 className='text-xl font-bold text-gray-500 border-b pb-4 mt-0'>Account Information</h3>
        <div className='mt-4 py-3 '>
          <p className='text-gray-400'>Profile picture change</p> 
          <div className='flex items-center gap-4'>
          <img class="w-20 h-20 rounded-full p-2 " src="/src/images/testpic.jpg" alt="" width="384" height="512"/>
           <div className='gap-6 flex text-sm'>
           <button className='bg-slate-200 w-fit px-4 py-1.5 rounded-sm  '>
        <p>Change </p>
        </button>
        <button className='bg-slate-200 w-fit px-4 py-1.5 rounded-sm  '>
        <p>Remove </p>
        </button>
             </div>
          </div>
        </div>
       </div>
      {/* // personal information */}
     <h3 className='text-xl font-bold text-gray-500 border-b pb-4 mt-0'>Personal Information</h3>
      <div className='text-xl gap-4 grid mt-5 grid-cols-2'>
      
      <div className=''>
      <label htmlFor="Fname" className="block text-sm font-medium leading-6 text-gray-900">
        First Name
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolut inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="text"
          name="Name"
          id="Fname"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="first name"
        />
     
      </div>
    </div>
    
    <div className=''>
      <label htmlFor="Lname" className="block text-sm font-medium leading-6 text-gray-900">
        Last Name
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="text"
          name="Name"
          id="Lname"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="last name"
        />
     
      </div>
    </div>
    
    <div className=''>
      <label htmlFor="Lname" className="block text-sm font-medium leading-6 text-gray-900">
Gender      </label>
<div className=" gap-4 py-2 mt-0 flex items-center">
                
                <div className="flex items-center gap-x-3">
                  <input
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Male" className=" text-sm font-medium leading-6 text-gray-900">
Male                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Female" className=" text-sm font-medium leading-6 text-gray-900">
                   Female </label>
                </div>
              </div>
    </div>

    <div className=''>
      <label htmlFor="Date" className="block text-sm font-medium leading-6 text-gray-900">
Date of Birth      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="Date"
          name="Name"
          id="Date"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="first name"
        />
     
      </div>
    </div>
    <div className=''>
      <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
          Email      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="email"
          name="Name"
          id="email"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="example@gmail.com"
        />
     
      </div>
    </div><div className=''>
      <label htmlFor="Contact" className="block text-sm font-medium leading-6 text-gray-900">
Contact      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="text"
          name="Name"
          id="Contact"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder=" "
        />
     
      </div>
    </div><div className=''>
      <label htmlFor="Opassword" className="block text-sm font-medium leading-6 text-gray-900">
Old Password      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="text"
          name="Name"
          id="Opassword"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="**********"
        />
     
      </div>
    </div><div className=''>
      <label htmlFor="Npassword" className="block text-sm font-medium leading-6 text-gray-900">
      New Password      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
        </div>
        <input
          type="text"
          name="Name"
          id="Npassword"
          className="block w-fit rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="**********"
        />
     
      </div>
    </div> <div className='flex gap-2 text-sm'>
    <button className='bg-slate-200 w-fit px-4 rounded-sm  '>
        <p>Discard Changes</p>
        </button> 
     
     <button className='bg-slate-200 w-fit px-4 py-1.5 rounded-sm  '>
        <p>Save </p>
        </button>

      </div>
      </div>
    </div>

    </>
  );
}

export default ProfilePage;
