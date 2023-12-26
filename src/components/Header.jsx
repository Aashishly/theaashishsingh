import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");

    const Navshow = () => {

        if(mobileMenu){
            setMobileMenu(false)
            setShow('-top-[100%]')
        }
        else{
            setShow('top-[0%]')
            setMobileMenu(true)
        }
    }


  return (
    <div className="transition-all duration-500 ease-linear">
    <div className="py-4 px-[4vw] flex justify-between items-center fixed top-0 left-0 right-0 text-white z-50">
        <a href='/' className='text-5xl font-custom'>AKS</a>
        {!mobileMenu ? <HiMenuAlt4 className="z-100" size='50px' onClick={Navshow}/> : <IoClose className="z-[100]" size='50px' onClick={Navshow}/> }
    </div>
    {mobileMenu && <Menu show={show}/>}
    </div>
  )
}

export default Header