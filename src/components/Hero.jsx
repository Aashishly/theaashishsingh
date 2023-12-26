import React from 'react';
import HeroBG from '../assets/homeBg.mp4'


const Home = () => {
  return (
    <div className={`relative w-full h-screen`}>
      <div className='absolute w-full h-full bg-black overflow-hidden'>
      <video className='object-cover absolute mt-12 mix-blend-screen z-0 left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2' width="900px" height='900px' autoPlay muted loop>
          <source className='object-cover' src={HeroBG} type="video/mp4"/>
        </video>

        <div className='uppercase w-[80%] leading-[1] flex justify-center items-center h-screen text-white font-custom absolute left-1/2 -translate-x-1/2 mt-8 md:mt-8'>
          <div>
            <h1 className='text-[18vw] md:text-[15vw]'>full-stack dev.</h1>
            <div className='md:flex'>
              <h1 className='text-[32vw] md:text-[15vw]'>living in</h1>
              <div className='tracking-wide md:mt-20 md:ml-8'>
                <span className='md:leading-[0] text-[28vw] md:text-[6vw]'>varanasi</span>
                <span className='block md:leading-[1] text-[17vw] md:text-[6vw]'>uttar pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;