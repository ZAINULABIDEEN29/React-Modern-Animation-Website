import { motion } from 'framer-motion'
import React from 'react'


function Cards() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".4"  className="w-full h-screen bg-zinc-900 flex gap-5 px-32 items-center ">
      <div className="cardcontainer h-[50vh] w-1/2 ">
    <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
        <button className="absolute px-3 py-1 text-sm tracking-tighter  rounded-full border-2 left-10 bottom-7">&copy;2019-2022</button>
    </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
      <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
      <button className="absolute px-3 py-1  rounded-full border-2 left-10 bottom-7 text-sm tracking-tighter">RATING 5.0 ON CLUTCH</button>
      </div>
      <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center over">
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
      <button className="absolute px-3 py-1 text-sm tracking-tighter  rounded-full border-2 left-10 bottom-7">BUSINESS BOOTCAMP </button>
      </div>
        </div>
    </div>
  )
}

export default Cards
