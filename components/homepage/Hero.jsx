import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import '@/public/styles/hero.css'
import one from '@/public/images/one.png'
const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full rounded-none'>
                <div className="w-full h-full idan rounded-none bg-red-200 text-black">
                    <div className="flex w-full h-full items-center justify-center  flex-col gap-8">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                    <div className="w-full h-full grid grid-cols-4 grid-rows-4 ">
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                        <Image src={one} alt='odcvnjl' />
                    </div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero