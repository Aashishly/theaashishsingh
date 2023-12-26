import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../styles/footer.css'


const Footer = () => {
  return (
      <div id='contact' className='w-full h-screen pt-24 px-[4vw] bg-[#ebebebff] text-[#2d2e25ff]'>
        <div className='font-[Afacad]'>
          <span className='text-xl text-black'>Next Page</span>
          <div className='flex'>
            <Link to='/project' className='projectPage text-7xl leading-1 relative'><h5>PROJECTS</h5></Link>
            <span className='text-black text-xl'>02</span>
          </div>
        </div>
        <div className='w-full flex flex-col mt-16 md:mt-24 md:justify-center md:items-center'>
          <h1 className='text-[100px] lg:text-[160px] md:mb-16 mb-8 leading-[1] font-thinCustom'>LET'S WORK TOGETHER</h1>
          <p className='contInfo flex gap-3 md:justify-between items-center'>
            <Link to='/contact' className='text-4xl md:text-3xl  font-[Afacad]'>Contact</Link>
            <img src={arrow} alt="arrow" className='h-[20px]'/>
          </p>
        </div>
        <div className='w-full flex justify-between mt-24 md:mt-36 text-lg'>
          <div>&copy;Aashish Singh — 2024</div>
          <div className='flex gap-4'>
            <Link to='https://www.linkedin.com/in/aashishly/' target='blank'>
              <FaLinkedinIn />
            </Link>
            <Link to='https://twitter.com/Aashishly' target='blank'>
              <FaXTwitter />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer