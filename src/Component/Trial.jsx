import React, { useState, useEffect } from 'react';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    body: '',
    image_id: '',
    category: 'News', // Default category
  });

  const [filePreview, setFilePreview] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status (you may need to modify this based on your authentication logic)
    const userIsAuthenticated = checkUserAuthentication(); // Replace with your authentication logic
    setIsAuthenticated(userIsAuthenticated);
  }, []);

  const checkUserAuthentication = () => {
    // Replace this with your authentication logic, e.g., check if the user is logged in or has the required role.
    // You may use your authentication context, Redux, or another state management solution for this.
    const accessToken = localStorage.getItem('accessToken');
    return accessToken !== null; // Example: Check if the access token is present
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the user is authenticated before submitting the blog
    if (!isAuthenticated) {
      console.error('User not authenticated. Unable to create a blog.');
      return;
    }

    try {
      const response = await fetch('https://mmust-jowa.onrender.com/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // For file input
    if (type === 'file' && files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFilePreview(e.target.result);
      };

      reader.readAsDataURL(files[0]);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!isAuthenticated) {
    return <p>You do not have permission to create a blog. Please log in.</p>;
  }
}