import React from 'react';

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-16 px-4 relative overflow-hidden">
      <div className="horizontal-line mb-10"></div>
      <div className="container mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display neon-text-cyan mb-6">SPONSORS</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to partner with industry leaders who make HackQuanta possible.
          </p>
        </div>

        <div className="reveal">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a 
              href="https://www.pw.live/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-6 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/7c2a6da4-cee5-43de-90c5-6cdb63c133fd.png" 
                alt="Physics Wallah Logo" 
                className="h-16 md:h-20 object-contain" 
              />
            </a>
            <a 
              href="https://gen.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-6 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/d0434959-567d-402a-974d-550ede483bf8.png" 
                alt="Genesis Logo" 
                className="h-16 md:h-20 object-contain" 
              />
            </a>
            <a 
              href="https://devfolio.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-6 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/0740d959-a9b6-41fa-aea9-a2c5286376ac.png" 
                alt="Devfolio Logo" 
                className="h-14 md:h-18 object-contain" 
              />
            </a>
            <a 
              href="https://interviewbuddy.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-6 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/605cfc9c-49c1-4ca1-9a78-fba174ac9338.png" 
                alt="Interview Buddy Logo" 
                className="h-14 md:h-18 object-contain" 
              />
            </a>
            <a 
              href="https://dualitytech.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-6 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/e2a95b39-4903-4a05-8424-bd126fa58100.png" 
                alt="Duality Logo" 
                className="h-14 md:h-18 object-contain" 
              />
            </a>
            <a 
              href="https://polygon.technology" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-5 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/4dc66ebf-0022-4ea8-a904-f6a8618468b4.png" 
                alt="ETHIndia Logo" 
                className="h-12 md:h-16 object-contain" 
              />
            </a>
            <a 
              href="https://gen.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-5 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/d653be72-f839-4b1a-a9e6-624dd2816ce9.png" 
                alt="XYZ Domains Logo" 
                className="h-12 md:h-16 object-contain" 
              />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-5 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/88fc5fde-fdb0-4da9-90fc-c9615dc04758.png" 
                alt="Cakes & More Logo" 
                className="h-12 md:h-16 object-contain" 
              />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 p-5 bg-cyber-black bg-opacity-80 rounded-lg shadow-glow-cyan-sm"
            >
              <img 
                src="/lovable-uploads/3504f0f9-b313-4fc4-a95a-7e7da5d23299.png" 
                alt="The Tarot Magic Logo" 
                className="h-12 md:h-16 object-contain" 
              />
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-display text-white mb-4">INTERESTED IN SPONSORING?</h3>
          <a 
            href="mailto:Hackquanta@gmail.com"
            className="inline-block cyber-box px-6 py-3 font-display hover:scale-105 transition-transform duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>

      <div className="datalines">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="dataline"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 30 + 20}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 5 + 10}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
