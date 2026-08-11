import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle, Heart, Sparkles } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { BotanicalWaveDivider } from './SectionFlowDividers';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DETAILS.date).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Top Botanical Wave Transition from #FDF8F2 to #1E3A2B */}
      <BotanicalWaveDivider topColor="#FDF8F2" bottomColor="#1E3A2B" />

      {/* Main Full-Bleed Dark Emerald Section Band */}
      <section id="countdown" className="bg-[#1E3A2B] text-[#FDF8F2] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C15C3D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A359]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A359]/20 text-[#D4A359] text-xs font-semibold tracking-widest uppercase border border-[#D4A359]/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Counting Down To Our Blessed Day</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#FDF8F2] font-bold tracking-wide">
              Saturday, October 3, 2026
            </h2>

            <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#F5ECE0]/85 font-sans leading-relaxed">
              Join Virginia Mutuku &amp; Kenneth Abonyo as they exchange traditional vows, culture, &amp; blessings at Country Lodge Tawa.
            </p>
          </div>

          {/* Timer Display Grid */}
          {timeLeft.isPast ? (
            <div className="py-8 text-center text-[#D4A359] font-serif text-2xl font-bold">
              🎉 The Celebration Has Begun! Welcome Virginia &amp; Kenneth! 🎉
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto my-6">
              
              {/* Days */}
              <div className="bg-[#254433] border-2 border-[#D4A359]/60 rounded-2xl p-4 sm:p-5 shadow-lg transform hover:-translate-y-1 transition-transform">
                <span className="block font-serif text-4xl sm:text-6xl font-bold text-[#D4A359] drop-shadow-xs">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="block font-sans text-xs uppercase tracking-widest text-[#F5ECE0] mt-1 font-semibold">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-[#254433] border-2 border-[#D4A359]/60 rounded-2xl p-4 sm:p-5 shadow-lg transform hover:-translate-y-1 transition-transform">
                <span className="block font-serif text-4xl sm:text-6xl font-bold text-[#D4A359] drop-shadow-xs">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block font-sans text-xs uppercase tracking-widest text-[#F5ECE0] mt-1 font-semibold">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-[#254433] border-2 border-[#D4A359]/60 rounded-2xl p-4 sm:p-5 shadow-lg transform hover:-translate-y-1 transition-transform">
                <span className="block font-serif text-4xl sm:text-6xl font-bold text-[#D4A359] drop-shadow-xs">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block font-sans text-xs uppercase tracking-widest text-[#F5ECE0] mt-1 font-semibold">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-[#254433] border-2 border-[#C15C3D]/80 rounded-2xl p-4 sm:p-5 shadow-lg transform hover:-translate-y-1 transition-transform">
                <span className="block font-serif text-4xl sm:text-6xl font-bold text-[#C15C3D] drop-shadow-xs animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block font-sans text-xs uppercase tracking-widest text-[#F5ECE0] mt-1 font-semibold">
                  Seconds
                </span>
              </div>

            </div>
          )}

        </div>

      </section>

      {/* Bottom Botanical Wave Transition from #1E3A2B to #F5ECE0 */}
      <BotanicalWaveDivider topColor="#1E3A2B" bottomColor="#F5ECE0" />

    </div>
  );
};

