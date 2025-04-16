import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const PopupForm = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl w-[90%] max-w-md p-6 relative shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
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
                className="border px-4 py-2 rounded resize-none focus:outline-none"
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
  );
};

export default PopupForm;
