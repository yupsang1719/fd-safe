import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen px-6 py-20 md:px-20 bg-white text-black"
    >
      <h1 className="text-5xl font-bold mb-6">About FD Safe Doors</h1>
      <p className="text-lg leading-relaxed mb-4">
        With over 40 years of experience, FD Safe Doors has grown from a local fire door installer to a trusted expert serving commercial and residential spaces across the region...
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Our values are rooted in quality, honesty, and dedication. We take pride in hiring skilled tradespeople and delivering fire safety with precision...
      </p>
      {/* Add more sections like Our Mission, Our Team, Certifications, etc. */}
    </motion.div>
  );
};

export default AboutUs;
