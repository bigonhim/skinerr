import React from 'react'

const About = () => {
  return (
    <section className=' relative bg-secondary min-h-[640px] overflow-hidden '>
        <div className='absolute left-0 w-screen xl:h-px h-0px mt-10  bg-gray-400 '></div>
        <div className='absolute ml-[39px] h-screen xl:w-px w-0px bg-gray-400'></div>
        <div className='absolute left-0 w-screen xl:h-px h-0px mt-150 bg-gray-400'></div>
        <div className='absolute right-10 h-screen xl:w-px w-0px bg-gray-400'></div>

            <div className=' relative mt-10 lg:mx-30 mx-0 flex lg:flex-row flex-col lg:gap-30 gap-30 items-center justify-start lg:p-0 p-5'>
                    <div className='bg-gray-300 max-w-[440px] lg:h-[560px] h-[450px]'>
                    <img  className='object-cover w-full h-full' src='images/heroImage.jpg' alt='hero-image' />
                    <img className={`h-30 w-30 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-[440px] lg:bottom-[180px]`}src='images/certifiedLabel.png' alt='verified-cosmetics'/>
                    </div>
                    <div className='flex flex-col gap-4 lg:p-20'>
                        <h3 className='text-tertiary font-secondary text-[15px]'>About us</h3>
                        <h2 className="text-primary font-primary md:text-[50px] sm:text-[40px] text-[30px] font-bold leading-tight">
                            <span className="block">History is who we are,</span>
                            <span className="block">and why we are like this</span>
                        </h2>
                        <p className='font-primary text-primary font-extralight tracking-wide'>History is a collection of events that happened
                        and live to tell a <br/>deep story about everything that ever happenned.
                        </p>
                        <div className='flex gap-20 text-primary font-secondary text-[10px] mt-8 mb-8'>
                            <button className='bg-tertiary px-7 py-3 rounded-full'> Start Shopping</button>
                            <button className='flex justify-center items-center gap-2'><img className='h-7 w-7' src='images/playCircle.png' alt='play-button' />Watch More</button>
                        </div>
                    </div>
            
            </div>
    </section>
  )
}

export default About
