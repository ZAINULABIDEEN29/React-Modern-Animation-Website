import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4.5vw] leading-[3.5vw] tracking-tight ">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full flex gap-5  border-t-[1px] mt-20 pt-10 border-[#a9be61]">
        <div className="w-1/2 ">
          <h1 className='text-7xl'>Our approach:</h1>
          <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase'>Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#9eb453] rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1714195646879-d31243782c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
