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

      // Prizes animation
      const prizeCards = prizesRef.current?.querySelectorAll('.prize-card');
      if (prizeCards) {
        gsap.fromTo(prizeCards,
          {
            opacity: 0,
            y: 100,
            rotationY: 45
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: prizesRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Continuous trophy glow animation
      gsap.to(trophyRef.current, {
        filter: "drop-shadow(0 0 30px #ffd700) drop-shadow(0 0 60px #ffd700)",
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prizes = [
    {
      position: "1st",
      title: "GRAND CHAMPION",
      amount: "$1,000",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      glow: "shadow-yellow-400/50"
    },
    {
      position: "2nd",
      title: "RUNNER UP",
      amount: "$500",
      icon: Trophy,
      color: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50"
    },
    {
      position: "3rd",
      title: "THIRD PLACE",
      amount: "$250",
      icon: Medal,
      color: "from-amber-600 to-amber-800",
      glow: "shadow-amber-600/50"
    }
  ];

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
        <div className="text-center mb-16">
          <div 
            ref={trophyRef}
            className="inline-flex flex-col items-center p-8 cyber-box bg-gradient-to-br from-yellow-900/30 to-yellow-700/30 border-2 border-yellow-400/40 hover:border-yellow-400/80 transition-all duration-500"
          >
            <div className="relative">
              <Trophy className="w-24 h-24 md:w-32 md:h-32 text-yellow-400 mb-4" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-black text-yellow-400 mb-2">
              GRAND PRIZE
            </h3>
            <p className="text-5xl md:text-7xl font-display font-black bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              $1,000
            </p>
            <p className="text-xl text-gray-300 mt-2">+ Additional Rewards</p>
          </div>
        </div>

        {/* Prize Podium */}
        <div ref={prizesRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div 
                key={index}
                className={`prize-card cyber-box bg-gradient-to-br from-cyber-darkPurple/40 to-cyber-purple/40 p-6 text-center border-2 border-transparent hover:border-neon-cyan/60 transition-all duration-500 group ${prize.glow}`}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {prize.position}
                  </div>
                </div>
                
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  {prize.title}
                </h4>
                
                <p className={`text-3xl font-display font-black mb-4 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                  {prize.amount}
                </p>
                
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>• Certificate of Achievement</p>
                  <p>• HACK QUANTA Merchandise</p>
                  <p>• Industry Recognition</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="cyber-box bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 p-6 border border-neon-cyan/30 max-w-3xl mx-auto">
            <h4 className="text-2xl font-display font-bold text-neon-cyan mb-4">
              🏆 Special Recognition Awards
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-neon-pink">Best Innovation Award</p>
                <p className="text-sm">Most creative and innovative solution</p>
              </div>
              <div>
                <p className="font-semibold text-neon-cyan">People's Choice Award</p>
                <p className="text-sm">Voted by participants and audience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerPrizeSection;