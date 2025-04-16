import React from 'react';

function Cards() {
  return (
    <div className="w-full bg-[#CDEA68] px-6 sm:px-10 md:px-14 lg:px-20 py-10">
      {/* Mobile + Tablet Layout */}
      <div className="flex flex-col lg:hidden gap-10 items-center">
        {/* Logo Card */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] relative">
          <div className="w-full h-full bg-[#004d43] rounded-xl flex justify-center items-center relative">
            <img className="w-24 sm:w-28 md:w-32" src="logo/fd-safe-logo.png" alt="FD Safe Logo" />
            <button className="absolute bottom-4 px-4 py-1 border border-white rounded-full text-xs text-amber-50">
              &copy; 2020–2024
            </button>
          </div>
        </div>

        {/* Image Cards (Cert + Collab) */}
        <div className="w-full flex flex-col sm:flex-row gap-6 h-auto">
          <div className="w-full sm:w-1/2 bg-black rounded-xl flex justify-center items-center p-4">
            <img
              src="logo/fd-safe-logo.png"
              alt="Certificate"
              className="h-20 object-contain"
            />
          </div>
          <div className="w-full sm:w-1/2 bg-black rounded-xl flex justify-center items-center p-4">
            <img
              src="logo/fd-safe-logo.png"
              alt="Collaboration Logo"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 items-start h-[60vh]">
        {/* Logo Card (Left) */}
        <div className="w-[50%] h-full relative">
          <div className="w-full h-full bg-[#004d43] rounded-xl flex justify-center items-center relative">
            <img className="w-28" src="logo/fd-safe-logo.png" alt="FD Safe Logo" />
            <button className="absolute bottom-4 px-4 py-1 border border-white rounded-full text-xs text-amber-50">
              &copy; 2020–2024
            </button>
          </div>
        </div>

        {/* Two Image Cards (Right) */}
        <div className="w-[50%] h-full flex gap-4">
          <div className="w-1/2 h-full bg-black rounded-xl flex justify-center items-center p-4">
            <img
              src="logo/fd-safe-logo.png"
              alt="Certificate"
              className="h-20 object-contain"
            />
          </div>
          <div className="w-1/2 h-full bg-black rounded-xl flex justify-center items-center p-4">
            <img
              src="logo/fd-safe-logo.png"
              alt="Collaboration Logo"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
