import React from 'react';
import { motion } from 'framer-motion';
import CertificationSlider from '../components/CertificationSlider';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen pt-28 px-6 py-10 md:px-20 bg-[#9fb650] text-black scroll-smooth"
    >
      {/* Introduction */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-6">About FD Safe Doors</h1>
        <p className="text-lg leading-relaxed mb-4">
          With over 40 years of experience, FD Safe Doors has grown from a local fire door installer
          to a trusted expert serving commercial and residential spaces across the region.
        </p>
        <p className="text-lg leading-relaxed">
          Our values are rooted in quality, honesty, and dedication. We take pride in hiring skilled
          tradespeople and delivering fire safety with precision and care.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-20">
        <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is simple — to ensure that every building we touch is safer, stronger, and
          compliant with the highest fire protection standards. We are passionate about protecting
          lives through quality craftsmanship and dependable service.
        </p>
      </section>

      {/* Certifications */}
      <section>
        <CertificationSlider />
      </section>
    </motion.div>
  );
};

export default AboutUs;
