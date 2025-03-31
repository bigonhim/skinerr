import React from 'react';
// import { Carousel } from "@/components/ui/Carousel"



const ProductsHome = () => {
  // const slidesData = [
  //   {
  //     title: "Explore the Future",
  //     button: "Learn More",
  //     src: "https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?ga=GA1.1.167981307.1695795947&semt=ais_hybrid"
  //   },
  //   {
  //     title: "Innovation at Your Fingertips",
  //     button: "Get Started",
  //     src: "https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?ga=GA1.1.167981307.1695795947&semt=ais_hybrid"
  //   },
  //   {
  //     title: "Transform Your Ideas",
  //     button: "Join Now",
  //     src: "https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?ga=GA1.1.167981307.1695795947&semt=ais_hybrid"
  //   }
  // ];
  return (
    <div>
      <section className='bg-primary min-h-[640px] overflow-hidden '>
        <div className='relative'>
          <div className='absolute left-0 w-screen xl:h-px h-0px mt-10  bg-secondary '></div>
          <div className='absolute ml-[39px] h-screen xl:w-px w-0px bg-secondary'></div>
          <div className='absolute left-0 w-screen xl:h-px h-0px mt-150 bg-secondary'></div>
          <div className='absolute right-10 h-screen xl:w-px w-0px bg-secondary'></div>
        </div>
        <div className='my-[50px]'>
        {/* <Carousel slides={slidesData} /> */}
        </div>
    </section>
    </div>
  )
}

export default ProductsHome
