
import React, { useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 10 - 5;
      
      gridRef.current.style.transform = `perspective(500px) rotateX(60deg) translateY(${y}px) translateX(${x}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div ref={gridRef} className="grid-background animate-grid-fade"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="mb-8 animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-wider text-center lg:text-left">
              <span className="neon-text block">HACK</span>
              <span className="neon-text-cyan block mt-2">QUANTA</span>
              <span className="text-xl md:text-2xl lg:text-3xl block mt-4 chrome-text">DATA. DYSTOPIA. DOMINANCE</span>
            </h1>
          </div>

          <p className="max-w-2xl text-center lg:text-left mb-8 text-gray-300 text-lg">
            Join the ultimate coding experience where innovation meets technology.
            Push your limits and build the future.
          </p>

          <div className="mb-10">
            <div className="text-center lg:text-left mb-4">
              <p className="text-lg font-display text-neon-cyan">SEPT 5-6, 2025</p>
            </div>
            <CountdownTimer targetDate="2025-09-05T09:00:00" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="#register" className="cyber-box px-6 py-3 text-center font-display hover:scale-105 transition-transform duration-300">
              REGISTER NOW
            </a>
            <a href="#about" className="px-6 py-3 border border-neon-cyan/30 text-center hover:border-neon-cyan hover:scale-105 transition-all duration-300 font-display">
              LEARN MORE
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/5 cyber-box p-1 reveal">
          <div className="bg-cyber-darkPurple p-2">
            <img 
              src="/lovable-uploads/f8bdac24-4f24-4a85-9c30-6b758c2c8a47.png" 
              alt="HackQuanta 2025 Poster" 
              className="w-full rounded shadow-lg hover:shadow-neon-pink/30 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <p className="text-neon-pink text-sm">SCROLL DOWN</p>
        <div className="mt-2 w-6 h-6 mx-auto border-b-2 border-r-2 border-neon-pink transform rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
