
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComingSoonSection = () => {
  const glitchRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content entrance
      gsap.fromTo(contentRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Glitch title animation
      if (glitchRef.current) {
        // Continuous subtle animation
        gsap.to(glitchRef.current, {
          textShadow: "2px 2px 0px rgba(255, 0, 204, 0.8), -2px -2px 0px rgba(0, 255, 255, 0.8)",
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 3
        });

        // Random glitch bursts
        const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 4 });
        glitchTimeline
          .to(glitchRef.current, {
            x: 5,
            duration: 0.05
          })
          .to(glitchRef.current, {
            x: -5,
            duration: 0.05
          })
          .to(glitchRef.current, {
            x: 0,
            duration: 0.05
          })
          .to(glitchRef.current, {
            textShadow: "5px 0px 0px rgba(255, 0, 204, 0.8), -5px 0px 0px rgba(0, 255, 255, 0.8)",
            duration: 0.1
          })
          .to(glitchRef.current, {
            textShadow: "0px 0px 10px rgba(255, 0, 204, 0.8), 0px 0px 10px rgba(0, 255, 255, 0.8)",
            duration: 0.1
          });
      }

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.1,
            rotationY: 10,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="comingsoon" 
      ref={sectionRef} 
      className="min-h-[60vh] relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden"
    >
      <div className="grid-background animate-grid-fade"></div>
      
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
        className="container mx-auto z-10 text-center max-w-4xl"
      >
        <h2 
          ref={glitchRef}
          className="text-4xl md:text-5xl lg:text-7xl font-display tracking-widest mb-8"
        >
          <span className="neon-text">COMING</span>
          <span className="neon-text-cyan ml-2 md:ml-4">SOON</span>
        </h2>
        
        <div className="mt-8">
          <a 
            ref={buttonRef}
            href="https://hack-quanta.devfolio.co/" 
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-box inline-block px-8 py-3 font-display transition-transform duration-300"
          >
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent animate-text-shimmer">
              Apply with devfolio
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
