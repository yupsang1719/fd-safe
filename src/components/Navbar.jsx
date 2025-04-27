import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu if open
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

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation('services')} className="text-lg capitalize font-medium hover:text-gray-500 transition">
            Services
          </button>
          <button onClick={() => handleNavigation('about-us')} className="text-lg capitalize font-medium hover:text-gray-500 transition">
            About Us
          </button>
          <button onClick={() => handleNavigation('projects')} className="text-lg capitalize font-medium hover:text-gray-500 transition">
            Projects
          </button>
          <button onClick={() => handleNavigation('insights')} className="text-lg capitalize font-medium hover:text-gray-500 transition">
            Insights
          </button>
          <button onClick={() => handleNavigation('contact-us')} className="text-lg capitalize font-medium hover:text-gray-500 transition">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden z-[1000]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white/90 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-black text-xl font-semibold transition-transform duration-500 z-[998] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => handleNavigation('services')}>Services</button>
        <button onClick={() => handleNavigation('about-us')}>About Us</button>
        <button onClick={() => handleNavigation('projects')}>Projects</button>
        <button onClick={() => handleNavigation('insights')}>Insights</button>
        <button onClick={() => handleNavigation('contact-us')}>Contact</button>
      </div>
    </>
  );
}

export default Navbar;
