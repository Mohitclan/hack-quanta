
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-cyber-black/80 backdrop-blur-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-white font-display text-lg md:text-xl">
          <span className="neon-text">HACK</span>
          <span className="neon-text-cyan ml-1">QUANTA</span>
        </a>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="md:hidden cyber-box p-1"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        )}
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-neon-pink transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-neon-pink transition-colors">About</a>
          <a href="#comingsoon" className="text-white hover:text-neon-cyan transition-colors">Events</a>
        </div>
        
        {/* Desktop Register Button */}
        <a 
          href="https://devfolio.co" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block cyber-box px-4 py-2 font-display text-sm md:text-base"
        >
          Register
        </a>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-cyber-black/95 backdrop-blur-lg shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="#home" className="text-white hover:text-neon-pink transition-colors py-2">Home</a>
            <a href="#about" className="text-white hover:text-neon-pink transition-colors py-2">About</a>
            <a href="#comingsoon" className="text-white hover:text-neon-cyan transition-colors py-2">Events</a>
            <a 
              href="https://devfolio.co" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-box px-4 py-2 font-display text-sm"
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
