'use client'
import React, { useState } from 'react'

export default function Notify() {
    const [hidden, setHidden] = useState(true)
  return (
    <div>
        <button onClick={()=>{
    setHidden(!hidden)
}} className="bg-fourth shadow-2xl w-fit font-semibold text-sm text-white py-2 px-4 hover:scale-125 transition ease-in-out delay-150 rounded-3xl ">Notify Me About That!</button>


<div  className={`  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] ${hidden?"hidden":"flex"}`}>
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
            
            <button onClick={()=>{
                setHidden(true)
            }} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
            <div className="p-4 md:p-5 grid justify-center align-middle items-center text-center">
                <div className=' align-middle items-center grid justify-center text-center'>

                <svg height={100} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5" id="bell"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#ffac33" d="M0 0c0-11 5-10 5-15 0 0 0-2-2-2h-26c-2 0-2 2-2 2 0 5 5 4 5 15 0 5.522 4.478 10 10 10S0 5.522 0 0" transform="translate(29 24)"></path><path fill="#ffac33" d="M0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" transform="translate(22 34)"></path><path fill="#ffac33" d="M0 0a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4" transform="translate(19 1)"></path></g></svg>
                </div>
               
                <h3 className="mb-5 text-4xl font-bold text-gray-500 ">Get Notified When We are Online</h3>
                <input className='border p-4 text-sm rounded-md my-4' type="text" placeholder='enter your email' /> <span></span>
                <div className='flex gap-4 justify-center'>

                <button onClick={()=>
                setHidden(!hidden)
                } className="text-white  bg-secondary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Notify Me
                </button>
                <button onClick={()=>
                setHidden(!hidden)
                } className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>

                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
