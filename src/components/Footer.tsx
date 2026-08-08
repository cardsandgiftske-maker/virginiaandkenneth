import React from 'react';
import { Heart, Phone, MapPin, Calendar, ArrowUp, ShieldCheck } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E3A2B] text-[#FDF8F2] border-t-2 border-[#D4A359] pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        
        {/* Heart Logo */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-12 bg-[#D4A359]/40" />
          <div className="w-10 h-10 rounded-full bg-[#D4A359] text-[#1E3A2B] flex items-center justify-center font-serif text-lg font-bold">
            V&K
          </div>
          <span className="h-[1px] w-12 bg-[#D4A359]/40" />
        </div>

        {/* Closing Phrase */}
        <div className="space-y-1">
          <h2 className="font-script text-4xl sm:text-5xl text-[#D4A359]">
            Virginia Mutuku & Kenneth Abonyo
          </h2>
          <p className="font-serif text-lg text-[#F5ECE0] italic">
            "Your presence will make our day complete."
          </p>
        </div>

        {/* Quick Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5ECE0]/90 font-sans">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#D4A359]" />
            <span>Saturday, October 3, 2026</span>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C15C3D]" />
            <span>Country Lodge, Tawa</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#D4A359]" />
            <span>RSVP: {WEDDING_DETAILS.rsvpPhone}</span>
          </div>
        </div>

        <hr className="border-[#D4A359]/30" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5ECE0]/60 gap-4">
          <p>© 2026 Virginia & Kenneth Traditional Wedding Ceremony.</p>

          <div className="flex items-center gap-4">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-[#D4A359] hover:text-white transition-colors bg-[#D4A359]/10 hover:bg-[#D4A359]/20 px-3 py-1 rounded-full border border-[#D4A359]/40"
                title="Admin RSVP Dashboard"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>Admin Panel</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#D4A359] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

