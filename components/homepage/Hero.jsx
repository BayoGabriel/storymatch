import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="h-full w-full carousel carousel-vertical carousel-start rounded-box">
            <div className="carousel-item h-full w-full bg-red-400">
                
            </div> 
            <div className="carousel-item h-full w-full bg-green-400 ">
            </div> 
            <div className="carousel-item h-full w-full bg-blue-400 ">
            </div> 
            <div className="carousel-item h-full w-full bg-orange-400 ">
            </div> 
            <div className="carousel-item h-full w-full bg-red-900">
             </div> 
            <div className="carousel-item h-full w-full bg-yellow-400">
             </div> 
            <div className="carousel-item h-full w-full bg-blue-900 ">
            </div>
        </div>
    </>
  )
}

export default Hero