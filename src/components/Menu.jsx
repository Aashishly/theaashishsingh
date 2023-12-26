import React from 'react';
import { Link } from 'react-router-dom';


const Menu = ({show}) => {
  return (
    <div className="transition-all duration-500 ease-in-out">
            <div className={`overflow-hidden font-custom bg-black w-full fixed z-20 inset-0 gap-8 ${show}`}>
              <ul className='text-[80px] md:text-[120px] mt-24 md:mt-16 w-full uppercase text-center md:flex flex-col md:items-center leading-[1.08] text-[#FFB534]'>
                <li><Link to='/building' className='hover:text-white transition-all ease-in-out'>About</Link></li>
                <li><Link to='/building' className='hover:text-white transition-all ease-in-out'>Project</Link></li>
                <li><Link to='/building' className='hover:text-white transition-all ease-in-out'>Blog</Link></li>
                <li><Link to='/building' className='hover:text-white transition-all ease-in-out'>Download Resume</Link></li>
                <li><Link to='/building' className='hover:text-white transition-all ease-in-out'>Contact</Link></li>
              </ul>
            </div>
    </div>
  )
}

export default Menu