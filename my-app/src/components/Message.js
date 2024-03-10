import React from 'react'

const Message = () => {
  return (
    <div className="max-w-[1140px] w-full mx-auto">

        <div className="py-12 mt-[100px] justify-center block text-center">
            <h1 className="text-2xl font-bold text-gray-600">Send us a message</h1>
            <h6 className="text-xl ">We're standing by!</h6>
        </div>

        <div className="grid md:gap-2 md:grid-cols-2 md:mb-0">

            <div className="">
                <img className="object-cover w-full max-h-[500px]" src="https://images.unsplash.com/photo-1504587883873-5b3537de4dd0?auto=format&fit=crop&q=80&w=1288&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nice resort" />
            </div>
            
            <div className="mx-2 mt-2 md:w-full md:mt-0">        
                <form>
                    <div className="flex justify-between pb-4">
                        <input className="w-full py-2 pl-2 mr-2 border border-gray-400 focus-visible:outline-none" type="text" placeholder="First"></input>
                        <input className="w-full py-2 pl-2 ml-2 border border-gray-400 focus-visible:outline-none" type="text" placeholder="Last"></input>
                    </div>
                    <div className="flex justify-between pb-4">
                        <input className="w-full py-2 pl-2 mr-2 border border-gray-400 focus-visible:outline-none" type="phone" placeholder="Email"></input>
                        <input className="w-full py-2 pl-2 ml-2 border border-gray-400 focus-visible:outline-none" type="email" placeholder="Phone"></input>
                    </div>
                    <div className="flex justify-between pb-6">
                        <input className="w-full py-2 pl-2 border border-gray-400 focus-visible:outline-none" type="phone" placeholder="Address"></input>
                    </div>
                    <div>
                        <textarea className='w-full pb-1 pl-2 border border-gray-400 focus-visible:outline-none' rows="11"> 
                            
                        </textarea>
                    </div>
                    <div className="mb-2 text-center md:mb-0">
                        <button className="w-full py-2 text-center bg-gradient-to-r from-indigo-700 to-indigo-300">Submit</button>
                    </div>               
                </form>   
            </div>
        </div>   
    </div>
  )
}

export default Message;