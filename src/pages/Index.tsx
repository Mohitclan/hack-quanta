
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation for reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    
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

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ComingSoonSection />
      <Footer />
    </div>
  );
};

export default Index;
