import React from 'react'
import navLogo from './Images/logo.png'

export default function Header() {
    return (
      <div>
          <div className="navbar h-fit w-full py-3 bg-white text-center flex items-center justify-around px-1 shadow-xl">
              {/* logo */}
              <div className='logo flex items-center gap-1'>
              <img src={navLogo} alt="" className='md:h-12 md:w-14 h-10 w-12 bg-cover'/>
              <h3 className='font-semibold text-2xl md:text-3xl'>username.com</h3>
              </div>
              {/* Navbar-items */}
              <ul className='hidden md:flex  items-center justify-evenly w-2/5 font-semibold text-sm'>
                 <li className='hover:cursor-pointer hover:text-orange-400'>Home</li>
                 <li className='hover:cursor-pointer hover:text-orange-400'>About</li>
                 <li className='hover:cursor-pointer hover:text-orange-400'>Services</li>
                 <li className='hover:cursor-pointer hover:text-orange-400'>Page</li>
                 <li className='hover:cursor-pointer hover:text-orange-400'>Contact</li>
              </ul>
              {/* button */}
              <button className='w-fit h-fit px-6 py-2 bg-orange-500 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold text-xs md:text-sm rounded-md hover:bg-black'>Login</button>
          </div>
      </div>
    )
  };
  
  