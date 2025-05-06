
import React from 'react';
import { Instagram, Linkedin, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darkPurple py-10 border-t-2 border-neon-pink/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="neon-text font-display text-lg mb-4">HACK QUANTA</h4>
            <p className="text-gray-300 mb-4">
              The ultimate coding experience where innovation meets technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-cyber-purple flex items-center justify-center transform hover:scale-110 transition-all hover:bg-neon-pink/20 hover:shadow-glow-sm"
                aria-label="Instagram"
              >
                <Instagram className="text-white hover:text-neon-pink transition-colors" size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyber-purple flex items-center justify-center transform hover:scale-110 transition-all hover:bg-neon-cyan/20 hover:shadow-glow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white hover:text-neon-cyan transition-colors" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="neon-text-cyan font-display text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-neon-cyan transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-neon-cyan"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-neon-cyan transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-neon-cyan"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#comingsoon" className="text-gray-300 hover:text-neon-cyan transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-neon-cyan"></span>
                  Events
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-300 hover:text-neon-cyan transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-neon-cyan"></span>
                  Register
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="neon-text font-display text-lg mb-4">CONTACT US</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2 flex items-start">
                <span className="mr-2 text-neon-pink">◉</span>
                Engineering College Campus
              </p>
              <p className="mb-2 flex items-start">
                <span className="mr-2 text-neon-cyan">◉</span>
                123 Innovation Avenue
              </p>
              <p className="mb-2 flex items-start">
                <span className="mr-2 text-neon-pink">◉</span>
                Techville, TX 75001
              </p>
              <p className="mb-2 flex items-start">
                <span className="mr-2 text-neon-cyan">◉</span>
                <a href="mailto:info@hackquanta.com" className="hover:text-neon-cyan transition-colors">
                  info@hackquanta.com
                </a>
              </p>
              <p className="mb-2 flex items-start">
                <span className="mr-2 text-neon-pink">◉</span>
                <a href="https://www.yourdomain.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink flex items-center">
                  <Link size={14} className="mr-1" /> 
                  www.yourdomain.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="horizontal-line w-full my-8"></div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 HACK QUANTA. All rights reserved.</p>
          <p className="mt-2">Designed with <span className="text-neon-pink">♥</span> by Geek Room</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
