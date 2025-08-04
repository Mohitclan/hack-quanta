import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, Gift, FileText, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const WinnerPrizeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const trophyRef = useRef<HTMLDivElement>(null);
  const additionalPrizesRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create ScrollTrigger for music control
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          // Play victory music when entering section
          if (audioRef.current) {
            audioRef.current.volume = 0.3;
            audioRef.current.play().catch(console.error);
          }
        },
        onLeave: () => {
          // Stop music when leaving section (scrolling down)
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        },
        onEnterBack: () => {
          // Play again when scrolling back up
          if (audioRef.current) {
            audioRef.current.play().catch(console.error);
          }
        },
        onLeaveBack: () => {
          // Stop music when leaving section (scrolling up)
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }
      });

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

      // Additional prizes animation
      if (additionalPrizesRef.current) {
        gsap.fromTo(additionalPrizesRef.current.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: additionalPrizesRef.current,
              start: "top 85%",
            }
          }
        );
      }

    }, sectionRef);

    return () => {
      // Stop music and cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hidden audio element for victory music */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="https://www.soundjay.com/misc/sounds/fanfare.wav" type="audio/wav" />
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmccBjiS2PK+dSMFKnbH8N2QQAoUXrTp66hVFApGn+DyvmccBg==" type="audio/wav" />
      </audio>
      
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
        <div className="text-center mb-20">
          <div 
            ref={trophyRef}
            className="inline-flex flex-col items-center p-16 cyber-box bg-gradient-to-br from-yellow-900/40 via-yellow-800/30 to-yellow-900/40 border-2 border-yellow-400/50 hover:border-yellow-400/90 hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] transition-all duration-700 group"
          >
            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 rounded-full blur-2xl scale-150"></div>
              <Trophy className="w-36 h-36 md:w-48 md:h-48 text-yellow-400 relative z-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-4 border-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.8)]">
                <span className="text-black font-bold text-xl">1st</span>
              </div>
              {/* Crown decoration */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
            </div>
            <h3 className="text-5xl md:text-7xl font-display font-black text-yellow-400 mb-6 tracking-wider drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
              FIRST PRIZE
            </h3>
            <div className="relative">
              <p className="text-7xl md:text-9xl font-display font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                $1,000
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent blur-xl"></div>
            </div>
            <p className="text-2xl text-gray-300 font-semibold tracking-wide uppercase">Winner Takes All</p>
            <div className="flex items-center gap-2 mt-4 text-yellow-400">
              <Star className="w-5 h-5" />
              <span className="text-lg font-medium">Grand Champion</span>
              <Star className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Additional Prizes */}
        <div ref={additionalPrizesRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Certificates */}
          <Card className="cyber-box bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-20 h-20 text-cyan-400 mx-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
              </div>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-4">
                CERTIFICATES
              </h4>
              <p className="text-lg text-gray-300 mb-4">
                Digital Achievement Certificates
              </p>
              <div className="space-y-2 text-gray-400">
                <p>• Winner Certificate</p>
                <p>• Participation Certificate</p>
                <p>• Skills Recognition</p>
              </div>
            </CardContent>
          </Card>

          {/* Goodies */}
          <Card className="cyber-box bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 group">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-20 h-20 text-purple-400 mx-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl"></div>
              </div>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-purple-400 mb-4">
                GOODIES
              </h4>
              <p className="text-lg text-gray-300 mb-4">
                Exclusive Hackathon Merchandise
              </p>
              <div className="space-y-2 text-gray-400">
                <p>• Custom T-Shirts</p>
                <p>• Branded Stickers</p>
                <p>• Tech Accessories</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
    </>
  );
};

export default WinnerPrizeSection;