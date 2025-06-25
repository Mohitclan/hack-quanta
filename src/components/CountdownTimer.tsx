
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const isMobile = useIsMobile();
  
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderTimeBlock = (value: number, label: string, glowClass: string, bgColor: string) => (
    <div className="flex flex-col items-center p-1 sm:p-2 group">
      <div className="cyber-box mb-2 w-full p-1 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className={`${bgColor} p-3 sm:p-4 w-full relative z-10 rounded-sm`}>
          <span className={`text-xl sm:text-2xl md:text-4xl font-display font-black ${glowClass} block text-center tracking-wider`}>
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-widest font-display font-bold">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-6 w-full px-2 py-4">
      {renderTimeBlock(timeLeft.days, 'Days', 'neon-text', 'bg-gradient-to-br from-cyber-darkPurple to-cyber-purple')}
      {renderTimeBlock(timeLeft.hours, 'Hours', 'neon-text-cyan', 'bg-gradient-to-br from-cyber-purple to-cyber-darkPurple')}
      {renderTimeBlock(timeLeft.minutes, 'Minutes', 'neon-text', 'bg-gradient-to-br from-cyber-darkPurple to-cyber-purple')}
      {renderTimeBlock(timeLeft.seconds, 'Seconds', 'neon-text-cyan', 'bg-gradient-to-br from-cyber-purple to-cyber-darkPurple')}
    </div>
  );
};

export default CountdownTimer;
