import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import one from '@/public/images/bgh.jpg'
import two from '@/public/images/two.png'
import three from '@/public/images/three.png'
import four from '@/public/images/four.png'
import five from '@/public/images/five.png'
import six from '@/public/images/six.png'
const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full'>
                <div className="w-full h-full bg-dlightest rounded-none text-black">
                    <div className="flex items-center justify-center flex-col gap-8 mt-10">
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