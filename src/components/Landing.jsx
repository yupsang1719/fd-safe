import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className='w-full pt-1'>
        <div className='textstructure mt-30 px-20 h-[15vw]'>
            {["website", "launching", "soon."].map((item,index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (<div className='mr-[0.5vw] w-[9vw] h-[5.6vw] rounded-md -top-[0.09vw] relative bg-orange-500'></div>)}
                            <h1 className='uppercase text-[8vw] leading-[6.8vw] font-["Neue Montreal"] tracking-tight font-bold text-zinc-900'>{item}</h1>
                        </div>
                    </div>
                );
            })}
        </div>
        {<div className='border-t-1 border-zinc-200 mt-32 flex justify-between items-center py-5 px-20'>
        {["For large properties with multiple fire doors, including factories and hospitals", "We offer design, installation, maintenance, and expert advice for fire exit doors"].map((item,idnex)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-200 font-light text-sm capitalize rounded-full'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-200'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                </span>
            </div>
        </div>
        </div>}

    </div>
  )
}

export default Landing