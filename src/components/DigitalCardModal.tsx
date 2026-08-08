import React from 'react';
import { X, Download } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import {
  TopLeftFloralSVG,
  TopRightBasketAndFabricSVG,
  BottomLeftClayPotAndDrapeSVG,
  BottomRightFloralSVG,
  TopEmblemSVG,
  SideTribalBorderSVG,
} from './InvitationDecor';

interface DigitalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalCardModal: React.FC<DigitalCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FDF8F2] border-2 border-[#D4A359] rounded-3xl p-4 sm:p-6 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[#1E3A2B] text-white hover:bg-[#C15C3D] transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Digital Invitation Card High-Fidelity Decorated Rendering */}
        <div className="text-center space-y-4 border-2 border-[#D4A359]/70 p-4 sm:p-6 rounded-2xl bg-[#FDF8F2] relative overflow-hidden my-2">
          
          {/* Side Tribal Borders */}
          <div className="absolute top-0 bottom-0 left-0.5 z-10 opacity-70">
            <SideTribalBorderSVG side="left" />
          </div>
          <div className="absolute top-0 bottom-0 right-0.5 z-10 opacity-70">
            <SideTribalBorderSVG side="right" />
          </div>

          {/* 4 Corners Artworks */}
          <div className="absolute -top-3 -left-3 w-28 sm:w-36 h-auto z-20 pointer-events-none">
            <TopLeftFloralSVG className="w-full h-auto" />
          </div>
          <div className="absolute -top-2 -right-2 w-28 sm:w-36 h-auto z-20 pointer-events-none">
            <TopRightBasketAndFabricSVG className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-28 sm:w-36 h-auto z-20 pointer-events-none">
            <BottomLeftClayPotAndDrapeSVG className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-28 sm:w-36 h-auto z-20 pointer-events-none">
            <BottomRightFloralSVG className="w-full h-auto" />
          </div>

          <div className="relative z-10 space-y-3 px-2 sm:px-4 py-2">
            <TopEmblemSVG />

            <div className="text-[10px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#1E3A2B] font-bold">
              You Are Cordially Invited To Our
            </div>

            <h1 className="text-xl sm:text-2xl font-serif tracking-widest text-[#C15C3D] font-bold uppercase leading-snug">
              Traditional <br />
              <span className="text-[#1E3A2B]">Wedding Ceremony</span>
            </h1>

            <div className="py-1">
              <h2 className="font-script text-4xl sm:text-5xl text-[#1E3A2B]">
                Virginia Mutuku
              </h2>
              <div className="font-serif text-xl sm:text-2xl text-[#C15C3D] italic my-0.5">&</div>
              <h2 className="font-script text-4xl sm:text-5xl text-[#1E3A2B]">
                Kenneth Abonyo
              </h2>
            </div>

            <p className="text-[11px] text-[#2C4C3B] italic max-w-xs mx-auto">
              Together with our families, we joyfully invite you to our traditional wedding ceremony.
            </p>

            <div className="grid grid-cols-3 gap-1.5 py-2.5 bg-[#F5ECE0] rounded-xl border border-[#D4A359]/60 text-[11px]">
              <div>
                <span className="block font-bold text-[#1E3A2B] text-[9px] uppercase tracking-wider">DATE</span>
                <span className="text-[#C15C3D] font-bold">03/10/2026</span>
              </div>
              <div>
                <span className="block font-bold text-[#1E3A2B] text-[9px] uppercase tracking-wider">TIME</span>
                <span className="text-[#1E3A2B] font-bold">10:00 AM</span>
              </div>
              <div>
                <span className="block font-bold text-[#1E3A2B] text-[9px] uppercase tracking-wider">VENUE</span>
                <span className="text-[#C15C3D] font-bold truncate block">TAWA</span>
              </div>
            </div>

            <div className="bg-[#1E3A2B] text-[#FDF8F2] p-2.5 rounded-xl border border-[#D4A359] text-[11px]">
              <span className="font-bold text-[#D4A359] uppercase block mb-0.5 text-[10px]">KINDLY RSVP</span>
              <span>Phone: {WEDDING_DETAILS.rsvpPhone}</span>
              <span className="block text-[9px] text-[#F5ECE0]/80 mt-0.5">Please confirm by 15th September 2026</span>
            </div>

            <p className="font-script text-xl sm:text-2xl text-[#1E3A2B] pt-1">
              Your presence will make our day complete.
            </p>
          </div>

        </div>

        {/* Action Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-[#C15C3D] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#A8482A] transition-colors shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save Invitation</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1E3A2B] text-white text-xs font-bold hover:bg-[#2C4C3B] transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

