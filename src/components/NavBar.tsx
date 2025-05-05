
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-cyber-black/80 backdrop-blur-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white font-display text-xl">
          <span className="neon-text">HACK</span>
          <span className="neon-text-cyan ml-1">FEST</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-neon-pink transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-neon-pink transition-colors">About</a>
          <a href="#comingsoon" className="text-white hover:text-neon-cyan transition-colors">Events</a>
        </div>
        
        <a 
          href="#register" 
          className="cyber-box px-4 py-2 font-display text-sm md:text-base"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
