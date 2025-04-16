import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full px-4 sm:px-8 md:px-16 pt-6 pb-12"
    >
      {/* Animated Headings */}
      <div className="textstructure mt-25 sm:mt-24 md:mt-30 flex flex-col gap-4">
        {["Precision", "Performance", "Protection."].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="masker"
          >
            <div className="flex items-end">
              {index === 1 && (
                <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                className="origin-left mr-2 w-24 sm:w-32 md:w-36 h-10 sm:h-12 md:h-14 bg-orange-500 rounded-md"
                />
              )}
              <h1 className="uppercase text-[10vw] sm:text-[6vw] md:text-[4vw] leading-none font-bold text-zinc-900">
                {item}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Description & Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 sm:mt-16 border-t border-zinc-300 pt-6 sm:pt-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Description */}
          <div className="text-center md:text-left space-y-3">
            {[
              {
                text:
                  "For large properties with multiple fire doors, including factories and hospitals",
                color: "text-orange-500",
              },
              {
                text:
                  "We offer installation, maintenance, and expert advice for fire doors and fire dampers",
                color: "text-zinc-900",
              },
            ].map((item, index) => (
              <p
                key={index}
                className={`text-sm sm:text-base font-light leading-snug ${item.color}`}
              >
                {item.text}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 text-sm sm:text-base border border-zinc-300 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Start the Project
            </motion.button>

            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 hover:bg-orange-500 hover:text-white transition cursor-pointer"
            >
              <FaArrowUpLong className="rotate-45" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;
