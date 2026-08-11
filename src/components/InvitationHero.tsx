import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, Heart, Share2, Download, Gift, ArrowRight, Sparkles, Music, MessageCircle, ChevronDown, Check } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { weddingAudio } from '../lib/weddingAudio';
import {
  TopLeftFloralSVG,
  TopRightBasketAndFabricSVG,
  BottomLeftClayPotAndDrapeSVG,
  BottomRightFloralSVG,
  TopEmblemSVG,
  SideTribalBorderSVG,
} from './InvitationDecor';

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
          title: 'Virginia & Kenneth Traditional Wedding Ceremony',
          text: 'You are cordially invited to Virginia Mutuku & Kenneth Abonyo Traditional Wedding Ceremony on Oct 3, 2026 at Country Lodge Tawa.',
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
    'Virginia Mutuku & Kenneth Abonyo Traditional Wedding Ceremony'
  )}&dates=20261003T070000Z/20261003T150000Z&details=${encodeURIComponent(
    'Together with our families, we joyfully invite you to our traditional wedding ceremony. RSVP by Sept 15, 2026: ' +
      WEDDING_DETAILS.rsvpPhone
  )}&location=${encodeURIComponent('Country Lodge Tawa, Machakos County')}`;

  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Virginia and Kenneth Traditional Wedding//EN
BEGIN:VEVENT
UID:wedding-vk-20261003@tradwedding.ke
DTSTAMP:20261003T070000Z
DTSTART:20261003T070000Z
DTEND:20261003T150000Z
SUMMARY:Virginia Mutuku & Kenneth Abonyo Traditional Wedding Ceremony
DESCRIPTION:Together with our families\\, we joyfully invite you to our traditional wedding ceremony at Country Lodge Tawa. RSVP Phone: ${WEDDING_DETAILS.rsvpPhone}
LOCATION:Country Lodge\\, Tawa\\, Machakos County
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Virginia_and_Kenneth_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCalendarMenu(false);
  };

  const whatsappUrl = `https://wa.me/254741912468?text=${encodeURIComponent(
    'Hello Virginia & Kenneth! I would love to confirm my attendance for your Traditional Wedding Ceremony on Oct 3, 2026.'
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

      {/* Decorative Outer Shadow Frame */}
      <div className="relative bg-[#FDF8F2] w-full border-y-2 sm:border-2 border-[#D4A359]/70 p-4 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
        

        {/* Geometric Side Patterns (Tribal Borders along left and right edge) */}
        <div className="absolute top-0 bottom-0 left-0 sm:left-2 z-10 pointer-events-none opacity-80">
          <SideTribalBorderSVG side="left" />
        </div>
        <div className="absolute top-0 bottom-0 right-0 sm:right-2 z-10 pointer-events-none opacity-80">
          <SideTribalBorderSVG side="right" />
        </div>

        {/* 4 CORNERS DECORATIONS (Matching traditional wedding motif artwork) */}
        
        {/* Top-Left: Cream Roses, Terracotta Daisy, Eucalyptus & Berries */}
        <div className="absolute -top-3 -left-3 w-36 sm:w-56 md:w-64 h-auto z-20 pointer-events-none">
          <TopLeftFloralSVG className="w-full h-auto drop-shadow-sm" />
        </div>

        {/* Top-Right: Traditional Woven Basket & Draped Sage Fabric */}
        <div className="absolute -top-2 -right-2 w-32 sm:w-52 md:w-60 h-auto z-20 pointer-events-none">
          <TopRightBasketAndFabricSVG className="w-full h-auto drop-shadow-sm" />
        </div>

        {/* Bottom-Left: Earthenware Clay Pot, Gourds & Draped Terracotta Fabric */}
        <div className="absolute -bottom-2 -left-2 w-36 sm:w-56 md:w-64 h-auto z-20 pointer-events-none">
          <BottomLeftClayPotAndDrapeSVG className="w-full h-auto drop-shadow-sm" />
        </div>

        {/* Bottom-Right: Cream Rose & Terracotta Floral Arrangement */}
        <div className="absolute -bottom-3 -right-3 w-32 sm:w-52 md:w-60 h-auto z-20 pointer-events-none">
          <BottomRightFloralSVG className="w-full h-auto drop-shadow-sm" />
        </div>

        {/* Inner Content Container - Following exact format from image */}
        <div className="text-center space-y-5 sm:space-y-6 relative z-10 px-2 sm:px-6 py-4 max-w-xl mx-auto">
          
          {/* Top Traditional Geometric Symbol Emblem */}
          <TopEmblemSVG className="w-full max-w-xs sm:max-w-md mx-auto -mb-2" />

          {/* 1. Top Heading */}
          <div className="my-1 px-2">
            <h2 className="text-sm sm:text-base md:text-lg font-serif tracking-[0.22em] font-bold text-[#C15C3D] uppercase leading-snug drop-shadow-2xs max-w-lg mx-auto">
              TRADITIONAL WEDDING CEREMONY
              <span className="block text-xs sm:text-sm font-serif tracking-[0.3em] text-[#1E3A2B] font-bold mt-1 uppercase">
                INVITATION
              </span>
            </h2>
          </div>

          {/* 2. Subheading Eyebrow */}
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.3em] uppercase text-[#B8860B] font-semibold">
            TOGETHER WITH THEIR FAMILIES,
          </p>

          {/* 3. Couple's Names Calligraphy */}
          <div className="space-y-1 my-2 overflow-hidden">
            <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-[#C15C3D] drop-shadow-xs leading-tight whitespace-nowrap px-1">
              Virginia Mutuku
            </h1>
            <div className="font-serif italic text-xl sm:text-2xl text-[#D4A359] my-0.5">
              &amp;
            </div>
            <h1 className="font-script text-3xl sm:text-5xl md:text-6xl text-[#C15C3D] drop-shadow-xs leading-tight whitespace-nowrap px-1">
              Kenneth Abonyo
            </h1>
            {/* Subtle horizontal gold line bar */}
            <div className="w-16 h-[1.5px] bg-[#D4A359] mx-auto mt-3 opacity-80" />
          </div>

          {/* 4. Invitation Sentence */}
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.22em] uppercase text-[#1E3A2B] font-semibold leading-relaxed max-w-md mx-auto px-4">
            CORDIALLY INVITE YOU TO CELEBRATE THEIR TRADITIONAL CEREMONY
          </p>

          {/* 5. Save Our Date Floating Card */}
          <div className="relative my-6 max-w-sm mx-auto bg-white/95 rounded-2xl p-5 sm:p-6 shadow-md border border-[#D4A359]/40 flex flex-col items-center justify-center">
            {/* Left & Right Accent Dots */}
            <span className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#2C4C3B] border-2 border-white shadow-xs" />
            <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#2C4C3B] border-2 border-white shadow-xs" />

            <span className="text-[10px] font-sans tracking-[0.25em] uppercase font-bold text-[#B8860B] mb-1.5">
              SAVE OUR DATE
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#1E3A2B] tracking-wider">
              OCTOBER 03, 2026
            </span>
          </div>

          {/* 6. Venue Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 border border-[#D4A359]/50 shadow-2xs text-xs font-sans text-[#2C4C3B] max-w-xs mx-auto">
            <MapPin className="w-3.5 h-3.5 text-[#C15C3D] shrink-0" />
            <span className="font-medium">Country Lodge, Tawa</span>
          </div>

          {/* 7. Celebration Details Scroll Indicator */}
          <div className="pt-8 pb-2 flex flex-col items-center gap-1.5 text-[#B8860B]">
            <a href="#details" className="group flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-serif tracking-[0.22em] uppercase font-semibold text-[#1E3A2B]/80 group-hover:text-[#C15C3D] transition-colors">
                THE CELEBRATION DETAILS
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#C15C3D]" />
            </a>
          </div>

          {/* 8. Bottom Action Buttons Bar (Matching bottom pill layout) */}
          <div className="pt-4 border-t border-[#D4A359]/30 flex flex-wrap items-center justify-between gap-3 relative z-30">
            {/* Confirm Attendance Pill Button */}
            <a
              href="#rsvp"
              className="px-5 py-2.5 rounded-full bg-[#2C4C3B] hover:bg-[#1E3A2B] text-white font-sans text-xs font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95 uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <Check className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>CONFIRM ATTENDANCE</span>
            </a>

            {/* Quick Action Controls: Share */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#F5ECE0] hover:bg-[#EBDCC8] text-[#1E3A2B] border border-[#D4A359]/60 transition-all active:scale-95"
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
