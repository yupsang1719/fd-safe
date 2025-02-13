import { motion } from 'framer-motion'
import React from 'react'

export const Marquee = () => {

  return (
    <div className='w-full py-20 bg-[#004D43] text-white rounded-tl-4xl rounded-tr-4xl'>
        <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[15vw] leading-none font-["Neue Montreal"] uppercase -pt-[20vw] mb-3 font-bold tracking-widest'>Wearefdsafe</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[15vw] leading-none font-["Neue Montreal"] uppercase -pt-[20vw] mb-3 font-bold tracking-widest'>Wearefdsafe</motion.h1>
            
        </div>
    </div>
  )
}
