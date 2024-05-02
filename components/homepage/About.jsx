import React from 'react'

const About = () => {
  return (
    <>
        <div className="p-4 w-full flex flex-col items-center justify-center">
            <h1 className="text-black mb-10">HOW IT WORKS </h1>
            <div className="w-full grid grid-cols-3 max-lg:grid-cols-1">
                <div className="p-[30px] bg-slate-300 text-black flex items-center justify-center flex-col">
                    <div className="p-3 rounded-full flex items-center justify-center tyext"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About