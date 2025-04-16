import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

function Calltoaction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#CDEA68] w-full h-screen flex flex-col items-center justify-center border-t border-[#9fb650] overflow-hidden px-4 sm:px-6">
      {/* Hero Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="flex flex-col items-center justify-center text-center uppercase leading-[0.9] mb-6"
      >
        {['ready', 'to start', 'the project?'].map((line, index) => (
          <motion.h1
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[9vw] xl:text-[8vw]"
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-zinc-900 rounded-full text-white text-sm sm:text-base uppercase"
        >
          Start the Project
        </motion.button>
      </motion.div>

      {/* MODAL: Popup Form with Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl w-[90%] max-w-md p-6 relative shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-xl text-zinc-500 hover:text-zinc-800"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold mb-4">Start Your Project</h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border px-4 py-2 rounded focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border px-4 py-2 rounded focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="border px-4 py-2 rounded focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-zinc-800 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Calltoaction;
