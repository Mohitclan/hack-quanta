import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScheduleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 60,
          rotationX: -45
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black via-cyber-purple/10 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Data Lines Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="data-lines"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-display font-black mb-6 neon-text tracking-wider perspective-1000"
          >
            EVENT
            <span className="block neon-text-cyan animate-pulse-glow-cyan">SCHEDULE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <div className="cyber-box bg-gradient-to-br from-cyber-darkPurple/40 to-cyber-purple/40 p-8 md:p-12 border-2 border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-500 group">
            
            {/* Main Content */}
            <h3 className="text-3xl md:text-5xl font-display font-black mb-6 neon-text-cyan animate-pulse-glow-cyan">
              COMING SOON
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Detailed event schedule will be revealed soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;