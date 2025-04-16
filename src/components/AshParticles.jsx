import React from 'react';

const AshParticles = () => {
  const particles = new Array(30).fill(0);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((_, i) => {
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;

        return (
          <span
            key={i}
            className="absolute bg-red-500 rounded-full opacity-20 animate-fly"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              top: `${Math.random() * 100}vh`,
              zIndex: 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default AshParticles;
