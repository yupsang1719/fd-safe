import React from 'react';
import Navbar from '../components/Navbar';
import { Fdfooter } from '../components/Fdfooter';
import ScrollToTopButton from '../components/ScrollToTopButton';

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-full text-black scroll-smooth">
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Fdfooter />
    </div>
  );
};

export default MainLayout;
