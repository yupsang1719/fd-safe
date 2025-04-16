import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 font-['Neue Montreal'] flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <div className="logo">
        <img src="logo/fd-safe-logo.png" alt="Company Logo" width="72" height="30" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-lg capitalize font-medium hover:text-gray-500 transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button (Hamburger / Close) */}
      <button className="md:hidden z-[1001]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform md:hidden flex flex-col items-center py-10 space-y-6`}
      >
        {/* Close Button inside Menu */}
        <button className="absolute top-4 right-6" onClick={() => setIsOpen(false)}>
          
        </button>

        {/* Menu Items */}
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-lg capitalize font-medium hover:text-gray-500 transition"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
