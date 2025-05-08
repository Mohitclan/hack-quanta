
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
          {/* Logos in top left */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/ae3ecdc4-9c59-4591-9239-f257b341427b.png" 
              alt="JEMTEC Logo" 
              className="h-16 w-16 object-contain"
            />
            <img 
              src="/lovable-uploads/b6f4ea3c-9561-41ec-a684-b80fe4df7e88.png" 
              alt="Geek Room Logo" 
              className="h-16 w-16 object-contain"
            />
          </div>
          
          {/* Navigation on right side */}
          <nav className={cn(
            "transition-all duration-300",
            isScrolled ? "bg-cyber-black/80 backdrop-blur-md" : ""
          )}>
            <div className="flex flex-col items-end">
              {/* Mobile Menu Button */}
              {isMobile && (
                <button 
                  onClick={toggleMenu}
                  className="md:hidden cyber-box p-1 m-4"
                >
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                  </div>
                </button>
              )}
              
              {/* Desktop Navigation - Vertical on right side */}
              <div className={`hidden md:flex flex-col space-y-6 p-4 bg-cyber-black/80 backdrop-blur-md`}>
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
              
              {/* Mobile Menu */}
              {isMobile && isMenuOpen && (
                <div className="absolute top-full right-0 w-48 bg-cyber-black/95 backdrop-blur-lg shadow-lg py-4 flex flex-col items-start space-y-4 px-4">
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
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
