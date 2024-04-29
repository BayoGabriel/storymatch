import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full'>
                <div className="w-full h-full bg-green-700 rounded-none text-white">
                    <div className="flex items-center justify-center flex-col gap-8">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                    <div className=""></div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero