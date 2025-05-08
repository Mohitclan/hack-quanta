
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

  const renderTimeBlock = (value: number, label: string, glowClass: string) => (
    <div className="flex flex-col items-center p-1 sm:p-2">
      <div className="cyber-box mb-1 sm:mb-2 w-full p-1">
        <div className="bg-cyber-darkPurple p-1 sm:p-3 w-full">
          <span className={`text-lg sm:text-xl md:text-3xl font-display ${glowClass}`}>
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 w-full px-1">
      {renderTimeBlock(timeLeft.days, 'Days', 'animate-pulse-glow')}
      {renderTimeBlock(timeLeft.hours, 'Hours', 'animate-pulse-glow-cyan')}
      {renderTimeBlock(timeLeft.minutes, 'Minutes', 'animate-pulse-glow')}
      {renderTimeBlock(timeLeft.seconds, 'Seconds', 'animate-pulse-glow-cyan')}
    </div>
  );
};

export default CountdownTimer;
