
import {motion} from 'framer-motion'
import React, { useState } from "react";
import Logo from "../atoms/Logo";

import {
  GithubIcon,
  LinkedInIcon,
} from "../atoms/Icons";

import { 
  CustomLink, 
  CustomMobileLink 
} from "../atoms/Links"



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10
    lg:px-16 relative z-1 md:px-12 sm:px-8
    ">
      
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark  block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark  block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark  block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
            <CustomLink className="mr-4" href="/" title="Home" />
            <CustomLink className="mx-4" href="/About" title="About" />
            <CustomLink className="mx-4" href="/Projects" title="Projects" />
            <CustomLink className="ml-4" href="/Research" title="Research" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2 ">
            <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/farhanbinfaisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <LinkedInIcon />
            </motion.a>
            <motion.a className='w-6 ml-3' href="https://github.com/Farhan-Faisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <GithubIcon />
            </motion.a>
        </nav>
      </div>
    {
      isOpen ? 

      <motion.div className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        py-32 bg-light/75 rounded-lg z-50 backdrop-blur-md
        "
        initial={{scale:0,x:"-50%",y:"-50%", opacity:0}}
        animate={{scale:1,opacity:1}}
        >
        <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink toggle={handleClick} className="mr-4 lg:m-0 lg:my-2" href="/" title="Home" />
            <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/About" title="About" />
            <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/Projects" title="Projects" />
            <CustomMobileLink toggle={handleClick} className="ml-4 lg:m-0 lg:my-2" href="/Research" title="Research" />
        </nav>

        <nav className="flex items-center justify-center  mt-2">
            <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/farhanbinfaisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <LinkedInIcon />
            </motion.a>
            <motion.a className='w-6 ml-3' href="https://github.com/Farhan-Faisal" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                <GithubIcon />
            </motion.a>
        </nav>
      </motion.div>

      : null
    }

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;