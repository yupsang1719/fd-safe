import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/scrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Home sections
import Landing from './components/Landing';
import { Marquee } from './components/Marquee';
import Fdabout from './components/Fdabout';
import Featured from './components/Featured';
import Cards from './components/Cards';
import { Fdfooter } from './components/Fdfooter';
import Calltoaction from './components/Calltoaction';
import Services from './components/services';

// Pages
import AboutUs from './pages/AboutUs';

// Scroll
import LocomotiveScroll from 'locomotive-scroll';
// import AshParticles from './components/AshParticles';

function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen text-black scroll-smooth"
    >
      <section id="home"><Landing /></section>
      <Marquee />
      <section id="services" className="scroll-mt-32"><Services /></section>
      <section id="about-us" className="scroll-mt-32"><Fdabout /></section>
      <section id="projects" className="scroll-mt-32"><Featured /></section>
      <section id="insights" className="scroll-mt-32"><Cards /></section>
      <Calltoaction />
      <section id="contact-us" className="scroll-mt-32"><Fdfooter /></section>
    </motion.div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
