import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className='flex items-center justify-between px-4 py-4 max-h-[60px]'>
        
        <div className="flex ">
          <BsChatSquareDots className="text-indigo-700" size={30}/>
          <span className="ml-3 font-bold text-indigo-700">WEEKAWAY</span>
        </div>        
        
        <div className="flex">
          <div className="items-center hidden md:mx-8 md:flex">
            <BiTimeFive className="mr-4 text-indigo-700" size={30}/>
            <p className="text-sm font-bold text-indigo-700 md:whitespace-nowrap">9AM -9PM</p>
          </div>
          
          <div className="items-center hidden md:mx-8 md:flex">
            <FaPhone className="mr-4 text-indigo-700" size={20}/>
            <p className="font-bold text-indigo-700 md:whitespace-nowrap">1-888-645-7652</p>
          </div>
          
          <button className="hidden text-white md:flex smfont-semibold bg-gradient-to-r from-indigo-700 to-indigo-300 md:p-2">Get a Free Quote</button>
          

        </div>

    </div>
  )
}

export default TopNav;