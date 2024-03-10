import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import { BiLogoFacebook,BiLogoTwitter, BiLogoInstagram, BiLogoGmail } from 'react-icons/bi';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  
  const [nav,setNav] = useState(true);
 
  const handleClick = () => {
    setNav(!nav);
    if(nav){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "scroll";
    }
  } 

  
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">      

      <div className={nav ? "flex justify-between w-full mx-4 sm:mx-8" : "hidden justify-between w-full"}>


        <ul className="hidden md:inline-flex">
          <li className="mr-8 font-bold">Home</li>
          <li className="mr-8 font-bold">Gallery</li>
          <li className="mr-8 font-bold">Deals</li>
          <li className="mr-8 font-bold">Contact</li>
        </ul>

        <AiOutlineMenu className="inline mx-2 cursor-pointer md:hidden" size={25} onClick={handleClick}/>
        
        
        <ul className="inline-flex">
          <BiLogoFacebook  size={25} className="mx-2 "/>
          <BiLogoTwitter size={25} className="mx-2 "/>
          <BiLogoInstagram size={25} className="mx-2 "/>
          <BiLogoGmail size={25} className="mx-2 "/>
        </ul>
      </div>
      
      <div className={nav ? "bg-black/80 w-full  flex-col justify-center items-center text-center hidden" : "h-[100vh] bg-black/80 w-full flex flex-col items-center text-center"}>
        <div className="flex w-full mb-[200px] pt-2">
          <AiOutlineMenu className="inline mx-2 cursor-pointer md:hidden" size={25} onClick={handleClick}/>  
        </div>
        <div>
          <ul className="block">
            <li className="px-12 py-4 text-2xl font-bold border-b-2 border-gray-400">Home</li>
            <li className="px-12 py-4 text-2xl font-bold border-b-2 border-gray-400">Gallery</li>
            <li className="px-12 py-4 text-2xl font-bold border-b-2 border-gray-400">Deals</li>
            <li className="px-12 py-4 text-2xl font-bold">Contact</li>
          </ul>
        </div>
      </div>

      
    </div>





  )
}

export default Navbar;