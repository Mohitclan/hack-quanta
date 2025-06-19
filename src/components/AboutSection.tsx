
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with scroll trigger
      gsap.fromTo(titleRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Text reveal animation
      gsap.fromTo(textRef.current, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Box slide in from left
      gsap.fromTo(boxRef.current, {
        x: -100,
        opacity: 0,
        rotationY: -15
      }, {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Quote fade in with typewriter effect
      gsap.fromTo(quoteRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4 neon-text inline-block">ABOUT THE HACKATHON</h2>
          <div className="horizontal-line w-32 mx-auto my-4"></div>
          <p ref={textRef} className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base">
           HACKQUANTA is a 36-hour overnight hackathon where participants collaborate to solve real-world problems and build innovative solutions.
            Join us for an unforgettable experience of
            creativity, technology, and teamwork.
          </p>
        </div>

        <div ref={boxRef} className="mb-16">
          <div className="cyber-box p-1 md:p-2">
            <div className="bg-cyber-darkPurple p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-display mb-4 neon-text-cyan">COLLEGE DETAILS</h3>
                <p className="mb-4 text-gray-300 text-sm md:text-base">
                  JIMS Engineering Management Technical Campus
                  JIMSEMTC is a premier BTech institution focused on nurturing excellence in education, innovation, and research. Located in Greater Noida, JEMTEC offers a dynamic learning environment to shape future-ready engineers and technocrats.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
                  <li className="pl-2 -indent-4 ml-4">Cutting-Edge Infrastructure
                  State-of-the-art laboratories, modern classrooms, and a sprawling campus to provide an exceptional learning experience for aspiring engineers.</li>
                  <li className="pl-2 -indent-4 ml-4">Industry-Driven Curriculum
                  A curriculum designed to bridge the gap between industry and academia, ensuring students are equipped with the latest technological skills.</li>
                  <li className="pl-2 -indent-4 ml-4">Placement Excellence
                  Strong placement record with top recruiters, ensuring a bright future for students through high-paying and rewarding job opportunities.</li>
                  <li className="pl-2 -indent-4 ml-4">Rich history of successful hackathon participants</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display mb-4 neon-text">GEEK ROOM</h3>
                <p className="mb-4 text-gray-300 text-sm md:text-base">
                  Geek Room-JIMSEMTC is a college chapter of Geek Room, a thriving tech community with over 25,000 coders nationwide. 
                  We aim to foster a strong tech culture by organizing workshops, hackathons, and collaborative projects that inspire learning and innovation. 
                  As part of Geek Room, we provide students with resources, mentorship, and opportunities to excel in technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={quoteRef} className="text-center">
          <div className="horizontal-line w-32 mx-auto my-6"></div>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white italic">
              "Innovation is the ability to see change as an opportunity - not a threat."
            </p>
            <footer className="mt-2 text-neon-cyan">— </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
