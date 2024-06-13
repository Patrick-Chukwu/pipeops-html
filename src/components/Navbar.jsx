import React, { useState } from 'react';

import logo from '/logo.svg';
import mobilelogo from '/caretrack.svg';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <nav className="bg-white fixed top-0 w-full z-30 p-4">
      <div className="flex-1 flex-wrap w-full flex justify-between items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-4">
          <div className="flex justify-between items-center  w-full">
            <div className="flex-shrink-0">
            <Link className='flex items-center gap-2 sm:gap-3 justify-center' to='/'><img className='size-8 sm:size-12' src={mobilelogo} alt="caretrackplus logo" /><p className="text-xl sm:text-3xl font-semibold text-primary">CareTrack<span className="text-secondary">+</span></p></Link>
            {/* <Link to='/'><img className='size-12 sm:hidden' src={mobilelogo} alt="caretrackplus logo" /></Link> */}

            </div>
            <div className="hidden text-xl font-normal text-silver  md:ml-6 md:flex md:space-x-8 md:justify-center md:items-center md:gap-4">
            <Link to='/services' className='hover:text-primary'>Services</Link>
        <Link to='/pricing' className='hover:text-primary'>Pricing</Link>
          <Link to='/blog' className='hover:text-primary'>Blog</Link>
         <Link to='/contact' className='hover:text-primary'>Contact</Link>
            </div>
            <ul className="text-xl font-semibold hidden nav-links md:flex md:justify-center  md:items-center md:gap-4 text-white">
       <Link to='/login' className='w-42 max-w-42 text-xl font-semibold border border-secondary hover:border-primary hover:text-secondary text-ash py-2 px-12 rounded-sm lg:rounded-lg md:rounded-md xl:rounded-xl'> Login</Link>
       <Link to='/register' className='text-xl font-semibold text-center w-40 max-w-42 bg-secondary py-2 px-4 rounded-sm hover:bg-primary lg:rounded-lg md:rounded-md xl:rounded-xl'>Try for free</Link>
     </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary hover:bg-white focus:outline-none focus:bg-white focus:text-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="max-h-full px-1 pt-2 pb-60 space-y-1 sm:px-3 flex flex-col gap-2 text-xl font-normal text-silver">
          <Link onClick={closeMenu}
 to="/services" className="text-silver font-normal text-xl block px-3 py-2 rounded-md  hover:bg-gray-200">
            Services
          </Link>
          <Link onClick={closeMenu}
 to="/pricing" className="text-silver font-normal text-xl block px-3 py-2 rounded-md hover:bg-gray-200">
            Pricing
          </Link>
          <Link onClick={closeMenu}
to="/blog" className="text-silver font-normal text-xl block px-3 py-2 rounded-md hover:bg-gray-200">
            Blog
          </Link>
          <Link onClick={closeMenu}
 to="/contact" className="text-silver font-normal text-xl block px-3 py-2 rounded-md hover:bg-gray-200">
            Contact
          </Link>
          <Link to='/login' onClick={closeMenu}
 className='text-ash text-xl block py-2 px-12 w-40 rounded-md text-left font-medium border hover:border-primary hover:text-secondary  border-secondary'> Login</Link>
       <Link to='/register' onClick={closeMenu}
 className='bg-secondary text-white py-2 px-6 w-40 max-w-44 hover:bg-primary rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Try for free</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
