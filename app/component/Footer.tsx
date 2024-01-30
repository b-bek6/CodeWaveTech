import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';
import { FaLocationArrow, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <div className='grid md:grid-flow-col  grid-flow-row md:grid-cols-3 gap-4 justify-center text-white'>
        <div className='flex gap-2 md:justify-center items-center'>
          <Link href={`mailto:info@codewave.com.np?subject=Subscribe&body=Write us a message`}><div className='flex justify-center items-center w-10 h-10  bg-white rounded-full text-primary'><MdOutlineEmail /></div></Link>
          <label>info@codewave.com.np</label>
        </div>
        <div className='flex gap-2 md:justify-center items-center'>
          <Link href={`geo:27.7172,85.3240`}> <div className=' flex justify-center items-center w-10 h-10  bg-white rounded-full text-primary'><FaLocationArrow /></div></Link>
          <label>Kathmandu, Nepal</label>
        </div>
        <div className='flex gap-2 md:justify-center items-center'>
          <Link href={`tel:9851008523`}> <div className=' flex justify-center items-center w-10 h-10 bg-white rounded-full text-primary'><FaPhone /></div></Link>
          <label>9851008523</label>
        </div>
      </div>

    </>
  )
}
