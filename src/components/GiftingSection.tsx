import React, { useState } from 'react';
import { Gift, Heart, Copy, Check, Sparkles, Smartphone, Mail } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const GiftingSection: React.FC = () => {
  const [copiedMpesa, setCopiedMpesa] = useState(false);

  const handleCopyMpesa = () => {
    navigator.clipboard.writeText(WEDDING_DETAILS.mpesaNumber);
    setCopiedMpesa(true);
    setTimeout(() => setCopiedMpesa(false), 2500);
  };

  return (
    <div className="bg-[#F5ECE0] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D4A359]/30">
      <section id="gifting" className="max-w-4xl mx-auto">
        
        <div className="bg-[#FDF8F2] border-2 border-[#D4A359]/80 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6 relative overflow-hidden">
          
          {/* Subtle Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C15C3D]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E3A2B]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] text-[#D4A359] text-xs font-semibold uppercase tracking-widest border border-[#D4A359]">
          <Gift className="w-3.5 h-3.5" />
          <span>A Note On Gifting</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
          Blessings & Appreciation
        </h2>

        {/* Exact Quote from Invitation Card */}
        <div className="max-w-xl mx-auto bg-[#FDF8F2] border border-[#D4A359]/60 rounded-2xl p-6 shadow-xs relative">
          <div className="font-serif text-lg sm:text-xl text-[#1E3A2B] leading-relaxed italic">
            "Your love and presence are the greatest gifts to us. Should you wish to bless us further, <span className="text-[#C15C3D] font-bold not-italic">enveloped gifts</span> will be deeply appreciated."
          </div>
          <div className="mt-3 font-script text-2xl text-[#C15C3D]">
            — Virginia & Kenneth
          </div>
        </div>

        {/* M-Pesa & Mobile Blessings Box */}
        <div className="max-w-md mx-auto bg-[#1E3A2B] text-[#FDF8F2] rounded-2xl p-5 border border-[#D4A359] shadow-md text-left space-y-3">
          
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#D4A359] text-[#1E3A2B] flex items-center justify-center shrink-0 font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-sans tracking-widest uppercase text-[#D4A359] font-bold">
                M-Pesa / Mobile Blessings
              </span>
              <span className="block font-serif text-base font-bold text-white">
                Send to Couple: {WEDDING_DETAILS.mpesaName}
              </span>
            </div>
          </div>

          <hr className="border-[#D4A359]/30" />

          <div className="flex items-center justify-between bg-[#2C4C3B] p-3 rounded-xl border border-[#D4A359]/40">
            <div>
              <span className="block text-[10px] text-[#F5ECE0]/80 uppercase">Phone Number</span>
              <span className="font-serif text-xl font-bold text-[#D4A359]">
                {WEDDING_DETAILS.formattedRsvpPhone}
              </span>
            </div>

            <button
              onClick={handleCopyMpesa}
              className="px-3 py-1.5 rounded-lg bg-[#C15C3D] hover:bg-[#A8482A] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              {copiedMpesa ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedMpesa ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  </div>
  );
};
