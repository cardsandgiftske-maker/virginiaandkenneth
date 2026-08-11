import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#1E3A2B] text-[#FDF8F2] border-t-2 border-[#D4A359] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        
        {/* VK Monogram Crest */}
        <div className="w-14 h-14 rounded-full border border-[#D4A359] bg-[#1E3A2B] shadow-sm flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-1.5 font-serif text-base font-semibold text-[#FDF8F2] tracking-widest">
            <span>V</span>
            <span className="text-[#D4A359] font-light text-xs">|</span>
            <span>K</span>
          </div>
          <span className="text-[#D4A359] text-[9px] -mt-0.5">🌿</span>
        </div>

        {/* Copyright Note & Admin Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#F5ECE0]/70">
          <p>© 2026 Virginia &amp; Kenneth Traditional Wedding Ceremony.</p>

          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 text-[#D4A359] hover:text-white transition-colors bg-[#D4A359]/10 hover:bg-[#D4A359]/20 px-3 py-1 rounded-full border border-[#D4A359]/40 text-[11px]"
              title="Admin RSVP Dashboard"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Admin Panel</span>
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};


