
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Info, ListOrdered } from 'lucide-react';

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
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo in top left - Logo 1 - Slightly increased size */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f115c920-38e7-43ee-8309-398c948731e4.png" 
              alt="Geek Room Logo" 
              className="h-20 w-20 object-contain" 
            />
          </div>
          
          {/* Navigation in center */}
          <nav className={cn(
            "transition-all duration-300",
            isScrolled ? "bg-cyber-black/80 backdrop-blur-md rounded-lg px-4" : ""
          )}>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-white hover:text-neon-pink transition-colors flex items-center gap-2">
                <Home size={18} />
                <span>Home</span>
              </a>
              <a href="#about" className="text-white hover:text-neon-pink transition-colors flex items-center gap-2">
                <Info size={18} />
                <span>About</span>
              </a>
              <a href="#comingsoon" className="text-white hover:text-neon-cyan transition-colors flex items-center gap-2">
                <ListOrdered size={18} />
                <span>Tracks</span>
              </a>
            </div>
            
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
            
            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mx-auto w-48 bg-cyber-black/95 backdrop-blur-lg shadow-lg py-4 flex flex-col items-center space-y-4 rounded-lg">
                <a href="#home" className="text-white hover:text-neon-pink transition-colors py-2 flex items-center gap-2">
                  <Home size={18} />
                  <span>Home</span>
                </a>
                <a href="#about" className="text-white hover:text-neon-pink transition-colors py-2 flex items-center gap-2">
                  <Info size={18} />
                  <span>About</span>
                </a>
                <a href="#comingsoon" className="text-white hover:text-neon-cyan transition-colors py-2 flex items-center gap-2">
                  <ListOrdered size={18} />
                  <span>Tracks</span>
                </a>
              </div>
            )}
          </nav>
          
          {/* Logo in top right - Logo 2 - Slightly increased size */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/322409a5-cdad-4296-92ff-1984d22a2f72.png" 
              alt="JIMS EMTC Logo" 
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
