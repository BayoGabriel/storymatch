import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[89vh]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover className='h-full'>
                <div className="w-full h-full bg-green-700 rounded-none text-white">
                    <div className="">
                        <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                        <h1 className="text-[50px]">
                        Instant Connection, Endless Conversations
                        </h1>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-8 h-full bg-green-800 rounded-none text-white">
                    <p>Dive Straight into the Deep End of Chats That Speak to You.</p>
                    <h1 className='text-[50px]'>No Icebreakers Needed</h1>                   
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-8 h-full bg-green-800 rounded-none text-white">
                    <p>Get connected to the conversations that excite you.</p>
                    <h1 className='text-[50px]'>Your interest, instantly</h1>                   
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero