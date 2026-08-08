import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, Sparkles, User, Calendar } from 'lucide-react';
import { GuestbookEntry } from '../types';
import { INITIAL_GUESTBOOK } from '../data/weddingData';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Friend / Well Wisher');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vk_guestbook_entries');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        setEntries(INITIAL_GUESTBOOK);
      }
    } else {
      setEntries(INITIAL_GUESTBOOK);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: 'gb-' + Date.now(),
      name: name.trim(),
      relationship,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('vk_guestbook_entries', JSON.stringify(updated));

    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="guestbook" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B]/10 text-[#1E3A2B] text-xs font-semibold uppercase tracking-widest border border-[#1E3A2B]/30">
          <MessageSquare className="w-3.5 h-3.5 text-[#C15C3D]" />
          <span>Blessings & Wishes</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
          Celebratory Guestbook
        </h2>

        <p className="max-w-md mx-auto text-sm text-[#2C4C3B] font-sans">
          Leave a heartfelt note, prayer, or congratulatory message for Virginia Mutuku & Kenneth Abonyo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form to post a message */}
        <div className="lg:col-span-5 bg-[#FDF8F2] border-2 border-[#D4A359] rounded-2xl p-6 shadow-md">
          <h3 className="font-serif text-xl font-bold text-[#1E3A2B] mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C15C3D] fill-[#C15C3D]" />
            <span>Write Your Blessing</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pastor John & Sarah"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Relationship
              </label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B]"
              >
                <option value="Family / Relative">Family / Relative</option>
                <option value="Bride's Friend">Bride's Friend</option>
                <option value="Groom's Friend">Groom's Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Church Member">Church Member / In-Law</option>
                <option value="Well Wisher">Well Wisher</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-sans uppercase font-bold text-[#1E3A2B] mb-1">
                Your Wish / Message *
              </label>
              <textarea
                rows={4}
                required
                placeholder="May God bless your union with endless love, peace, and abundance..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4A359]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A2B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#1E3A2B] hover:bg-[#2C4C3B] text-[#FDF8F2] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#D4A359] shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Post Message to Guestbook</span>
            </button>

            {submitted && (
              <p className="text-xs text-center text-green-700 font-semibold bg-green-50 p-2 rounded-lg border border-green-200 animate-fade-in">
                Thank you! Your wish has been added to the guestbook.
              </p>
            )}
          </form>
        </div>

        {/* Right Column: Live Stream of Guest Messages */}
        <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#F5ECE0]/70 border border-[#D4A359]/50 rounded-2xl p-5 shadow-xs hover:border-[#D4A359] transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#C15C3D] text-white flex items-center justify-center font-bold text-xs">
                    {entry.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E3A2B]">
                      {entry.name}
                    </h4>
                    <span className="text-[10px] text-[#C15C3D] font-sans font-medium uppercase">
                      {entry.relationship}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-gray-500 font-mono">
                  {new Date(entry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#2C4C3B] font-sans italic leading-relaxed pt-1">
                "{entry.message}"
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
