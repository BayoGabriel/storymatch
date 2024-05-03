import { FcGoogle } from 'react-icons/fc'
import { IoMailOpenOutline } from "react-icons/io5";

import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'
import five from '@/public/images/kitchen.jpg'
import four from '@/public/images/hands-holding-puzzle-business-problem-solving-concept.jpg'
import two from '@/public/images/authentic-small-youthful-marketing-agency.jpg'
import three from '@/public/images/group-friends-posing-with-glasses-wine-cake-outdoor-party_23-2149366221.jpg'


const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='w-full h-full rounded-none  text-black'>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center justify-center p-[30px]">
                <div className="flex w-full h-full  flex-col gap-8 ">
                    <h1 className="text-[50px]">
                    Instant Connection, Endless Conversations
                    </h1>
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                    <div className="flex gap-4 items-center">
                        <button className='text-white bg-darker py-2 px-6 rounded-md flex items-center justify-center '><span className='p-2 bg-white rounded-full'><FcGoogle/></span> <span>Join with google</span></button>
                        <button className='text-white bg-ddarker py-2 px-6 rounded-md flex items-center justify-center '><IoMailOpenOutline/> <span>Join with Email</span></button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 grid-rows-2">
                    <div className="rounded-full">
                        {/* <Image src={two} alt='wi' className='w-full rounded-full h-full'/> */}
                    </div>
                    <div className="">
                        <Image src={three} alt='wi' className='w-full h-full'/>
                    </div>
                    <div className="">
                        <Image src={five} alt='wi' className='w-full h-full'/>
                    </div>
                    <div className="">
                        {/* <Image src={four} alt='wi' className='w-full h-full'/> */}
                    </div>
                </div>
                </div>
                
            </Carousel>
        </div>
    </>
  )
}

export default Hero