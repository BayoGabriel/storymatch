import Image from 'next/image'
import { Carousel } from 'flowbite-react'

const Hero = () => {
  return (
    <>
        <div className="w-full h-[500px]">
            <Carousel leftControl=" " rightControl=" " indicators={false} pauseOnHover>
                <div className="w-full h-full bg-green-700 text-white">
                    <h1 className="">
                    Instant Connection, Endless Conversations
                    </h1>
                    <p>From Anecdotes to Anomalies, Find Your Tribe and Talk Freely.</p>
                </div>
                <div className="w-full h-full bg-green-800 text-white">
                    <h1>No Icebreakers Needed</h1>
                    <p>Dive Straight into the Deep End of Chats That Speak to You.</p>
                </div>
                <div className="w-full h-full bg-green-900 text-white">
                    <h1>Helloe worled</h1>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Hero