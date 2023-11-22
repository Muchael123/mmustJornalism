import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = ({category,image_id}) => {
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    // const [Category, image_id] = useParams();

    console.log("category is",category)
    console.log("image id is",image_id)

    const handleSubmit = async () => {
        // const id = 123; // Replace with your actual category ID
        const url =  ` https://mmust-jowa.onrender.com/api/v1/user/comment/${category}/${image_id}`;
        // content = document.getElementById('textarea').value;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content, is_anonymous: isAnonymous }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Comment submitted successfully:', responseData);
                setIsAnonymous(true)
                setContent('')
                console.log(responsedata)
                console.log("comment is",content)
               } else {
                console.error('Error submitting comment:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='px-10 min-[768px]:px-24'>
          <h1 className='w-1/3 uppercase font-bold text-xl  my-5 '>LEAVE A COMMENT</h1>
            <label>
                {/* Comment: */}
                <textarea id='textarea' name='textarea' rows="4" cols="50" placeholder='Your Comment' className='pl-2  resize-none border-2' value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <br />
            
            <button onClick={handleSubmit} className=' my-2 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 text-white text-lg cursor-pointer hover:opacity-70 uppercase'>Submit</button>
        </div>
    );
};

export default Comments;
