import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'
import one from '@/public/images/diego-ph-fIq0tET6llw-unsplash.jpg'
const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh] relative">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full p-8'>
                <div className="w-full h-full  rounded-none py-6 bg-red-200 text-black">
                    <div className="flex w-full h-full items-center justify-center z-40 flex-col gap-8 absolute top-10 ">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                    <div className="w-full grid grid-cols-3 grid-rows-3">
                        <div className="idan">
                            <Image src={one} alt='on' className='w-full h-full'/>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero