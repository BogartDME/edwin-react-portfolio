import React, { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <>
        {!isOpen ?
            (
                <button>
                    
                </button>

            ) :
            (
        
        <div className="top-0 right-0 fixed bg-blue-500 w-[26vw] h-full p-5">
            <h2 className="text-2xl text-white">this is the sidebar</h2>
        </div>
            )
        }       
        </>
    )
}