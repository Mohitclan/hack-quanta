
import React from 'react';

const SponsorsSection = () => {
  // Since the website has a dark theme, we'll use the white Devfolio logo version
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

        <div className="space-y-12">
          {/* Gold Tier Sponsors */}
          <div className="reveal">
            <h3 className="text-xl font-display text-neon-pink text-center mb-6">GOLD SPONSORS</h3>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {/* Gold tier is now empty */}
            </div>
          </div>
          
          {/* Silver Tier Sponsors */}
          <div className="reveal">
            <h3 className="text-xl font-display text-white text-center mb-6">SILVER SPONSORS</h3>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <a 
                href="https://devfolio.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-80 p-5"
              >
                <img 
                  src="/lovable-uploads/0740d959-a9b6-41fa-aea9-a2c5286376ac.png" 
                  alt="DEVFOLIO LOGO" 
                  className="h-12 md:h-16" 
                />
              </a>
            </div>
          </div>

          {/* Bronze Tier Sponsors */}
          <div className="reveal">
            <h3 className="text-xl font-display text-orange-400 text-center mb-6">BRONZE SPONSORS</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a 
                href="https://polygon.technology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-80 p-4"
              >
                <img 
                  src="/lovable-uploads/4dc66ebf-0022-4ea8-a904-f6a8618468b4.png" 
                  alt="ETHIndia LOGO" 
                  className="h-8 md:h-12" 
                />
              </a>
              <a 
                href="https://replit.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-80 p-4"
              >
                <img 
                  src="/lovable-uploads/b08f57e6-9810-4876-8272-8fd68caa8a36.png" 
                  alt="Partner LOGO" 
                  className="h-8 md:h-12" 
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-display text-white mb-4">INTERESTED IN SPONSORING?</h3>
          <a 
            href="#contact" 
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
