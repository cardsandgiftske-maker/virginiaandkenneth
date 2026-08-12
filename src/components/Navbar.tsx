import React, { useState } from 'react';
import { Calendar, Heart, MapPin, Gift, MessageSquare, Volume2, VolumeX, Menu, X, Sparkles, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenCardModal: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCardModal,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Invitation', href: '#invitation' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'RSVP', href: '#rsvp', highlight: true },
    { name: 'Venue', href: '#venue' },
    { name: 'Gifting', href: '#gifting' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#FDF8F2]/90 backdrop-blur-md border-b border-[#D4A359]/30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Monogram */}
          <a href="#invitation" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#1E3A2B] text-[#FDF8F2] flex items-center justify-center font-serif text-xl font-bold border border-[#D4A359] group-hover:scale-105 transition-transform shadow-xs">
              V&K
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-script text-2xl text-[#1E3A2B] leading-none">
                Virginia & Kenneth
              </span>
              <span className="block font-sans text-[10px] tracking-widest text-[#C15C3D] uppercase font-semibold">
                Ngasya &amp; Mathaa • Oct 3, 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  link.highlight
                    ? 'bg-[#C15C3D] text-white hover:bg-[#A8482A] shadow-xs hover:shadow-md'
                    : 'text-[#2C4C3B] hover:text-[#C15C3D] hover:bg-[#F5ECE0]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons: Audio Toggle & View Original Card */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleMusic}
              title={isPlayingMusic ? "Mute Background Music" : "Play Background Music"}
              className={`p-2 rounded-full border transition-colors flex items-center justify-center ${
                isPlayingMusic
                  ? 'bg-[#1E3A2B] text-[#D4A359] border-[#D4A359]'
                  : 'bg-[#F5ECE0] text-[#2C4C3B] border-[#D4A359]/40 hover:border-[#1E3A2B]'
              }`}
            >
              {isPlayingMusic ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenCardModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E3A2B] text-[#FDF8F2] text-xs font-medium border border-[#D4A359] hover:bg-[#2C4C3B] transition-colors"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Original Card</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1E3A2B] hover:bg-[#F5ECE0]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF8F2] border-b border-[#D4A359]/30 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-center text-sm font-medium ${
                  link.highlight
                    ? 'bg-[#C15C3D] text-white font-semibold'
                    : 'bg-[#F5ECE0]/70 text-[#1E3A2B] hover:bg-[#F5ECE0]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCardModal();
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1E3A2B] text-white text-sm font-medium border border-[#D4A359]"
          >
            <ImageIcon className="w-4 h-4 text-[#D4A359]" />
            <span>View Full Invitation Card Image</span>
          </button>
        </div>
      )}
    </nav>
  );
};
