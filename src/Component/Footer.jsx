import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-gray-900 mt-7">
  <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid row-gap-10 lg:grid-cols-6">
      <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
        <div>
          <p className="font-medium tracking-wide text-gray-300">Quicklinks</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/News" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">News</a>
            </li>
            <li>
              <a href="/Sports" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Sports</a>
            </li>
            <li>
              <a href="/Business" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Business</a>
            </li>
            <li>
              <a href="/Entertainment" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Entertainment</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium tracking-wide text-gray-300">Contacts</p>
          <ul className="mt-2 space-y-2">
            <li>
              <p className="text-gray-500">Phone No:<a href="tel:850-123-5021" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"> 850-123-5021</a></p>
            </li>
            <li>
                <p className="text-gray-500">E-mail:<a href="mailto:example@gmail.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"> example@gmail.com</a></p>
            </li>
            <li>
            <p className="text-gray-500">Address:<a href="https://maps.app.goo.gl/xMzxeS7bvosvekHv6" target='_blank' className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" rel="noreferrer"> 190-50100, Kakamega</a></p>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium tracking-wide text-gray-300">Social Media</p>
          {/* <span class="text-base font-bold tracking-wide text-gray-900">Social</span> */}
      <div className="flex items-center mt-1 space-x-3">
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <Link to='/admin' target='_blank'>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
            ></path>
          </svg></Link>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
        <Link to='/admin' target='_blank'>
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg></Link>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
        <Link to='/admin' target='_blank'>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path>
          </svg></Link>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Connect with us through our Social media accounts.
      </p>
        </div>
      </div>
      <div className="mx-10 md:max-w-md lg:col-span-2">
        <span className="text-base font-medium tracking-wide text-gray-300">Message Us</span>
        <form className="block mt-4 " method="post" action="mailto:example@gmail.com" encType="multipart/form-data">
        {/* <form > */}
            <input
            placeholder="Name"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <input
            placeholder="Email"
            required=""
            type="email"
            className="flex-grow w-full mt-5 h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <input
            placeholder="Message"
            required=""
            type="textarea"
            rows="10" cols="30"
            className="flex-grow w-full mt-5 h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <input 
            type="submit" 
            value="Send Email" 
            className='mt-5 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 border-2 cursor-pointer hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'/> 
          {/* <button
            type="submit"
            class="mt-5 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:border-2 bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none "
          >
            Send Message
          </button> */}
        </form>
        {/* <p class="mt-4 text-sm text-gray-500">
          Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
        </p> */}
      </div>
    </div>
  </div>
</div>
  )
}
