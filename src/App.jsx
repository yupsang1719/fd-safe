import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';

// Sections for homepage
import Landing from './components/Landing';
import { Marquee } from './components/Marquee';
import Fdabout from './components/Fdabout';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Calltoaction from './components/Calltoaction';
import Services from './components/services';

// Pages
import AboutUs from './pages/AboutUs';
// import Projects from './pages/Projects'; // for future

// Optional scroll lib
import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section id="home"><Landing /></section>
      <Marquee />
      <section id="services" className="scroll-mt-32"><Services /></section>
      <section id="about-us" className="scroll-mt-32"><Fdabout /></section>
      <section id="projects" className="scroll-mt-32"><Featured /></section>
      <section id="insights" className="scroll-mt-32"><Cards /></section>
      <Calltoaction />
    </motion.div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        {/* <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} /> */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
