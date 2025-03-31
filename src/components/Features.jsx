import React from 'react'
import { skinIcon,sucking } from '../assets';


const Features = () => {
  return (
    <div className='bg-primary text-secondary px-10'>
       <div className='md:max-w-9xl lg:border-x-1 border-secondary md:p-20 pt-10' >
           <div className='flex gap-1 flex-col leading-tight '>
             <p className='text-tertiary font-secondary text-[15px]'>Why choose us</p>
             <h2 className='text-secondary font-primary  md:text-[60px] sm:text-[40px] text-[30px]'>What we provide </h2>
           </div>
          <div className='flex md:gap-30 gap-15 my-20 flex-wrap'>
            <div className='flex flex-col gap-3 leading-tight'>
                <img className='bg-tertiary2 p-3 mb-3 rounded-full h-15 w-15' src={skinIcon} alt='skin-icon'/> 
                <p className='text-secondary font-medium text-[23px]  font-primary'>Gentle on Skin</p>
                <p className='font-secondary text-[13px] text-secondary font-light max-w-[200px]'>Non-irritating, suitable for all skin types.</p>
            </div>
            <div className='flex flex-col gap-3 leading-tight'>
                <img className='bg-tertiary2 mb-3 p-3 rounded-full h-15 w-15' src={sucking} alt='skin-icon'/> 
                <p className='text-secondary text-[23px] font-primary'>Enhanced Absorption</p>
                <p className='font-secondary text-[13px] text-secondary font-light max-w-[200px]'>Skin absorbs products more quickly, efficiently.</p>
            </div>
            <div className='flex flex-col gap-3 leading-tight'>
                <img className='bg-tertiary2 mb-3 p-3 rounded-full h-15 w-15' src={skinIcon} alt='skin-icon'/> 
                <p className='text-secondary text-[23px] font-primary'>Deep Penetration</p>
                <p className='font-secondary text-[13px] text-secondary font-light max-w-[200px]'>Nano particles reach deeper layers effectively.</p>
            </div>
            <div className='flex flex-col gap-3 leading-tight'>
                <img className='bg-tertiary2 mb-3 p-3 rounded-full h-15 w-15' src={skinIcon} alt='skin-icon'/> 
                <p className='text-secondary text-[23px] font-primary'>Long-lasting Effects</p>
                <p className='font-secondary text-[13px] text-secondary font-light max-w-[200px]'>Nano technology ensures prolonged skin benefits.</p>
            </div>
          </div>

       </div>
      
    </div>
  )
}

export default Features
