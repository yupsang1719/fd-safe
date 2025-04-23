import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useActiveSections } from "../hooks/useActiveSection";

const menuItems = [
  { label: "Services", id: "services" },
  { label: "About Us", id: "about-us" },
  { label: "Projects", id: "projects" },
  { label: "Insights", id: "insights" },
  { label: "Contact Us", id: "contact-us" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSections = useActiveSections(menuItems.map(item => item.id));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 font-['Neue Montreal'] flex justify-between items-center bg-white shadow-md">
        <div className="logo">
          <img src="logo/fd-safe-logo.png" alt="Company Logo" width="72" height="30" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative cursor-pointer text-lg capitalize font-medium transition ${
                activeSections.includes(item.id) ? "text-orange-500" : "text-black"
              }`}
            >
              {item.label}
              {activeSections.includes(item.id) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] bg-orange-500"
                  style={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-[1001]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] md:hidden"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center py-10 space-y-6`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>

        {menuItems.map((item) => (
          <a
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer text-lg capitalize font-medium hover:text-gray-500 transition ${
              activeSections.includes(item.id) ? "text-orange-500" : "text-black"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
