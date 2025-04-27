import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-6 md:px-20 ${
        isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-lg' : 'py-6 bg-white'
      } transition-all duration-300`}
    >
      {/* Logo */}
      <div className="logo cursor-pointer" onClick={handleLogoClick}>
        <img
          src="/logo/fd-safe-logo.png"
          alt="Logo"
          width="72"
          height="30"
          className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <button
          onClick={() => handleNavigation('services')}
          className="text-lg capitalize font-medium hover:text-gray-500 transition"
        >
          Services
        </button>
        <button
          onClick={() => handleNavigation('about-us')}
          className="text-lg capitalize font-medium hover:text-gray-500 transition"
        >
          About Us
        </button>
        <button
          onClick={() => handleNavigation('projects')}
          className="text-lg capitalize font-medium hover:text-gray-500 transition"
        >
          Projects
        </button>
        <button
          onClick={() => handleNavigation('insights')}
          className="text-lg capitalize font-medium hover:text-gray-500 transition"
        >
          Insights
        </button>
        <button
          onClick={() => handleNavigation('contact-us')}
          className="text-lg capitalize font-medium hover:text-gray-500 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );

  function handleNavigation(id) {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

export default Navbar;
