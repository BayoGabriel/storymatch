import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='w-full h-full idan rounded-none  text-black'>
                <div className="w-full h-full idan">
                <div className="flex w-full h-full items-center justify-center bg-yellow-300 flex-col gap-8 ">
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <h1 className="text-[50px]">
                    Instant Connection, Endless Conversations
                    </h1>
                </div>
                </div>
                <div className="flex idan w-full h-full items-center justify-center bg-red-300 flex-col gap-8 ">
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <h1 className="text-[50px]">
                    Carousel 2
                    </h1>
                </div>
                <div className="flex idan w-full h-full items-center justify-center bg-blue-300 flex-col gap-8 ">
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <h1 className="text-[50px]">
                    Carousel 3
                    </h1>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero