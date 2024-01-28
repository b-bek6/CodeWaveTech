import React from 'react'
import './SocialButtons.css';
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import Link from 'next/link';


export default function SocialButtons() {
  return (
    <div className='mt-[40px]   flex gap-8 justify-center align-middle'>
        <Link  href={`mailto:info@codewave.com.np?subject=Subscribe&body=Write us a message`}><div className='btns flex justify-center items-center w-10 h-10 bg-fourth text-primary'><BiLogoGmail/></div></Link>
        <Link href={`https://www.facebook.com`} target='_blank'> <div className='btns flex justify-center items-center w-10 h-10 bg-fourth text-primary'><RiFacebookFill/></div></Link>
        <Link href={`geo:27.7172,85.3240`}> <div className='btns flex justify-center items-center w-10 h-10 bg-fourth text-primary'><FaLocationArrow/></div></Link>
       <Link href={`tel:9800000000`}> <div className='btns flex justify-center items-center w-10 h-10 bg-fourth text-primary'><FaPhone/></div></Link>
    </div>
  )
}
