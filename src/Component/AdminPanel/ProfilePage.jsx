
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const ProfilePage = () => {
  const [img, setImg] = useState();

  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    contact: '',
    image: '',
    first_name: '',
    last_name: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      const base64Image = selectedImage.split(',')[1];
      setProfileData(prevData => ({ ...prevData, image_id: base64Image }));
    }
  }, [selectedImage]);
  


    const fetchData = async () => {
      try {
        const response = await fetch(' https://mmust-jowa.onrender.com/api/v1/admin/get/profile', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
         // Assuming the server returns the URL of the uploaded image
         const responseData = await response.json();
         
         
         // Assuming the server returns the URL of the uploaded image
         const imageUrl = responseData.image_path;
         
         setImg(imageUrl);
     
         // Set initial profile data
         setProfileData(responseData);
     
         return responseData;
       
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
    fetchData().then((data) => {
      setProfileData(data); // Set initial profile data
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setImagePreview(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  

  const handleSaveClick = async () => {
    try {
     
  
      const requestBody = {
        contact: profileData.contact,
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        image: selectedImage, // You might need to adjust this depending on how the server expects the image data
      };
  
      const response = await fetch('https://mmust-jowa.onrender.com/api/v1/admin/update/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update profile data');
      }
  
      const updatedData = await fetchData();
      
      localStorage.setItem("User",profileData.first_name);
      setProfileData(updatedData);
      setIsEditing(false);
      setImagePreview(null);
    
    } catch (error) {
      console.error(error);
    }
  };
  
  


  return (
    <div className='   min-[640px]:ml-0 '>


      <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:w-fit md:px-24  absolute mt-5 lg:py-16 w-full py-4    rounded shadow-xl '>
        <div>
          <h3 className='text-xl font-bold text-gray-500 border-b pb-4 mt-0'>Account Information</h3>
          <div className='mt-4 py-3  '>
            <p className='text-gray-400'>Profile picture change</p>
            <div className='flex items-center gap-4'>
              <img className="w-20 z-0 h-20 rounded-full p-1 object-cover " src={imagePreview || profileData.image_id || `/src/images/profile.png`} alt="" width="384" height="512" />
              <div className='gap-6 flex text-sm'>
                <label className="bg-slate-200 w-fit px-4 py-1.5 rounded-sm cursor-pointer z-0 ">
                  <p>Edit</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                </label>

              </div>
            </div>
          </div>
        </div>
        {/* // personal information */}
        <div className='flex w-full justify-between px-2 items-center border-b'>
          <h3 className='text-xl font-bold text-gray-500  pb-4 mt-0'>Personal Information</h3>
          <Icon icon="circum:edit" width="30" height="30" color='gray-700' className=' cursor-pointer' onClick={handleEditClick} />        </div>

        <div className='text-xl gap-4 grid mt-5 min-[400px]:grid-cols-2 grid-cols-1 '>

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
                onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })}
                className={` w-fit rounded-md border-0 py-1.5 pl-2  text-sm  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-2 ${isEditing ? '' : 'cursor-not-allowed'}`}
                placeholder={profileData.first_name}
                disabled={isEditing ? false : true}
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
                onChange={(e) => setProfileData({ ...profileData, last_name: e.target.value })}
                className={` w-fit rounded-md border-0 py-1.5 pl-2 text-sm  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-2 ${isEditing ? '' : 'cursor-not-allowed'}`}
                placeholder={profileData.last_name}
                disabled={isEditing ? false : true}
              />

            </div>
          </div>
          <div className=' '>

            <label htmlFor="Contact" className=" mx-0  text-sm font-medium leading-6 text-gray-900">
              Contact      </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start ">
              </div>
              <input
                type="text"
                name="Name"
                id="Contact"
                onChange={(e) => setProfileData({ ...profileData, contact: e.target.value })}
                placeholder={profileData.contact}
                disabled={isEditing ? false : true}
                className={` w-fit rounded-md border-0 py-1.5 pl-2 text-sm  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-2 ${isEditing ? '' : 'cursor-not-allowed'}`}
              />

            </div>
          </div>
          <div className='flex gap-2 text-sm h-full items-end'>
            <button className='bg-slate-200 h-8 w-fit px-4 rounded-sm  '>
              Discard
            </button>

            <button className='bg-slate-200 h-8 w-fit px-4  rounded-sm' onClick={handleSaveClick}>
              Save 
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
