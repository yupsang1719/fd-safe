import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Fire Door Installation',
    content: 'Certified installation of fire doors that meet all safety regulations for commercial and residential buildings.',
  },
  {
    title: 'Fire Door Inspection',
    content: 'Thorough inspections to ensure your fire doors comply with local and national safety standards.',
  },
  {
    title: 'Fire Damper Testing',
    content: 'Professional testing and documentation of fire and smoke dampers in HVAC systems.',
  },
  {
    title: 'Maintenance & Repair',
    content: 'Routine maintenance and emergency repair services for fire safety systems and access controls.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#f8ffdf] text-black px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-28 scroll-mt-32"
    >
      <div className="w-full border-b border-[#9fb650] pb-10 sm:pb-16 md:pb-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase leading-none tracking-tight">
          Our Services
        </h1>
      </div>

      <div className="flex flex-col gap-10 mt-12">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            custom={i}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, backgroundColor: '#003a32' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-full bg-[#004d43] text-white rounded-2xl p-8 sm:p-12 md:p-16 shadow-lg cursor-pointer"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{service.title}</h2>
            <p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-200">
              {service.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
