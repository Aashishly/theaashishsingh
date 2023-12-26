import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WorkinProgress = () => {
  return (
    <div className='relative w-full h-screen flex-col font-[Afacad] flex justify-center items-center'>
        <div  className=' '>
            <h1 className='uppercase text-9xl leading-[0.8] font-semibold'>Hello!</h1>
            <p className='text-[24px] text-slate-600 text-center'>Sorry. I'm doing some work on the site</p>
        </div>
        <div className='flex gap-12 text-[20px] mt-20'>
            <Link className='flex gap-4 items-center text-[#0077b5]'><FaLinkedinIn /> LinkedIn</Link>
            <Link className='flex gap-4 items-center text-[#c8232c]'><FaGithub /> Github</Link>
            <Link className='flex gap-4 items-center text-[#1DA1F2]'><FaXTwitter /> XTwitter</Link>
        </div>
        <p className='uppercase absolute bottom-8 text-lg'>We'll be back shortly</p>
    </div>
  )
}

export default WorkinProgress