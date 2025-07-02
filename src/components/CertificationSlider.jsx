import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cert1 from '../assets/img/demoCert.png';
import cert2 from '../assets/img/demoCert.png';
import cert3 from '../assets/img/demoCert.png'; // Replace with real certs

const certificates = [
  { image: cert1, title: 'Fire Door Installer Certification' },
  { image: cert2, title: 'Safety Compliance Award' },
  { image: cert3, title: 'UK Fire Authority Accreditation' },
];

const CertificationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <section
      className="w-full bg-[#9fb650] py-20 px-4 sm:px-10 md:px-20 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="w-full max-w-xl mx-auto text-center"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Slide */}
        <div className="relative h-[400px] sm:h-[460px] mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white px-2 py-1 border border-white/30 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              onClick={nextSlide}
            >
              <img
                src={certificates[activeIndex].image}
                alt={`Certificate ${activeIndex + 1}`}
                className="w-[95%] h-[95%] object-contain cursor-pointer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption */}
        <motion.h3
          key={`caption-${activeIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-medium text-white"
        >
          {certificates[activeIndex].title}
        </motion.h3>

        {/* Arrow */}
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center justify-center mx-auto bg-white text-black p-3 rounded-full shadow-md hover:bg-zinc-100 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default CertificationSlider;
