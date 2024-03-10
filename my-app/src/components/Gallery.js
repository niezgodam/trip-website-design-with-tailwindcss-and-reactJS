import React from 'react'

const Gallery = () => {
  return (
    <div className="max-w-[1140px] w-full mx-auto">
      <h1 className="flex justify-center p-4 text-2xl font-bold">Gallery</h1>
        <div className="grid grid-flow-row md:gap-4 md:grid-cols-3">
          
            <div className="grid grid-rows-1 mb-2 md:col-span-2 md:mb-0">
                <img className="object-cover w-full h-full max-h-[200px] md:max-h-none" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D" alt='beach house' />    
            </div>        
    
            <div className="grid gap-2 md:grid-rows-2 md:grid-cols-2">

              <div>
                <img className="object-cover w-full h-full max-h-[200px] md:max-h-fit" src="https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZSUyMG9jZWFufGVufDB8fDB8fHww" alt='palms on beach'/>
              </div>
              <div>
                <img className="object-cover w-full h-full max-h-[200px] md:max-h-fit" src="https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwcmVzb3J0JTIwb2NlYW58ZW58MHx8MHx8fDA%3D" alt='palms on beach'/>
              </div>
              <div>
                <img className="object-cover w-full h-full max-h-[200px] md:max-h-fit" src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D" alt='palms on beach'/>
              </div>
              <div>
                <img className="object-cover w-full h-full max-h-[200px] md:max-h-fit" src="https://images.unsplash.com/photo-1544473244-f6895e69ad8b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob2xpZGF5fGVufDB8fDB8fHww" alt='palms on beach'/>
              </div>
                
            </div>


            
        </div>
    </div>
  )
}

export default Gallery;