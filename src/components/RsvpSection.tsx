import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, CheckCircle2, Phone, Users, AlertCircle, Calendar, MapPin, Download, Edit3, Sparkles, Loader2, MessageSquare } from 'lucide-react';
import { RsvpResponse } from '../types';
import { WEDDING_DETAILS } from '../data/weddingData';
import { submitRsvpToFirestore, getRecentRsvpsFromFirestore, findRsvpByPhone, updateRsvpInFirestore } from '../lib/firebase';

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attending: 'yes' as 'yes' | 'no',
    guestCount: 1,
    dietary: '',
    message: '',
  });

  const [submittedRsvp, setSubmittedRsvp] = useState<RsvpResponse | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentWishes, setRecentWishes] = useState<any[]>([]);

  useEffect(() => {
    // Check if RSVP exists in localStorage
    const saved = localStorage.getItem('vk_wedding_rsvp');
    if (saved) {
      try {
        setSubmittedRsvp(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved RSVP');
      }
    }

    // Load recent warm wishes from Firestore
    loadWishes();
  }, []);

  const loadWishes = async () => {
    const wishes = await getRecentRsvpsFromFirestore(8);
    setRecentWishes(wishes.filter((w: any) => w.message && typeof w.message === 'string' && w.message.trim().length > 0));
  };

  const handleStartEdit = () => {
    if (submittedRsvp) {
      setFormData({
        name: submittedRsvp.name || '',
        phone: submittedRsvp.phone || '',
        email: '',
        attending: submittedRsvp.attending || 'yes',
        guestCount: submittedRsvp.guestCount || 1,
        dietary: '',
        message: submittedRsvp.message || '',
      });
    }
    setIsEditing(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanedPhone = formData.phone.trim();
    if (!formData.name.trim() || !cleanedPhone) {
      setErrorMessage('Please provide your full name and phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Check if phone number already exists in Firestore
      const existingDoc = await findRsvpByPhone(cleanedPhone);

      // If existing document found and it's NOT the user's current edit session:
      if (existingDoc && (!isEditing || (submittedRsvp && submittedRsvp.id !== existingDoc.id))) {
        // If current user didn't have local pass set, set it to existing pass and notify them
        if (!submittedRsvp) {
          const loadedRsvp: RsvpResponse = {
            id: existingDoc.id,
            name: existingDoc.fullName,
            phone: existingDoc.phone,
            attending: existingDoc.attending,
            guestCount: existingDoc.guestCount,
            message: existingDoc.message || '',
            submittedAt: new Date().toISOString(),
          };
          localStorage.setItem('vk_wedding_rsvp', JSON.stringify(loadedRsvp));
          setSubmittedRsvp(loadedRsvp);
        }
        setErrorMessage(`An RSVP has already been submitted for phone number "${cleanedPhone}". Each phone number can only RSVP once.`);
        setIsSubmitting(false);
        return;
      }

      let firestoreDocId = submittedRsvp?.id || existingDoc?.id;

      if (isEditing && firestoreDocId && !firestoreDocId.startsWith('local-')) {
        await updateRsvpInFirestore(firestoreDocId, {
          fullName: formData.name.trim(),
          phone: cleanedPhone,
          email: formData.email.trim() || undefined,
          attending: formData.attending,
          guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
          dietary: formData.dietary.trim() || undefined,
          message: formData.message.trim() || undefined,
        });
      } else {
        firestoreDocId = await submitRsvpToFirestore({
          fullName: formData.name.trim(),
          phone: cleanedPhone,
          email: formData.email.trim() || undefined,
          attending: formData.attending,
          guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
          dietary: formData.dietary.trim() || undefined,
          message: formData.message.trim() || undefined,
        });
      }

      const rsvp: RsvpResponse = {
        id: firestoreDocId || ('rsvp-' + Date.now()),
        name: formData.name.trim(),
        phone: cleanedPhone,
        attending: formData.attending,
        guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
        message: formData.message.trim(),
        submittedAt: new Date().toISOString(),
      };

      // 2. Persist locally for instant offline pass view
      localStorage.setItem('vk_wedding_rsvp', JSON.stringify(rsvp));
      setSubmittedRsvp(rsvp);
      setIsEditing(false);

      // 3. Refresh warm wishes feed
      loadWishes();

      // Trigger celebratory confetti if attending
      if (formData.attending === 'yes') {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C15C3D', '#1E3A2B', '#D4A359', '#F5ECE0'],
        });
      }
    } catch (err: any) {
      console.error('Error submitting RSVP to Firestore:', err);
      // Fallback: local save if network is restricted
      const rsvp: RsvpResponse = {
        id: 'local-' + Date.now(),
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        attending: formData.attending,
        guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
        message: formData.message.trim(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('vk_wedding_rsvp', JSON.stringify(rsvp));
      setSubmittedRsvp(rsvp);
      setIsEditing(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5ECE0] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D4A359]/30">
      <section id="rsvp" className="max-w-4xl mx-auto">
        <div className="bg-[#FDF8F2] border-2 border-[#D4A359]/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Top Banner */}
          <div className="absolute top-0 left-0 right-0 h-2 traditional-border-pattern" />

          {/* Section Title */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] text-[#D4A359] text-xs font-semibold uppercase tracking-widest border border-[#D4A359]">
              <Heart className="w-3.5 h-3.5 fill-[#D4A359]" />
              <span>Kindly RSVP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
              Confirm Your Attendance
            </h2>

            <p className="max-w-lg mx-auto text-xs sm:text-sm text-[#2C4C3B] font-sans">
              Please confirm your attendance by <strong className="text-[#C15C3D] font-bold">15th September 2026</strong>.
            </p>
          </div>

        {/* Display Confirmation Pass if Already Submitted and Not Editing */}
        {submittedRsvp && !isEditing ? (
          <div className="max-w-lg mx-auto bg-[#F5ECE0] border border-[#D4A359] rounded-2xl p-6 shadow-md text-center space-y-4">
            
            <div className="w-12 h-12 mx-auto rounded-full bg-[#1E3A2B] text-[#D4A359] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-sans tracking-widest uppercase text-[#C15C3D] font-bold">
                Digital Guest Pass
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1E3A2B] mt-1">
                {submittedRsvp.name}
              </h3>
              <p className="text-xs text-[#2C4C3B] font-sans mt-0.5">
                Phone: {submittedRsvp.phone}
              </p>
            </div>

            <div className="p-4 bg-[#FDF8F2] rounded-xl border border-[#D4A359]/40 text-left space-y-2 text-xs font-sans">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-600">Status:</span>
                <span className={`font-bold ${submittedRsvp.attending === 'yes' ? 'text-[#1E3A2B]' : 'text-red-700'}`}>
                  {submittedRsvp.attending === 'yes' ? 'Joyfully Attending 🎉' : 'Regretfully Declining'}
                </span>
              </div>

              {submittedRsvp.attending === 'yes' && (
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Total Guests:</span>
                  <span className="font-bold text-[#1E3A2B]">{submittedRsvp.guestCount} Guest(s)</span>
                </div>
              )}

              <div className="flex justify-between pt-1">
                <span className="text-gray-600">Venue:</span>
                <span className="font-bold text-[#1E3A2B]">Country Lodge, Tawa</span>
              </div>
            </div>

            {submittedRsvp.message && (
              <p className="text-xs italic text-[#2C4C3B] bg-white/60 p-3 rounded-lg border border-[#D4A359]/30">
                "{submittedRsvp.message}"
              </p>
            )}

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleStartEdit}
                className="px-4 py-2 rounded-xl bg-[#1E3A2B] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-[#2C4C3B] transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>Update Response</span>
              </button>
            </div>

          </div>
        ) : (
          /* RSVP Form */
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            
            {/* Attendance Toggle */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'yes' })}
                className={`p-4 rounded-2xl border text-center font-sans text-sm font-bold transition-all ${
                  formData.attending === 'yes'
                    ? 'bg-[#1E3A2B] text-[#FDF8F2] border-[#D4A359] shadow-md'
                    : 'bg-[#F5ECE0]/60 text-[#2C4C3B] border-[#D4A359]/40 hover:bg-[#F5ECE0]'
                }`}
              >
                <span className="block text-base">Joyfully Accepts 🎉</span>
                <span className="text-[11px] font-normal opacity-80">I will be there to celebrate!</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: 'no' })}
                className={`p-4 rounded-2xl border text-center font-sans text-sm font-bold transition-all ${
                  formData.attending === 'no'
                    ? 'bg-[#C15C3D] text-white border-[#C15C3D] shadow-md'
                    : 'bg-[#F5ECE0]/60 text-[#2C4C3B] border-[#D4A359]/40 hover:bg-[#F5ECE0]'
                }`}
              >
                <span className="block text-base">Regretfully Declines</span>
                <span className="text-[11px] font-normal opacity-80">Sending warm blessings from afar</span>
              </button>
            </div>

            {/* Guest Name */}
            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Samuel Mutua & Family"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B] text-[#1E3A2B]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0712 345 678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B] text-[#1E3A2B]"
              />
            </div>

            {/* Additional details if attending */}
            {formData.attending === 'yes' && (
              <div>
                <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                  Number of Guests
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B] text-[#1E3A2B]"
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 People</option>
                  <option value={3}>3 People</option>
                  <option value={4}>4 People</option>
                  <option value={5}>5+ Family Group</option>
                </select>
              </div>
            )}

            {/* Congratulatory Message */}
            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Warm Message for Virginia & Kenneth
              </label>
              <textarea
                rows={3}
                placeholder="Share your congratulatory wishes or advice for the couple..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B] text-[#1E3A2B]"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#C15C3D] hover:bg-[#A8482A] text-white font-sans text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Submitting to Firebase...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Submit RSVP Confirmation</span>
                </>
              )}
            </button>

          </form>
        )}

        {/* Live Warm Wishes Feed from Guests */}
        {recentWishes.length > 0 && (
          <div className="mt-10 pt-8 border-t border-[#D4A359]/30">
            <div className="flex items-center justify-center gap-2 mb-4 text-[#1E3A2B]">
              <MessageSquare className="w-4 h-4 text-[#C15C3D]" />
              <h4 className="font-serif font-bold text-sm tracking-wide uppercase">
                Warm Wishes From Confirmed Guests
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {recentWishes.map((item, idx) => (
                <div key={item.id || idx} className="bg-[#F5ECE0]/80 p-3.5 rounded-xl border border-[#D4A359]/40 text-xs">
                  <p className="italic text-[#1E3A2B] font-serif mb-1">"{item.message}"</p>
                  <p className="font-sans font-bold text-[#C15C3D] text-[11px] text-right">— {item.fullName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  </div>
  );
};
