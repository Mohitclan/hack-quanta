
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={addRevealRef} className="reveal mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4 neon-text inline-block">ABOUT THE HACKATHON</h2>
          <div className="horizontal-line w-32 mx-auto my-4"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base">
           HACKQUANTA is a 36-hour overnight hackathon where participants collaborate to solve real-world problems and build innovative solutions.
            Join us for an unforgettable experience of
            creativity, technology, and teamwork.
          </p>
        </div>

        <div ref={addRevealRef} className="reveal mb-16">
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
                <h3 className="text-xl font-display mb-4 neon-text">HACKATHON TEAM</h3>
                <p className="mb-4 text-gray-300 text-sm md:text-base">
                  Geek Room-JIMSEMTC is a college chapter of Geek Room, a thriving tech community with over 25,000 coders nationwide. 
                  We aim to foster a strong tech culture by organizing workshops, hackathons, and collaborative projects that inspire learning and innovation. 
                  As part of Geek Room, we provide students with resources, mentorship, and opportunities to excel in technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={addRevealRef} className="reveal text-center">
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
