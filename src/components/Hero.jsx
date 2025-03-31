import React, {useState,useEffect} from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const Hero = () => {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an image loading delay (e.g., fetching from API)
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className='bg-secondary min-h-[calc(100vh-110px)] overflow-hidden'> 
        <div className='max-w-4xl flex items-center flex-col-reverse md:flex-row p-7'>
            <div className='flex  flex-col gap-6 mt-28 z-20 max-w-[350px] md:max-w-2xl lg:ml-25'>
                  <h1 className='text-tertiary font-secondary text-[15px] font-medium'>Introducing Skiner</h1>
                  <h2 className="text-primary font-primary md:text-[60px] sm:text-[40px] text-[30px] font-bold leading-tight">
                    <span className="block">Beauty Has a Purpose,</span>
                    <span className="block">and purpose is you</span>
                    </h2>
                    <p
                     className='font-secondary xs:text-[15px] text-[14px] text-primary font-extralightlight tracking-widest'
                    >
                    Made with natural ingredients,with modern<br></br>
                    technology,Skiner has long been trusted by many<br></br>
                    women around the world.</p>
                    <div className='flex gap-20 text-primary font-secondary text-[10px] mt-8 mb-8'>
                       <button className='bg-tertiary px-7 py-3 rounded-full'> Start Shopping</button>
                       <button className='flex justify-center items-center gap-2'><img className='h-7 w-7' src='images/playCircle.png' alt='play-button' />Watch Video</button>
                    </div>
            </div>
            
            {isLoading ?(
                 <Skeleton className=" h-[450px] w-[350px] md:h-[500px] md:w-[580px] flex justify-center items-center lg:absolute lg:bottom-0 lg:right-0 " />
                
            ):(   
              <div className='flex shrink-2'>
              <img className={`h-30 w-30 absolute lg:bottom-50 lg:right-130 z-500 bottom-[-65px] ${isSmallScreen ? " left-1/2 transform -translate-x-1/2 -translate-y-1/2 " : 'bottom-[-65px]'}`}src='images/certifiedLabel.png' alt='verified-cosmetics'/>
              <div className='bg-gray-300  h-[450px] w-[350px] md:h-[500px] md:w-[580px] flex justify-center items-center lg:absolute lg:bottom-0 lg:right-0 '> 
                  <img  className='object-cover w-full h-full' src='images/heroImage.jpg' alt='hero-image' />
              </div>
              </div>
            )   
            }

        </div>

      
    </div>
  )
}

export default Hero
