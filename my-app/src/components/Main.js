import React, { useState } from 'react';

const Main = () => {
  
  return (
    <div className="w-full h-[90vh]">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1585287706103-3f108c1141db?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='shore' />

            <div className="max-w-[1140px] m-auto ">
                <div className=" absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full text-white px-4">
                    <h1 className="text-4xl font-bold text-white">Find Your Special Trip With Weekaway</h1>
                    <p className="text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
    </div>
  )
}

export default Main;