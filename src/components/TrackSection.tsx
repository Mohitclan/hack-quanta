import React, { useEffect, useRef } from 'react';

const TracksSection = () => {
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
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={addRevealRef} className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4 neon-text inline-block">INNOVATION TRACKS</h2>
          <div className="horizontal-line w-32 mx-auto my-4"></div>

        </div>

        <div ref={addRevealRef} className="reveal grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <div key={index} className="bg-cyber-darkPurple p-6 rounded-xl border border-cyan-400 shadow-md">
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