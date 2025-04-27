import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa'; // Arrow Icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600"
          title="Back to Top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
