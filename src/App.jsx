import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home page sections
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { Marquee } from './components/Marquee';
import Fdabout from './components/Fdabout';
import Featured from './components/Featured';
import Cards from './components/Cards';
import { Fdfooter } from './components/Fdfooter';
import Calltoaction from './components/Calltoaction';
import Services from './components/services';

// Extra pages
import AboutUs from './pages/AboutUs';

// Scroll
import LocomotiveScroll from 'locomotive-scroll';
// import AshParticles from './components/AshParticles';

function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen text-black scroll-smooth">
      <Navbar />
      <section id="home"><Landing /></section>
      <Marquee />
      <section id="services" className="scroll-mt-32"><Services /></section>
      <section id="about-us" className="scroll-mt-32"><Fdabout /></section>
      <section id="projects" className="scroll-mt-32"><Featured /></section>
      <section id="insights" className="scroll-mt-32"><Cards /></section>
      <Calltoaction />
      <section id="contact-us" className="scroll-mt-32"><Fdfooter /></section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
