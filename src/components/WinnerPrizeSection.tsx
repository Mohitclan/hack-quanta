import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WinnerPrizeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const trophyRef = useRef<HTMLDivElement>(null);
  const prizesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Trophy animation
      gsap.fromTo(trophyRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotation: -180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: trophyRef.current,
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black via-yellow-900/5 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Sparkle Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-display font-black mb-6 tracking-wider"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              WINNER
            </span>
            <span className="block neon-text-cyan animate-pulse-glow-cyan">PRIZES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-neon-cyan mx-auto rounded-full"></div>
        </div>

        {/* Main Trophy */}
        <div className="text-center">
          <div 
            ref={trophyRef}
            className="inline-flex flex-col items-center p-12 cyber-box bg-gradient-to-br from-yellow-900/30 to-yellow-700/30 border-2 border-yellow-400/40 hover:border-yellow-400/80 transition-all duration-500"
          >
            <div className="relative mb-6">
              <Trophy className="w-32 h-32 md:w-40 md:h-40 text-yellow-400" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-300">
                <span className="text-black font-bold text-lg">1st</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-black text-yellow-400 mb-4">
              FIRST PRIZE
            </h3>
            <p className="text-6xl md:text-8xl font-display font-black bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-4">
              $1,000
            </p>
            <p className="text-2xl text-gray-300 font-semibold">Winner Takes All</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WinnerPrizeSection;