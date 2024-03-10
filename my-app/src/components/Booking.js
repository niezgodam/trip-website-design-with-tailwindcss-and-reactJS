import React from 'react';
import { MdOutlineDateRange } from 'react-icons/md';

const Booking2 = () => {
  return (
    <div className="w-full p-4 font-bold">
        <div className="max-w-[1140px] w-full mx-auto grid md:grid-flow-col sm:grid-flow-row">
            
            <div className="block">
                <p className="block w-full p-2">Destinations</p>

                
                <select className="relative w-full p-4 border border-black rounded">
                    <option value="antigua">Antigua</option>
                    <option value="Virgin Gorda">Virgin Gorda</option>
                    <option value="Nevis">Nevis</option>
                </select>
                
                

                
            </div>    
            
            <div className="sm:grid sm:grid-flow-col">
                <div className="block">
                    <p className="p-2">Check-in</p>
                    <div className="flex items-center justify-between p-4">
                        <p>mm/dd/yyyy</p>
                        <MdOutlineDateRange size={25}/>
                    </div>
                </div> 
                <div>
                    <p className="block p-2">Check-out</p>
                    <div className="flex items-center justify-between w-full p-4">
                        <p>mm/dd/yyyy</p>
                        <MdOutlineDateRange size={25}/>
                    </div>
                </div> 
            </div>
            
            <div>
                <p className="block p-2">Search</p>
                <button className="w-full p-2 text-white md:p-4 bg-gradient-to-r from-indigo-700 to-indigo-300 hover:border-2 hover:border-indigo-700 hover:rounded">Rates & Availabieties</button>
            </div> 

    
        </div>
    </div>
  )
}

export default Booking2;    