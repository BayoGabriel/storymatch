import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover>
                <div className="w-full h-full flex items-center justify-center flex-col gap-8 bg-green-700 text-white">
                    <h1 className="text-[50px]">
                    Instant Connection, Endless Conversations
                    </h1>
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-8 h-full bg-green-800 text-white">
                    
                    <h1 className='text-[50px]'>No Icebreakers Needed</h1>
                    
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero