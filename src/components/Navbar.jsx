import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu, close } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-secondary text-primary border-b-1 border-primary font-secondary p-10 overflow-hidden "> 
      <div className="flex justify-between max-w-7xl mx-auto items-center">

          <div className="font-bold text-[20px] cursor-pointer">
            <h1>Skinner</h1>
          </div>

          <div>
            <ul className='hidden lg:flex items-center gap-14 font-extralight text-[16px] cursor-pointer'>
              <li className='font-bold'>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="md:hidden flex justify-end items-center z-1000">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[30px] h-[30px]
                  object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
          </div>
          
          <div className='gap-6 cursor-pointer hidden lg:flex'>
            <img  className='h-7 w-7' src="images/shoppingBag.png" alt="cart-icon" />
            <img  className='h-7 w-7'  src="images/accountCircle.png" alt="user-account" />

          </div>

          {/* <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-tertiary bg-opacity-50 backdrop-blur-lg absolute justify-center z-10 w-full top-0 `}
            >
            <ul className='flex flex-col items-center gap-14 font-extralight text-[16px] cursor-pointer'>
                <li className='font-bold'>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            </div> */}
      
      </div>


    </nav>
  )
}

export default Navbar
