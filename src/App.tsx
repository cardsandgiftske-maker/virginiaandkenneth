import React, { useState } from 'react';
import { InvitationHero } from './components/InvitationHero';
import { Countdown } from './components/Countdown';
import { RsvpSection } from './components/RsvpSection';
import { VenueSection } from './components/VenueSection';
import { GiftingSection } from './components/GiftingSection';
import { Footer } from './components/Footer';
import { DigitalCardModal } from './components/DigitalCardModal';
import { AdminModal } from './components/AdminModal';
import { FlowingVineConnector } from './components/SectionFlowDividers';
import { VintageEnvelopeWrapper } from './components/VintageEnvelopeWrapper';
import { weddingAudio } from './lib/weddingAudio';

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleToggleMusic = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingMusic(isPlaying);
  };

  return (
    <VintageEnvelopeWrapper
      isPlayingMusic={isPlayingMusic}
      onToggleMusic={handleToggleMusic}
    >
      <div className="min-h-screen bg-[#FDF8F2] text-[#2C3E35] font-sans selection:bg-[#C15C3D]/20 selection:text-[#C15C3D]">
        
        {/* Main Flowing Content Area */}
        <main className="relative">
          
          {/* SECTION 1: Greeting / Invitation Hero */}
          <InvitationHero onOpenCardModal={() => setIsCardModalOpen(true)} />

          {/* Story Connector 1 */}
          <FlowingVineConnector label="Counting Down" />

          {/* SECTION 2: Live Countdown Timer */}
          <Countdown />

          {/* Story Connector 2 */}
          <FlowingVineConnector label="Where" />

          {/* SECTION 3: Location, Venue & Travel Details */}
          <VenueSection />

          {/* Story Connector 3 */}
          <FlowingVineConnector label="Confirm Attendance" />

          {/* SECTION 4: Interactive RSVP Form */}
          <RsvpSection />

          {/* Story Connector 4 */}
          <FlowingVineConnector label="Love & Appreciation" />

          {/* SECTION 5: A Note on Gifting & M-Pesa details */}
          <GiftingSection />

        </main>

        {/* Footer */}
        <Footer onOpenAdmin={() => setIsAdminModalOpen(true)} />

        {/* Modal to view printable/downloadable invitation card */}
        <DigitalCardModal
          isOpen={isCardModalOpen}
          onClose={() => setIsCardModalOpen(false)}
        />

        {/* Password-protected Admin Panel Modal */}
        <AdminModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
        />

      </div>
    </VintageEnvelopeWrapper>
  );
}


