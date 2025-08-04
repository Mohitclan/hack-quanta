import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Calendar, MapPin } from 'lucide-react';

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

      // Floating animation for icons
      const icons = contentRef.current?.querySelectorAll('.floating-icon');
      if (icons) {
        icons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -10,
            duration: 2 + index * 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          });
        });
      }
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
            
            {/* Icons Row */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="floating-icon p-4 bg-neon-cyan/20 rounded-full border border-neon-cyan/40">
                <Clock className="w-8 h-8 text-neon-cyan" />
              </div>
              <div className="floating-icon p-4 bg-neon-pink/20 rounded-full border border-neon-pink/40">
                <Calendar className="w-8 h-8 text-neon-pink" />
              </div>
              <div className="floating-icon p-4 bg-neon-cyan/20 rounded-full border border-neon-cyan/40">
                <MapPin className="w-8 h-8 text-neon-cyan" />
              </div>
            </div>

            {/* Main Content */}
            <h3 className="text-3xl md:text-5xl font-display font-black mb-6 neon-text-cyan animate-pulse-glow-cyan">
              COMING SOON
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Detailed event schedule with timings, workshops, and activities will be revealed soon!
            </p>

            {/* Feature Points */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">48</span>
                </div>
                <h4 className="text-lg font-semibold text-neon-pink mb-2">Hours of Coding</h4>
                <p className="text-gray-400 text-sm">Non-stop innovation</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">10+</span>
                </div>
                <h4 className="text-lg font-semibold text-neon-cyan mb-2">Workshops</h4>
                <p className="text-gray-400 text-sm">Learn from experts</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">24/7</span>
                </div>
                <h4 className="text-lg font-semibold text-neon-pink mb-2">Mentor Support</h4>
                <p className="text-gray-400 text-sm">Always available</p>
              </div>
            </div>

            {/* Notification */}
            <div className="mt-12 p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 border border-neon-cyan/30 rounded-lg">
              <p className="text-neon-cyan font-semibold">
                📧 Subscribe to our newsletter to get notified when the schedule is released!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;