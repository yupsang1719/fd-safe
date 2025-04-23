import { motion } from 'framer-motion';
import React from 'react';

const AboutUsDetails = () => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen px-6 py-20 md:px-20 bg-white text-black"
    >
      <h1 className="text-5xl font-bold mb-6">About FD Safe Doors</h1>
      <p className="text-lg leading-relaxed">
        With over 40 years of experience, FD Safe Doors has grown from a local fire door installer...
      </p>
    </motion.div>
  );
};

export default AboutUsDetails;
