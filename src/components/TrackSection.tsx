
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TracksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(cards, {
          y: 60,
          opacity: 0,
          rotationX: 45,
          scale: 0.8
        }, {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Hover animations for cards
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.05,
              rotationY: 5,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tracks" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4 neon-text inline-block">INNOVATION TRACKS</h2>
          <div className="horizontal-line w-32 mx-auto my-4"></div>
        </div>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Finnovate',
              description: 'Powering the Digital Finance Era — where innovation meets the future of finance, banking & the digital economy.',
            },
            {
              title: 'SmartClass',
              description: 'The EdTech Evolution — reimagining education through technology, personalization & immersive learning.',
            },
            {
              title: 'Wellness 5.0',
              description: 'Redefining Digital Health — tech-driven healthcare solutions for a smarter, healthier tomorrow.',
            },
            {
              title: 'AgriNext',
              description: 'Smart Solutions for Future Farming — harnessing AgriTech to revolutionize agriculture, sustainability & food systems.',
            },
            {
              title: 'Lawgorithms',
              description: 'Innovating Justice Through LegalTech — transforming law and paralegal services with AI, automation & digital tools.',
            },
            {
              title: 'FitCore',
              description: 'The Future of Fitness & Sports Innovation — tech-fueled advancements in fitness, athletic performance & wellness.',
            },
            {
              title: 'ClimaVerse',
              description: 'Tech for Climate Action & Resilience — innovative solutions to monitor, mitigate & adapt to a changing planet.',
            },
            {
              title: 'WanderTech',
              description: 'Revolutionizing Travel & Hospitality — blending tech with tourism to enhance experiences and operations.',
            },
            {
              title: 'OpenSpark',
              description: 'The Borderless Innovation Track — unleashing creative solutions beyond industries, geographies & limits.',
            },
          ].map((track, index) => (
            <div key={index} className="bg-cyber-darkPurple p-6 rounded-xl border border-cyan-400 shadow-md cursor-pointer">
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">{track.title}</h3>
              <p className="text-gray-300 text-sm">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
