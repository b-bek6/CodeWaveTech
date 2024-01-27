'use client'
import React, { useState } from 'react'

export default function About() {
  const [hidden, setHidden] = useState(true)
  return (
    <>
    <button onClick={()=>{
      setHidden(!hidden)
    }} className="bg-white border w-fit text-secondary py-2 px-7 rounded-full ">More Info</button>
    <div className={`h-[100vh] w-screen text-white fixed bg-secondary transition right-0 top-0 md:w-[500px] ease-in-out delay-150 ${hidden?"translate-x-[500px]":""} `}>
      <div className='relative'>
        <button onClick={()=>{
      setHidden(!hidden)
    }}  className='absolute left-5 top-5 scale-150'> <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg></button>
        <div className='grid gap-8'>
          <h2 className='text-4xl font-bold mt-10 '>About Us</h2>
          <p className='font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae explicabo sunt debitis, voluptatum error impedit eius in quos exercitationem. Omnis, fugiat explicabo. Perspiciatis beatae iste consequatur est quasi molestias voluptas?</p>
        </div>
        <div className='text-4xl font-bold mt-20 '>Contact Us</div>
        <div className='grid grid-flow-row mx-20 mt-10'>
        <input className='border p-4 text-sm rounded-md my-4' type="text" placeholder='Full Name' />
        <input className='border p-4 text-sm rounded-md my-4' type="text" placeholder='Email Address' />
        <input className='border p-4 text-sm rounded-md my-4' type="text" placeholder='Message' />
        </div>
        <div className='mt-20'>
        <button onClick={()=>{
      setHidden(!hidden)
    }} className="bg-white border w-fit text-secondary py-2 px-7  rounded-full ">Send Message</button>
        </div>
      </div>
    </div>
    </>
  )
}
