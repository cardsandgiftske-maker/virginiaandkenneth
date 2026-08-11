import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Music, Award, Heart, Utensils, Gift, Sparkles, ChevronRight } from 'lucide-react';
import { TIMELINE, WEDDING_DETAILS } from '../data/weddingData';

export const EventDetails: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Music': return <Music className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5 fill-current" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Gift': return <Gift className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="schedule" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C15C3D]/10 text-[#C15C3D] text-xs font-semibold uppercase tracking-widest border border-[#C15C3D]/30">
          <Clock className="w-3.5 h-3.5" />
          <span>Order of Events</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
          Celebration Itinerary & Program
        </h2>
        
        <p className="max-w-xl mx-auto text-sm text-[#2C4C3B] font-sans">
          Join us as we observe beautiful cultural traditions, joyful songs, feast, and bless the union of Virginia & Kenneth.
        </p>
      </div>

      {/* Program Timeline */}
      <div className="relative border-l-2 border-[#D4A359]/60 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-8">
        
        {TIMELINE.map((item, index) => {
          const isActive = activeItem === index;

          return (
            <div
              key={index}
              onClick={() => setActiveItem(index)}
              className="relative cursor-pointer group"
            >
              {/* Left Time Badge (Desktop) */}
              <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-serif text-sm font-bold text-[#1E3A2B] group-hover:text-[#C15C3D] transition-colors">
                <span className="bg-[#F5ECE0] px-2 py-1 rounded-md border border-[#D4A359]/40 inline-block shadow-2xs">
                  {item.time}
                </span>
              </div>

              {/* Node Circle */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#C15C3D] border-[#1E3A2B] text-white shadow-md scale-110'
                    : 'bg-[#FDF8F2] border-[#D4A359] text-[#1E3A2B] group-hover:border-[#C15C3D]'
                }`}
              >
                {getIcon(item.iconName)}
              </div>

              {/* Event Content Card */}
              <div
                className={`rounded-2xl p-5 border transition-all ${
                  isActive
                    ? 'bg-[#F5ECE0] border-[#D4A359] shadow-md'
                    : 'bg-[#FDF8F2] border-[#D4A359]/30 hover:border-[#D4A359] shadow-2xs'
                }`}
              >
                {/* Mobile Time Tag */}
                <span className="sm:hidden inline-block mb-2 text-xs font-serif font-bold text-[#C15C3D] bg-[#C15C3D]/10 px-2.5 py-0.5 rounded-full border border-[#C15C3D]/30">
                  {item.time}
                </span>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E3A2B]">
                    {item.title}
                  </h3>
                  <ChevronRight className={`w-5 h-5 text-[#D4A359] transition-transform ${isActive ? 'rotate-90 text-[#C15C3D]' : ''}`} />
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[#2C4C3B] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
};
