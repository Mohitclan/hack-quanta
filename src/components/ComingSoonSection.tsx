
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
      className="min-h-[40vh] relative flex flex-col items-center justify-center py-6 overflow-hidden mt-[-2rem]"
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
          className="text-4xl md:text-5xl lg:text-8xl font-display tracking-widest mb-8"
        >
          <span className="neon-text">COMING</span>
          <span className="neon-text-cyan ml-2 md:ml-4">SOON</span>
        </h2>
        
        <div className="mt-6">
          <p className="text-gray-300 mb-6">Want to be the first to know when we announce more details?</p>
          <a 
            href="https://devfolio.co" 
            target="_blank"
            rel="noopener noreferrer"
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
