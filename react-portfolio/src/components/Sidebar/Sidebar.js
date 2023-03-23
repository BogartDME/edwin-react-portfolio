import React, { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <>
        {!isOpen ?
            (<button className="fixed  z-30 flex items-center cursor-pointer left-5 top-6" onClick={() => setIsOpen(!isOpen)}>
                
                    <svg
                        fill="#2563EB"
                        viewBox="0 0 100 80"
                        width="40"
                        height="40"
                        >
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg> 
            </button>
            ) :
            (
            <button className="text-xl text-white fixed top-4 left-4 z-10"
                onClick={() => setIsOpen(!isOpen)}>
                    x
            </button>        
        
            )
        }       
        <div className={`top-0 left-0 fixed bg-blue-500 w-[26vw] h-full p-5  ${isOpen ? "-translate-x-0 " : "-translate-x-full"} ease-in-out duration-700 text-2xl text-white p-4 flex-col flex items-center justify-center space-y-16 `}>
            <p className="">About</p>
            <p>Projects</p>
            <p>Contact</p>
            
        </div>
        </>
    )
}