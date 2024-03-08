import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';
import { FaLocationArrow, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <div className='grid gap-4 justify-center text-black justify-items-start'>
        <div className='flex gap-2 md:justify-center items-center'>
          <Link href={`geo:27.7172,85.3240`}> <div className=' flex justify-center items-center w-10 h-10  bg-white rounded-full text-primary'><FaLocationArrow /></div></Link>
          <label className='text-xl'>Banasthali, Kathmandu, Nepal</label>
        </div>
        <div className='flex gap-2 md:justify-center items-center'>
          <Link href={`tel:9851008523`}> <div className=' flex justify-center items-center w-10 h-10 bg-white rounded-full text-primary'><FaPhone /></div></Link>
          <label className='text-xl'>9851008523</label>
        </div>
        <div className='flex gap-2 justify-between md:justify-center items-center'>
          <Link href={`mailto:info@codewave.com.np?subject=Subscribe&body=Write us a message`}><div className='flex justify-center items-center w-10 h-10  bg-white rounded-full text-primary'><MdOutlineEmail /></div></Link>
          <label className='text-xl'>info@codewave.com.np</label>
        </div>
      </div>

    </>
  )
}
