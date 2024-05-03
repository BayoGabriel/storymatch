import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'
import five from '@/public/images/kitchen.jpg'
import four from '@/public/images/hands-holding-puzzle-business-problem-solving-concept.jpg'
import two from '@/public/images/authentic-small-youthful-marketing-agency.jpg'
import three from '@/public/images/'


const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='w-full h-full rounded-none  text-white'>
                <div className="grid grid-cols-2 max-lg:grid-cols-1">
                <div className="flex w-full h-full items-center justify-center bg-red-300 flex-col gap-8 ">
                    <p>Just 3 sections, a hero, a how it works, and a footer</p>
                    <h1 className="text-[50px]">
                    Check Out Pinterest homepage
                    </h1>
                    <button className='text-white bg-darker py-2 px-6 rounded-md'>Join Now</button>
                </div>
                <div className="grid grid-cols-2 grid-rows-2">

                </div>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1">
                <div className="flex w-full h-full items-center justify-center bg-red-300 flex-col gap-8 ">
                    <h1 className="text-[50px]">
                    Instant Connection, Endless Conversations
                    </h1>
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <button className='text-white bg-darker py-2 px-6 rounded-md'>Join Now</button>
                </div>
                <div className="flex"></div>
                </div>
                
                <div className="flex w-full h-full items-center justify-center bg-blue-300 flex-col gap-8 ">
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <h1 className="text-[50px]">
                    See if you can find a hero section you find captivating.
                    </h1>
                    <button className='text-white bg-darker py-2 px-6 rounded-md'>Join Now</button>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero