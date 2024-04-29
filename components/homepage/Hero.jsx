import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover>
                <div className="w-full h-full bg-green-400"></div>
                <div className="w-full h-full bg-green-500"></div>
                <div className="w-full h-full bg-green-600"></div>
                <div className="w-full h-full bg-green-700"></div>
                <div className="w-full h-full bg-green-800"></div>
                <div className="w-full h-full bg-green-900"></div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero