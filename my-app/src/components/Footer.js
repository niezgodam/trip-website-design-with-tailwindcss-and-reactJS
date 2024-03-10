import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="mx-auto max-w-[1140px] w-full mt-[100px] py-12 border-t-2 border-gray-500">
      <div className="flex justify-center text-4xl">
        <BsChatSquareDots className="text-indigo-700" size={30}/>
        <span className="ml-3 font-bold text-indigo-700">WEEKAWAY</span>
      </div>        
    </div>
  )
}

export default Footer;