import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full'>
                <div className="w-full h-full  rounded-none p-6 bg-red-200 text-black">
                    <div className="flex w-full h-full items-center justify-center bg-yellow-300 flex-col gap-8 mt-10">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                  
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero