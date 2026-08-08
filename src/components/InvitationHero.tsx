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
    <section id="invitation" className="relative pt-6 pb-16 md:py-12 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
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
      <div className="relative bg-[#FDF8F2] rounded-3xl border-2 border-[#D4A359]/70 p-4 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
        

        {/* Geometric Side Patterns (Tribal Borders along left and right edge) */}
        <div className="absolute top-0 bottom-0 left-1 sm:left-2 z-10 pointer-events-none opacity-80">
          <SideTribalBorderSVG side="left" />
        </div>
        <div className="absolute top-0 bottom-0 right-1 sm:right-2 z-10 pointer-events-none opacity-80">
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

        {/* Inner Content Container */}
        <div className="text-center space-y-5 relative z-10 px-2 sm:px-8 md:px-12 py-2">
          
          {/* Top Emblem */}
          <TopEmblemSVG />

          {/* Subtitle Header */}
          <div className="inline-block">
            <p className="text-xs sm:text-sm md:text-base font-serif tracking-[0.25em] uppercase text-[#1E3A2B] font-semibold">
              You Are Cordially Invited To Our
            </p>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-widest text-[#C15C3D] font-bold uppercase mt-1 drop-shadow-2xs">
              Traditional
              <span className="block text-2xl sm:text-4xl md:text-5xl font-serif tracking-widest text-[#1E3A2B] font-bold mt-1">
                Wedding Ceremony
              </span>
            </h1>
          </div>

          {/* Couple's Names Calligraphy */}
          <div className="py-2 sm:py-4">
            <div className="relative inline-block px-4">
              <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-[#1E3A2B] leading-tight drop-shadow-xs">
                Virginia Mutuku
              </h2>
              <div className="my-1 sm:my-2 font-serif text-3xl sm:text-5xl text-[#C15C3D] italic font-medium">
                &
              </div>
              <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-[#1E3A2B] leading-tight drop-shadow-xs">
                Kenneth Abonyo
              </h2>
            </div>
            
            <p className="mt-4 max-w-lg mx-auto text-sm sm:text-base font-sans text-[#2C4C3B] italic">
              Together with our families, we joyfully invite you to our traditional wedding ceremony.
            </p>
          </div>

          {/* Key Event Details Pills (Date, Time, Venue) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto py-3">
            
            {/* Date Box */}
            <div className="bg-[#F5ECE0]/90 border border-[#D4A359]/70 rounded-2xl p-4 text-center hover:bg-[#F5ECE0] transition-all shadow-xs hover:shadow-md group">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#C15C3D]/10 text-[#C15C3D] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="block text-[11px] font-sans tracking-widest uppercase font-bold text-[#1E3A2B]">
                Date
              </span>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1E3A2B] mt-0.5">
                03 / 10 / 2026
              </span>
              <span className="text-[11px] font-sans text-[#C15C3D] font-medium">
                Saturday
              </span>
            </div>

            {/* Time Box */}
            <div className="bg-[#F5ECE0]/90 border border-[#D4A359]/70 rounded-2xl p-4 text-center hover:bg-[#F5ECE0] transition-all shadow-xs hover:shadow-md group">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#1E3A2B]/10 text-[#1E3A2B] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <span className="block text-[11px] font-sans tracking-widest uppercase font-bold text-[#1E3A2B]">
                Time
              </span>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1E3A2B] mt-0.5">
                10:00 AM
              </span>
              <span className="text-[11px] font-sans text-[#2C4C3B] font-medium">
                Punctuality Appreciated
              </span>
            </div>

            {/* Venue Box */}
            <div className="bg-[#F5ECE0]/90 border border-[#D4A359]/70 rounded-2xl p-4 text-center hover:bg-[#F5ECE0] transition-all shadow-xs hover:shadow-md group">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#C15C3D]/10 text-[#C15C3D] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="block text-[11px] font-sans tracking-widest uppercase font-bold text-[#1E3A2B]">
                Venue
              </span>
              <span className="block font-serif text-lg sm:text-xl font-bold text-[#1E3A2B] mt-0.5 line-clamp-1">
                COUNTRY LODGE
              </span>
              <span className="text-[11px] font-sans text-[#C15C3D] font-bold tracking-wide">
                TAWA
              </span>
            </div>

          </div>

          {/* RSVP Banner Box */}
          <div className="max-w-2xl mx-auto my-4 bg-gradient-to-r from-[#1E3A2B] via-[#2C4C3B] to-[#1E3A2B] text-white p-5 sm:p-6 rounded-2xl border border-[#D4A359] shadow-lg relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#D4A359]/20 blur-xl" />
            
            <div className="inline-block px-4 py-1 rounded-full bg-[#D4A359] text-[#1E3A2B] text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
              Kindly RSVP
            </div>

            <p className="text-sm sm:text-base text-[#F5ECE0] font-serif max-w-md mx-auto leading-relaxed">
              Please confirm your attendance by <strong className="text-white underline underline-offset-2">15th September 2026</strong>.
            </p>
          </div>

          {/* A Note on Gifting Box */}
          <div className="max-w-2xl mx-auto bg-[#F5ECE0]/80 border border-[#D4A359]/70 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
            <div className="flex items-center justify-center gap-2 mb-1.5 text-[#C15C3D]">
              <span className="h-[1px] w-8 bg-[#C15C3D]/40" />
              <Gift className="w-4 h-4" />
              <span className="text-xs font-serif uppercase tracking-widest font-bold">A Note On Gifting</span>
              <Gift className="w-4 h-4" />
              <span className="h-[1px] w-8 bg-[#C15C3D]/40" />
            </div>
            <p className="text-xs sm:text-sm text-[#1E3A2B] font-sans leading-relaxed">
              Your love and presence are the greatest gifts to us. Should you wish to bless us further, <strong className="text-[#C15C3D] font-serif italic text-base font-semibold">enveloped gifts</strong> will be deeply appreciated.
            </p>
          </div>

          {/* Closing Phrase */}
          <div className="pt-2">
            <p className="font-script text-3xl sm:text-4xl text-[#1E3A2B]">
              Your presence will make our day complete.
            </p>
          </div>

          {/* Quick Action Buttons Bar */}
          <div className="pt-6 border-t border-[#D4A359]/30 flex flex-wrap items-center justify-center gap-3 relative z-30">
            
            {/* Primary RSVP Scroll Link */}
            <a
              href="#rsvp"
              className="px-6 py-3 rounded-full bg-[#C15C3D] hover:bg-[#A8482A] text-white font-sans text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Heart className="w-4 h-4 text-white fill-white" />
              <span>Submit RSVP Online</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Add to Calendar Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                className="px-5 py-3 rounded-full bg-[#1E3A2B] hover:bg-[#2C4C3B] text-[#FDF8F2] font-sans text-sm font-semibold flex items-center gap-2 border border-[#D4A359] transition-all active:scale-95 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#D4A359]" />
                <span>Add to Calendar</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCalendarMenu ? 'rotate-180' : ''}`} />
              </button>

              {showCalendarMenu && (
                <div className="absolute right-0 bottom-full mb-2 w-52 bg-[#FDF8F2] border border-[#D4A359] rounded-2xl shadow-xl z-50 p-2 space-y-1 animate-fade-in">
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowCalendarMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-sans font-semibold text-[#1E3A2B] hover:bg-[#F5ECE0] rounded-xl transition-colors"
                  >
                    <span>📅</span>
                    <span>Google Calendar</span>
                  </a>
                  <button
                    onClick={downloadIcsFile}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-sans font-semibold text-[#1E3A2B] hover:bg-[#F5ECE0] rounded-xl transition-colors text-left"
                  >
                    <span>📲</span>
                    <span>Apple / Outlook (.ics)</span>
                  </button>
                </div>
              )}
            </div>

            {/* View Full Card Modal */}
            <button
              onClick={onOpenCardModal}
              className="px-4 py-3 rounded-full bg-[#F5ECE0] hover:bg-[#EBDCC8] text-[#1E3A2B] font-sans text-sm font-semibold flex items-center gap-2 border border-[#D4A359]/60 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-[#1E3A2B]" />
              <span>View Full Card</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
