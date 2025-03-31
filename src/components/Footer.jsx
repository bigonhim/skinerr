import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <section className='relative bg-secondary overflow-hidden'>
    <div className='absolute ml-[39px] h-screen xl:w-px w-0px bg-primary'></div>
    <div className='absolute right-10 h-screen xl:w-px w-0px bg-primary'></div>
  <div className='flex lg:flex-row flex-wrap items-center lg:gap-63 tracking-widest lg:p-30 p-7 ml-2 gap-13  lg:justify-start'>
        <div className='flex gap-4 flex-col'>
            <h1 className='text-primary font-primary text-[20px] font-extrabold'>Skinner</h1>
            <div className='flex gap-5'>
                <FaFacebook  size={24} color="#ffffff" />
                <FaInstagram size={24} color="#ffffff" />
                <FaTwitter size={24} color="#ffffff" />
            </div>
        </div>
        <div className='flex gap-2 flex-col'>
            <h1 className='text-primary font-primary text-[20px] font-extrabold' >About us</h1>
            <p className='text-primary font-secondary text-[10px] font-extralight'>Our Expertise</p>
            <p className='text-primary font-secondary text-[10px] font-extralight'>Awards & Honors</p>
            <p className='text-primary font-secondary text-[10px] font-extralight'>News & Blog</p>
        </div>
        <div className='flex gap-2 flex-col'>
            <h1 className='text-primary font-primary text-[20px] font-extrabold'>Special Link</h1>
            <p className='text-primary font-secondary text-[10px] font-extralight'>Gift Certficates</p>
            <p className='text-primary font-secondary text-[10px] font-extralight'>Special Offers</p>
            <p className='text-primary font-secondary text-[10px] font-extralight'>FAQs</p>

        </div>
        <div className='flex gap-2 flex-col'>
            <h1 className='text-primary font-primary text-[20px] font-extrabold'>Contact</h1>
            <p className='text-primary font-secondary text-[10px] font-extralight'>+254756089087</p>
            <p className='text-primary font-secondary text-[10px] font-extralight'>skinerrsafi@gmail.com</p>
        </div>
        
    </div>
    <p className=' absolute font-secondary  bg-tertiary w-full '>&#169;Skinerr All rights reserved</p>
    </section>
  )
}

export default Footer
