
import React, { useEffect, useRef } from 'react';

const ComingSoonSection = () => {
  const glitchRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glitchElement = glitchRef.current;
    if (!glitchElement) return;

    let glitchInterval: NodeJS.Timeout;
    
    const startGlitchEffect = () => {
      // Random glitch effect
      const applyGlitch = () => {
        if (!glitchElement) return;
        
        const glitchChance = Math.random();
        if (glitchChance > 0.5) {
          glitchElement.classList.add('animate-glitch');
          glitchElement.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(255, 0, 204, 0.8),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(0, 255, 255, 0.8)
          `;
          
          setTimeout(() => {
            if (glitchElement) {
              glitchElement.classList.remove('animate-glitch');
              glitchElement.style.textShadow = '';
            }
          }, 200);
        }
      };
      
      glitchInterval = setInterval(applyGlitch, 3000);
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        startGlitchEffect();
        if (contentRef.current) {
          contentRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      } else {
        clearInterval(glitchInterval);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(glitchInterval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="comingsoon" 
      ref={sectionRef} 
      className="min-h-[60vh] relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="grid-background animate-grid-fade"></div>
      
      {/* Animated data lines in the background */}
      <div className="datalines">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="dataline" 
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 40 + 20}vh`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `dataline-fall ${Math.random() * 8 + 4}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      <div 
        ref={contentRef} 
        className="container mx-auto px-4 z-10 text-center opacity-0 translate-y-10 transition-all duration-1000 transform"
      >
        <h2 
          ref={glitchRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display tracking-widest mb-8"
        >
          <span className="neon-text">COMING</span>
          <span className="neon-text-cyan ml-4">SOON</span>
        </h2>
        
        <div className="cyber-box max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-cyber-darkPurple p-6">
            <h3 className="font-display text-2xl mb-4 text-white">EVENT DETAILS</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="mr-4 text-neon-pink">◉</div>
                <div>
                  <p className="font-display text-neon-pink">Prizes</p>
                  <p className="text-gray-300">Over $10,000 in cash and sponsor prizes</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 text-neon-cyan">◉</div>
                <div>
                  <p className="font-display text-neon-cyan">Schedule</p>
                  <p className="text-gray-300">Detailed event timeline coming soon</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 text-neon-pink">◉</div>
                <div>
                  <p className="font-display text-neon-pink">Speakers</p>
                  <p className="text-gray-300">Industry experts and tech leaders</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10">
          <p className="text-gray-300 mb-6">Want to be the first to know when we announce more details?</p>
          <a 
            href="#notify" 
            className="cyber-box inline-block px-8 py-3 font-display hover:scale-105 transition-transform duration-300"
          >
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent animate-text-shimmer">
              GET NOTIFIED
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
