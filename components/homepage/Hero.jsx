import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px]">
            <Carousel pauseOnHover>
                <div className="w-full"></div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero