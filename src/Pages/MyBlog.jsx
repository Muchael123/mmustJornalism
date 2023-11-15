import React from 'react'

const CreateBlog = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-9'>
     {/* create new blog */}
     <form action="" className='mt-2 col-span-2' >
    <div className=' bg-slate-200 px-4 py-1 mb-10 md:mx-auto sm:text-left  md:mb-12 '>
   {/* posttitle  */}
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block mb-2 text-sm bold font-semibold text-gray-400">
                PostTitle
              </label>
              <div className="mt-1">
                <div className="flex shadow-sm  sm:max-w-md">
                  <input
                    type="text"
                    name="posttile"
                    id="posttitle"
                    autoComplete="posttitle"
                    className="block flex-1 border-0 rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
            </div>
    </div>
{/* post type  */}

{/* description */}
<div className="">
              <label htmlFor="about" className="block mb-2 mt-5 text-base text-gray-500">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="resize-none block w-full h-fixed rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
    {/* Post category */}
    <div className="sm:col-span-3">
              <label htmlFor="country" className="block mb-2 mt-5 text-base text-gray-500">
                Post Category
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>News</option>
                  <option>Sports</option>
                  <option>Business</option>
                  <option>Entertainment</option>

                </select>
              </div>
            </div>

         {/* file uploads    */}
      
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block mb-2 mt-5 text-base text-gray-500">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>  

  
     {/* save or cancel */}

    <div className="mt-6 flex items-center  justify-start gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
     <div className='w-3/4'>
      <div className='flex flex-col mb-7 py-10'>
      <button           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>SAVE</button>
      <button>SAVE</button>
      </div>
      <div className='flex flex-col'>
      <button>SAVE</button>
      <button>SAVE</button>
      </div>
     </div>

    </div>
    </>
  )
}

export default CreateBlog