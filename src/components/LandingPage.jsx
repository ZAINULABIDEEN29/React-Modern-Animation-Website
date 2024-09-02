import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textStructure mt-[160px] px-20 '>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex  '>
                                {index === 1 && (
                                    <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className='w-[8vw] mr-[0.5vw] h-[4.8vw] rounded-md mt-8 relative -top-[0.9vw] overflow-hidden'>
                                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1645655892437-c5149679d223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllcyUyMDNkfGVufDB8fDB8fHww" alt="" />
                                    </motion.div>
                                )}
                                <h1 className="flex items-center  text-[6.6vw] leading-[7vw] tracking-tighter uppercase font-['Founders_Grotesk_X-Condensed '] font-bold ">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-[70px] flex justify-between items-center py-5 px-20">
                {[
                    "For public and private companies",
                    "from the first pitch to IPO",
                ].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-sm  uppercase text-md rounded-full'>Start the Project</div>
                    <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaLongArrowAltUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
