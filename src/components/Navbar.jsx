import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logonb.png';
import hamburger from '../assets/menu.png';
import close from '../assets/close.png'

const Navitems = [
  {
    label: "Home",
    path: "/",
  }, {
    label: "Cars",
    path: "/cars",
  }, {
    label: "Login",
    path: "/auth",
  }, {
    label: "Checkout",
    path: "/checkout",
  },

]
const Navlinks = () => {
  return (
    <ul className='flex flex-col md:flex-row justify-between items-center gap-10 text-[#B1A7A6] '>
      {
        Navitems.map((item) => {
          return (
            <li key={item.label} className='font-montserrat sans-serif leading-normal hover:text-[#161A1D] ease-in-out cursor:pointer'>
              <Link to={item.path}>
                {item.label}

              </Link>
            </li>
          )

        })
      }
    </ul>
  )
};






const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleNav = () => setIsToggled(!isToggled);

  return (
    <header className='px-4 absolute z-10 bg-white pr-4'>
      <nav className='flex flex-row justify-between'>
        <div className='flex justify-center items-center mx-4 p-4'>
          <Link to='/'>
            <img src={logo} alt="logo" width={64} height={64} />

          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className='max-md:hidden md:flex'>
          <Navlinks />
        </div>
        {/* Mobile Navigation Toggle Button */}
        <div className='md:hidden flex justify-center items-center ml-4 pl-4'>
          <button
            type='button'
            onClick={toggleNav}
            aria-label="Toggle Navigation"
          >
            <img src={hamburger} alt="hamburger icon" width={32} height={32} />
          </button>
        </div>
        {/* Mobile Navigation */}
        {isToggled && (
          <div className='fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50 overflow-hidden '>
            <button
            type='button'
            onClick={toggleNav}
            aria-label="Toggle Navigation"
            className='mb-4 cursor-pointer'
          >
            <img src={close} alt="close icon" width={32} height={32} />
          </button>
            <Navlinks onClick={toggleNav} />
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;