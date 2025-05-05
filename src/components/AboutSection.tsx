
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
          <p className="max-w-3xl mx-auto text-gray-300">
            HACKFEST is a 24-hour coding marathon where participants collaborate 
            to solve real-world problems and build innovative solutions. Join us for 
            an unforgettable experience of creativity, technology, and teamwork.
          </p>
        </div>

        <div ref={addRevealRef} className="reveal mb-16">
          <div className="cyber-box p-1 md:p-2">
            <div className="bg-cyber-darkPurple p-6 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-display mb-4 neon-text-cyan">COLLEGE DETAILS</h3>
                <p className="mb-4 text-gray-300">
                  Hosted by the prestigious Engineering College, a hub for innovation
                  and technology education since 2005. Our institution has been at the 
                  forefront of nurturing technical talent and fostering an ecosystem of 
                  creativity and problem-solving.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>State-of-the-art facilities</li>
                  <li>Industry partnerships with leading tech companies</li>
                  <li>Award-winning faculty members</li>
                  <li>Rich history of successful hackathon participants</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display mb-4 neon-text">ORGANIZING TEAM</h3>
                <p className="mb-4 text-gray-300">
                  HACKFEST is proudly organized by "Geek Room," the premier 
                  tech club at our college. Our team is passionate about technology,
                  innovation, and creating opportunities for students to showcase their skills.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2 cyber-box p-1">
                      <div className="w-full h-full rounded-full bg-cyber-purple"></div>
                    </div>
                    <p className="font-display text-neon-cyan">ALEX KIM</p>
                    <p className="text-xs text-gray-400">LEAD ORGANIZER</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2 cyber-box p-1">
                      <div className="w-full h-full rounded-full bg-cyber-purple"></div>
                    </div>
                    <p className="font-display text-neon-pink">SARAH LEE</p>
                    <p className="text-xs text-gray-400">TECH LEAD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={addRevealRef} className="reveal text-center">
          <div className="horizontal-line w-32 mx-auto my-6"></div>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl text-white italic">
              "Innovation is the ability to see change as an opportunity - not a threat."
            </p>
            <footer className="mt-2 text-neon-cyan">— Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
