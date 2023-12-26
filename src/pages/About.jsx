import React from 'react'
import '../styles/about.scss'
import Wrapper from '../components/Wrapper'
import { Link } from 'react-router-dom'
import AshishImage from '../assets/Aashishly.jpg'
import { IoMdArrowForward } from "react-icons/io";
import { ParallaxBanner } from "react-scroll-parallax";
import resumeFile from '../assets/AashishResume.pdf';

const About = () => {
  return (
    <div id='about' className='w-full pb-[10rem] bg-[#1c1c1cff]'>
        <div className="marquee w-full overflow-hidden">
          <span className="uppercase text-white font-bold semi text-[180px] font-custom flex whitespace-nowrap">-About me-About me-About me</span>
        </div>
        <Wrapper className='wrapper px-[6vw] mt-36'>
          <div className='md:flex justify-between items-center'>
            <div className='floating order-2 md:mt-1  md:w-[30%] bg-cover relative bg-center -rotate-[6deg]'>
              <img className='md:-rotate-6' src={AshishImage} alt="Aashish-Image" />
            </div>
            <div className="aboutpara order-1 md:w-1/2 text-white text-xl ">
              <p className=' uppercase pt-16'>Hello! I'm Ashish Singh, a dedicated student pursuing a Bachelor of Computer Application at Mahatma Gandhi Kashi Vidyapith. Alongside my studies, I'm a Freelance <span className='underline'>Web Designer</span>  and <span className='underline'>MERN Developer</span>, passionate about creating visually stunning and functional websites for clients.</p>
              <div className="social-link my-10 flex flex-wrap gap-4">
                <span><Link to='https://www.linkedin.com/in/aashishly/' target='_blank'>LinkedIn</Link></span>
                <span><Link to='https://www.twitter.com/Aashishly?s=09' target='_blank'>XTwitter</Link></span>
                <span><Link to='https://www.github.com/aashishly' target='_blank'>Github</Link></span>
                <span><Link to='https://www.instagram.com/here.aashish' target='_blank'>Instagram</Link></span>
              </div>
              <Link to='/about'>
              <div className='aboutpage-hover w-[80%] md:w-1/2  bg-white flex justify-between items-center overflow-hidden rounded-lg p-2'>
                <div className='relative w-full overflow-hidden text-black'>
                  <div className='about uppercase px-6 text-sm'>About Me</div>
                  <div className='about-hover uppercase absolute -bottom-8 px-6 text-sm'>About Me</div>
                </div>
                <div className='relative'>
                  <div className='w-[40px] relative h-[40px] bg-[#1c1c1cff] text-white grid content-center justify-center'>
                    <p><IoMdArrowForward className='icon-link' size='20px'/></p>
                    <p><IoMdArrowForward className='icon-link-hover absolute' size='20px'/></p>
                  </div>
                </div>
              </div>
              </Link>
              <div className='resumeLink text-2xl md:text-xl text-white mt-8 uppercase'><Link className='resumeLinkBtn' to={resumeFile} target="_blank" download='resume' rel="noreferrer">Download Resume</Link></div>
            </div>
          </div>
        </Wrapper>
    </div>
  )
}

export default About