import React, { useState, useEffect } from 'react';
import { MapPin, Share2, ChevronDown, Check, Volume2, VolumeX, Image as ImageIcon } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { weddingAudio } from '../lib/weddingAudio';
import { UploadedTribalDiamondSymbolSVG } from './InvitationDecor';
import africanPatternBg from '../assets/images/african_pattern_bg_1786615704409.jpg';

interface InvitationHeroProps {
  onOpenCardModal: () => void;
}

interface PetalItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'petal' | 'gold' | 'rose' | 'leaf';
}

export const InvitationHero: React.FC<InvitationHeroProps> = ({ onOpenCardModal }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [shared, setShared] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [petals, setPetals] = useState<PetalItem[]>([]);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [daysToGo, setDaysToGo] = useState<number>(0);

  // Calculate days remaining to October 3, 2026
  useEffect(() => {
    const weddingDate = new Date('2026-10-03T10:00:00').getTime();
    const updateDays = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      if (difference > 0) {
        setDaysToGo(Math.ceil(difference / (1000 * 60 * 60 * 24)));
      } else {
        setDaysToGo(0);
      }
    };
    updateDays();
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(WEDDING_DETAILS.rsvpPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleToggleAudio = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingAudio(isPlaying);
  };

  const triggerShowerBlessings = () => {
    const newPetals: PetalItem[] = Array.from({ length: 35 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 92 + 4, // %
      size: Math.floor(Math.random() * 16) + 12, // px
      duration: Math.random() * 2 + 3.5, // seconds
      delay: Math.random() * 1.5, // seconds
      type: ['petal', 'gold', 'rose', 'leaf'][Math.floor(Math.random() * 4)] as PetalItem['type'],
    }));

    setPetals((prev) => [...prev, ...newPetals]);

    // Clear after animation finishes
    setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.includes(p)));
    }, 6000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Virginia & Kenneth Ngasya & Mathaa Ceremony',
          text: 'You are cordially invited to Virginia Mutuku & Kenneth Abonyo Ngasya & Mathaa Ceremony on Oct 3, 2026 at Country Lodge Tawa.',
          url: window.location.href,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2500);
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    }
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Virginia Mutuku & Kenneth Abonyo Ngasya & Mathaa Ceremony'
  )}&dates=20261003T070000Z/20261003T150000Z&details=${encodeURIComponent(
    'Together with our families, we joyfully invite you to our Ngasya & Mathaa ceremony. RSVP by Sept 15, 2026: ' +
      WEDDING_DETAILS.rsvpPhone
  )}&location=${encodeURIComponent('Country Lodge Tawa, Machakos County')}`;

  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Virginia and Kenneth Ngasya and Mathaa Ceremony//EN
BEGIN:VEVENT
UID:wedding-vk-20261003@tradwedding.ke
DTSTAMP:20261003T070000Z
DTSTART:20261003T070000Z
DTEND:20261003T150000Z
SUMMARY:Virginia Mutuku & Kenneth Abonyo Ngasya & Mathaa Ceremony
DESCRIPTION:Together with our families\\, we joyfully invite you to our Ngasya & Mathaa ceremony at Country Lodge Tawa. RSVP Phone: ${WEDDING_DETAILS.rsvpPhone}
LOCATION:Country Lodge\\, Tawa\\, Machakos County
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Virginia_and_Kenneth_Ngasya_and_Mathaa_Ceremony.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCalendarMenu(false);
  };

  const whatsappUrl = `https://wa.me/254741912468?text=${encodeURIComponent(
    'Hello Virginia & Kenneth! I would love to confirm my attendance for your Ngasya & Mathaa Ceremony on Oct 3, 2026.'
  )}`;

  return (
    <section id="invitation" className="relative pt-0 pb-12 md:pb-16 w-full px-0">
      
      {/* Falling Flowers & Golden Blessings Petals Container */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {petals.map((p) => (
          <div
            key={p.id}
            className="absolute animate-drop-petal"
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {p.type === 'petal' && (
              <span className="inline-block text-[#C15C3D]" style={{ fontSize: `${p.size}px` }}>
                🌸
              </span>
            )}
            {p.type === 'rose' && (
              <span className="inline-block text-[#D86B47]" style={{ fontSize: `${p.size}px` }}>
                🌹
              </span>
            )}
            {p.type === 'gold' && (
              <span className="inline-block text-[#D4A359]" style={{ fontSize: `${p.size}px` }}>
                ✨
              </span>
            )}
            {p.type === 'leaf' && (
              <span className="inline-block text-[#2C4C3B]" style={{ fontSize: `${p.size}px` }}>
                🌿
              </span>
            )}
          </div>
        ))}
      </div>

      {/* African Pattern Background Layer with Soft Sage Green Blend & Low Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-3 mix-blend-multiply" 
        style={{ backgroundImage: `url(${africanPatternBg})` }}
      />
      {/* Sage Green Soft Tint Overlay for enhanced legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8A9A86]/10 via-[#8A9A86]/5 to-[#FDF8F2]/40 pointer-events-none" />

      {/* Hero Invitation Contents */}
      <div className="relative z-10 px-4 sm:px-12 md:px-16 pt-10 sm:pt-14 pb-16 sm:pb-24 max-w-2xl mx-auto text-center">
        
        {/* Inner Content Container */}
        <div className="space-y-4 sm:space-y-6 relative z-10 max-w-xl mx-auto">

          {/* Top Tribal Diamond Geometric Emblem */}
          <div className="flex justify-center mb-1 sm:mb-2">
            <UploadedTribalDiamondSymbolSVG size={160} className="drop-shadow-2xs" />
          </div>

          {/* 1. Ceremony Header */}
          <div className="space-y-1">
            <h2 className="text-xs sm:text-base md:text-lg font-serif tracking-[0.2em] sm:tracking-[0.25em] font-bold text-[#C15C3D] uppercase leading-snug">
              NGASYA &amp; MATHAA CEREMONY
            </h2>
            <p className="text-[11px] sm:text-sm font-serif tracking-[0.28em] text-[#1E3A2B] font-bold uppercase">
              INVITATION
            </p>
          </div>

          <div className="w-16 sm:w-24 h-[1px] bg-[#D4A359]/40 mx-auto" />

          {/* 2. Subheading Eyebrow */}
          <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#B8860B] font-bold">
            TOGETHER WITH THEIR FAMILIES,
          </p>

          {/* 3. Couple's Names Calligraphy - DOMINANT CENTERPIECE */}
          <div className="py-1 sm:py-3 space-y-1 sm:space-y-2">
            <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#B93815] font-bold leading-tight tracking-wide px-1">
              Virginia Mutuku
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#B8860B] my-1 sm:my-2">
              <span className="w-10 sm:w-20 h-[1px] bg-[#D4A359]/50" />
              <span className="font-script text-2xl sm:text-4xl text-[#B93815] font-bold">&amp;</span>
              <span className="w-10 sm:w-20 h-[1px] bg-[#D4A359]/50" />
            </div>
            <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#B93815] font-bold leading-tight tracking-wide px-1">
              Kenneth Abonyo
            </h1>
          </div>

          <p className="text-[10px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#1E3A2B] font-semibold leading-relaxed max-w-md mx-auto px-1">
            CORDIALLY INVITE YOU TO CELEBRATE THEIR NGASYA &amp; MATHAA CEREMONY
          </p>

          <div className="w-16 sm:w-24 h-[1px] bg-[#D4A359]/40 mx-auto" />

          {/* 4. Featured Scripture Blessing Card */}
          <div className="my-3 sm:my-4 px-4 sm:px-6 py-3.5 bg-[#FAF7F2] rounded-xl border border-[#E5E0D8] max-w-md mx-auto text-center space-y-1.5 shadow-2xs">
            <p className="text-[9px] sm:text-[10px] font-sans tracking-widest font-bold text-[#854D0E] uppercase">
              SCRIPTURE BLESSING
            </p>
            <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#2C3E35] font-medium leading-relaxed">
              “{WEDDING_DETAILS.bibleVerse.text}”
            </p>
            <p className="text-[10px] sm:text-[11px] font-serif tracking-[0.2em] font-bold text-[#EA580C] uppercase pt-0.5">
              — {WEDDING_DETAILS.bibleVerse.reference} —
            </p>
          </div>

          {/* 5. Date & Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-md mx-auto text-center">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5E0D8] flex flex-col justify-center items-center">
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#854D0E] mb-1">
                DATE
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#111827]">
                OCTOBER 03, 2026
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5E0D8] flex flex-col justify-center items-center">
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#854D0E] mb-1">
                LOCATION
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#111827] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C15C3D] shrink-0" />
                Country Lodge, Tawa
              </span>
            </div>
          </div>

          {/* 6. Celebration Details Scroll Indicator */}
          <div className="pt-6 pb-2 flex flex-col items-center gap-1.5 text-[#B8860B]">
            <a href="#details" className="group flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-serif tracking-[0.22em] uppercase font-semibold text-[#1E3A2B]/80 group-hover:text-[#C15C3D] transition-colors">
                THE CELEBRATION DETAILS
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#C15C3D]" />
            </a>
          </div>

          {/* 7. Bottom Action Buttons Bar */}
          <div className="pt-5 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3 relative z-30">
            {/* Confirm Attendance Pill Button */}
            <a
              href="#rsvp"
              className="px-6 py-2.5 rounded-full bg-[#2C4C3B] hover:bg-[#1E3A2B] text-white font-sans text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95 uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <Check className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>CONFIRM ATTENDANCE</span>
            </a>

            {/* Quick Action Controls: Music, View Card & Share */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleAudio}
                className="p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F0EAE1] text-[#1E3A2B] border border-[#E5E0D8] transition-all active:scale-95 flex items-center gap-1.5"
                title={isPlayingAudio ? "Mute Background Music" : "Play Background Music"}
              >
                {isPlayingAudio ? (
                  <Volume2 className="w-4 h-4 text-[#C15C3D] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-[#1E3A2B]" />
                )}
              </button>

              <button
                onClick={onOpenCardModal}
                className="p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F0EAE1] text-[#1E3A2B] border border-[#E5E0D8] transition-all active:scale-95"
                title="View Full Card Image"
              >
                <ImageIcon className="w-4 h-4 text-[#1E3A2B]" />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F0EAE1] text-[#1E3A2B] border border-[#E5E0D8] transition-all active:scale-95"
                title="Share Invitation"
              >
                <Share2 className="w-4 h-4 text-[#1E3A2B]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
