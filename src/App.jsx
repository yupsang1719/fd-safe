import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { Marquee } from './components/Marquee';
import Fdabout from './components/Fdabout';
import Featured from './components/Featured';
import Cards from './components/Cards';
import { Fdfooter } from './components/Fdfooter';
import LocomotiveScroll from 'locomotive-scroll';
import Calltoaction from './components/Calltoaction';
import AshParticles from './components/AshParticles';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-scree text-black">
        <Navbar />
        <Landing />
        <Marquee />
        <Fdabout/>
        <Featured/>
        <Cards/>
        <Calltoaction/>
        <Fdfooter />
        {/* <AshParticles /> */}
    </div>
  )
}

export default App