import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen pt-28 px-6 py-10 md:px-20 bg-white text-black"
    >
      {/* Introduction */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">About FD Safe Doors</h1>
        <p className="text-lg leading-relaxed mb-4">
          With over 40 years of experience, FD Safe Doors has grown from a local fire door installer to a trusted expert serving commercial and residential spaces across the region.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our values are rooted in quality, honesty, and dedication. We take pride in hiring skilled tradespeople and delivering fire safety with precision and care.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is simple — to ensure that every building we touch is safer, stronger, and compliant with the highest fire protection standards. We are passionate about protecting lives through quality craftsmanship and dependable service.
        </p>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">Certifications</h2>
        <div className="flex flex-wrap gap-8 items-center">
          {/* Dummy Certification Logos */}
          <img src="/cert1.png" alt="Certification 1" className="w-24 h-auto object-contain" />
          <img src="/cert2.png" alt="Certification 2" className="w-24 h-auto object-contain" />
          <img src="/cert3.png" alt="Certification 3" className="w-24 h-auto object-contain" />
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-8">
        <h2 className="text-4xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* Dummy Team Images */}
          <img src="/team1.png" alt="Team Member 1" className="rounded-lg object-cover w-full h-48" />
          <img src="/team2.png" alt="Team Member 2" className="rounded-lg object-cover w-full h-48" />
          <img src="/team3.png" alt="Team Member 3" className="rounded-lg object-cover w-full h-48" />
          <img src="/team4.png" alt="Team Member 4" className="rounded-lg object-cover w-full h-48" />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
