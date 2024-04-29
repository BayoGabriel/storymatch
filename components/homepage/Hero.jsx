import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import one from '@/public/images/one.png'
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
                <div className="w-full h-full bg-green-700 rounded-none text-white">
                    <div className="flex items-center justify-center flex-col gap-8">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                    <div className="max-lg:hidden flex gap-4 mt-8">
                        <Image src={one} alt='one' className=''/>
                        <Image src={two} alt='two'/>
                        <Image src={three} alt='one'/>
                        <Image src={four} alt='four'/>
                        <Image src={five} alt='five'/>
                        <Image src={six} alt='six'/>
                    </div>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero