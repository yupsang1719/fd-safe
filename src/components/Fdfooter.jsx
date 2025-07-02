import React from 'react';
import { motion } from 'framer-motion';

export const Fdfooter = () => {
  const formAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-zinc-200 px-6 py-12 sm:px-10 md:px-20 lg:py-20 flex flex-col gap-16 lg:flex-row"
    >
      {/* Left: Contact Us Form */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12">
        <div className="text-center lg:text-left">
          <h1 className="text-[10vw] sm:text-[9vw] md:text-[6vw] uppercase leading-none font-bold">
            Contact-
          </h1>
          <h1 className="text-[10vw] sm:text-[9vw] md:text-[6vw] uppercase leading-none font-bold mb-6">
            Us
          </h1>
        </div>

        <form className="flex flex-col gap-6">
          {['Your Name', 'Your Email', 'Your Message'].map((placeholder, i) =>
            placeholder === 'Your Message' ? (
              <motion.textarea
                key={i}
                rows={4}
                placeholder={placeholder}
                custom={i}
                variants={formAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full px-5 py-4 bg-white/70 backdrop-blur-md rounded-md border border-zinc-300 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 resize-none transition-all"
              />
            ) : (
              <motion.input
                key={i}
                type={placeholder.includes('Email') ? 'email' : 'text'}
                placeholder={placeholder}
                custom={i}
                variants={formAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full px-5 py-4 bg-white/70 backdrop-blur-md rounded-md border border-zinc-300 text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
              />
            )
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#18181b", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 text-white px-8 py-4 rounded-full shadow-md hover:bg-zinc-800 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Right: Info and Links */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <h1 className="text-[12vw] sm:text-[8vw] md:text-[5vw] uppercase leading-none font-bold">
          Presentation
        </h1>

        <div className="flex flex-col sm:flex-row gap-10 text-sm sm:text-base font-light">
          <div className="w-full sm:w-1/2">
            <h3 className="font-semibold text-lg mb-2">S.</h3>
            <div className="flex flex-col gap-2">
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Facebook</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Instagram</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Twitter</motion.a>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h3 className="font-semibold text-lg mb-2">M.</h3>
            <div className="flex flex-col gap-2">
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Services</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Featured</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">About</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Insights</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Contact</motion.a>
            </div>
          </div>
        </div>

        <div className="font-light">
          <h3 className="font-semibold text-lg mb-2">L.</h3>
          <div className="flex flex-col gap-2">
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">4 Andover Way</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">Aldershot</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:underline transition-all">GU11 3RJ</motion.a>
          </div>
        </div>

        <div className="font-light">
          <h3 className="font-semibold text-lg mb-2">E.</h3>
          <div className="flex flex-col gap-2">
            <motion.a whileHover={{ scale: 1.05 }} href="mailto:mike@fddoors.co.uk" className="hover:underline transition-all">
              mike@fddoors.co.uk
            </motion.a>
          </div>
        </div>

        <div className="pt-10 text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} FD Safe Doors Ltd. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};
