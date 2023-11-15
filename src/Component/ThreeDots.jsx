import React, {useState} from 'react'
import { CiMenuKebab } from 'react-icons/ci';
const ThreeDots = () => {
     const [isHovering, setIsHovering] = useState(false);

        const handleMouseOver = () => {
        setIsHovering(true);
        };

        const handleMouseOut = () => {
        setIsHovering(false);
        };
  return (
    <div className='absolute md:right-6 lg:right-12 right-3 mb-4 bottom-3'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
       <CiMenuKebab 
       
       />
          {isHovering && (
          <div>
            <h2 className='absolute text-gray-500 bg-gray-100 p-2 text-[8px] bottom-[100%] right-[100%]'>More options</h2>
          </div>
        )}
    </div>
  )
}

export default ThreeDots