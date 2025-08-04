
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import SponsorsSection from '@/components/SponsorsSection';
import TrackSection from '@/components/TrackSection';
import FAQSection from '@/components/FAQSection';
import ScheduleSection from '@/components/ScheduleSection';
import WinnerPrizeSection from '@/components/WinnerPrizeSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation for reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    const fadeCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px" // Ensures elements start animating a bit before they come into view
    });

    const fadeObserver = new IntersectionObserver(fadeCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
    fadeElements.forEach(el => fadeObserver.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      fadeElements.forEach(el => fadeObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden pt-24">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WinnerPrizeSection />
      <TrackSection />
      <ScheduleSection />
      <SponsorsSection />
      <FAQSection />
      <ComingSoonSection />
      <Footer />
    </div>
  );
};

export default Index;
