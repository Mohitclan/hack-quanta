import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

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

      // Accordion items animation
      const accordionItems = accordionRef.current?.querySelectorAll('[data-accordion-item]');
      if (accordionItems) {
        gsap.fromTo(accordionItems,
          {
            opacity: 0,
            x: -50,
            rotationY: -15
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What is HACK QUANTA?",
      answer: "HACK QUANTA is a premier hackathon that brings together innovative minds to solve real-world problems using cutting-edge technology. It's a platform for collaboration, creativity, and breakthrough solutions."
    },
    {
      question: "Who can participate?",
      answer: "HACK QUANTA is open to students, professionals, and tech enthusiasts of all skill levels. Whether you're a beginner or an expert, there's a place for you in our hackathon."
    },
    {
      question: "What's the duration of the hackathon?",
      answer: "The hackathon spans 48 hours of intense coding, collaboration, and innovation. Participants will have access to mentors, resources, and workshops throughout the event."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or form teams of up to 4 members. We also facilitate team formation for those looking to connect with other participants."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects are evaluated based on innovation, technical complexity, impact potential, presentation quality, and adherence to the hackathon theme."
    },
    {
      question: "Are there any prerequisites?",
      answer: "Basic programming knowledge is recommended, but we welcome participants from diverse backgrounds. Enthusiasm and willingness to learn are the most important prerequisites."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black via-cyber-darkPurple/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-display font-black mb-6 neon-text tracking-wider"
          >
            FREQUENTLY ASKED
            <span className="block neon-text-cyan animate-pulse-glow-cyan">QUESTIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                data-accordion-item
                className="cyber-box bg-gradient-to-r from-cyber-darkPurple/30 to-cyber-purple/30 border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 group"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-white hover:text-neon-cyan transition-colors duration-300 group-hover:translate-x-2">
                  <span className="flex-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-neon-cyan text-sm font-display tracking-wider">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-neon-cyan"></div>
            <span>STILL HAVE QUESTIONS?</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-neon-cyan"></div>
          </div>
          <p className="text-gray-400 mt-2">Contact us at <span className="text-neon-pink">Hackquanta@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;