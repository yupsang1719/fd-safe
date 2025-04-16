import { motion } from 'framer-motion';
import React from 'react';

function Fdabout() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-10 sm:py-14 md:py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      
      {/* Intro Text */}
      <h1 className="text-[6vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.8vw] leading-tight tracking-tight">
        We are honest and friendly skilled tradesmen that talk only from 40+ years of experience.
      </h1>

      {/* Split Section */}
      <div className="w-full flex flex-col md:flex-row gap-8 border-t pt-10 mt-12 border-[#9fb650]">
        
        {/* Text + Button */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Our approach:
          </h1>

          <motion.button
            initial={{ backgroundColor: "#18181b", color: "#ffffff" }}
            whileHover={{ backgroundColor: "#ffffff", color: "#18181b" }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 sm:gap-4 uppercase px-6 py-3 sm:py-4 bg-zinc-900 rounded-full text-sm sm:text-base mt-6 sm:mt-8 md:mt-10"
          >
            Read More
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-2 h-2 bg-zinc-400 rounded-full"
            ></motion.div>
          </motion.button>
        </div>

        {/* Image or Placeholder */}
        <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-[55vh] lg:h-[70vh] bg-[#93a84d] rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Fdabout;
