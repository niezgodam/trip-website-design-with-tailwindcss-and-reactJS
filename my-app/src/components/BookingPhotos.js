import React from 'react';

const Booking = () => {
  return (
    <div className="w-full -mt-[100px]">
      <div className="w-full md:grid md:grid-cols-3 md:gap-6 md:max-w-[1140px] mx-auto max-w-[375px]"> 
        <div className="col-span-1">
          <img className="object-cover w-full border-4 h-[250px]" src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D" alt='beautiful resort'/>
        </div>
        <div className="col-span-1 ">
          <img className="object-cover w-full border-4 h-[250px]" src="https://images.unsplash.com/photo-1559599746-8823b38544c6?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlc3xlbnwwfHwwfHx8MA%3D%3D" alt='beautiful resort'/>
        </div>
        <div className="col-span-1 ">
          <img className="object-cover w-full border-4 h-[250px]" src="https://images.unsplash.com/photo-1682687979601-082a1295b78f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZGl2aW5nfGVufDB8fDB8fHww" alt='beautiful resort'/>
        </div>
      </div>
    </div>
  )
}

export default Booking;