import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px]">
        <Carousel pauseOnHover>
        <Ima src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <Ima src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <Ima src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <Ima src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <Ima src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
        </div>
    </>
  )
}

export default Hero