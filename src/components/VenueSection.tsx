import React, { useState } from 'react';
import { MapPin, Navigation, Car, ExternalLink, Phone, Copy, Check } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const VenueSection: React.FC = () => {
  const [copiedLocation, setCopiedLocation] = useState(false);

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Country Lodge Tawa Machakos Kenya'
  )}`;

  const handleCopyLocation = () => {
    navigator.clipboard.writeText('Country Lodge, Tawa, Machakos County, Kenya');
    setCopiedLocation(true);
    setTimeout(() => setCopiedLocation(false), 2500);
  };

  return (
    <div className="bg-[#FDF8F2] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D4A359]/30">
      <section id="venue" className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A2B]/10 text-[#1E3A2B] text-xs font-semibold uppercase tracking-widest border border-[#1E3A2B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#C15C3D]" />
            <span>The Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
            Country Lodge, Tawa
          </h2>

          <p className="max-w-lg mx-auto text-sm text-[#2C4C3B] font-sans">
            Nestled in the serene hills of Tawa, Machakos County — providing a scenic and welcoming atmosphere for our traditional wedding ceremony.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Venue Details & Travel Info */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          
          <div className="bg-[#F5ECE0]/80 border border-[#D4A359] rounded-2xl p-6 shadow-xs space-y-4">
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C15C3D] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                  Country Lodge Tawa
                </h3>
                <p className="text-xs text-[#2C4C3B] font-sans mt-0.5">
                  Tawa Town, Machakos County, Kenya
                </p>
              </div>
            </div>

            <hr className="border-[#D4A359]/40" />

            <div className="space-y-3 text-xs text-[#2C4C3B] font-sans">
              
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#1E3A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E3A2B] font-semibold">Travel Directions:</strong>
                  <p className="mt-0.5 text-gray-700">
                    From Nairobi: Take Mombasa Road to Machakos Turnoff, proceed through Machakos Town towards Tawa/Kikima. Ample secure parking is available on-site at Country Lodge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1E3A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E3A2B] font-semibold">RSVP & Travel Assistance:</strong>
                  <p className="mt-0.5 text-gray-700">
                    Call <strong>{WEDDING_DETAILS.rsvpPhone}</strong> for directions or local lodging guidance in Tawa.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#1E3A2B] hover:bg-[#2C4C3B] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-[#D4A359]"
              >
                <Navigation className="w-4 h-4 text-[#D4A359]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={handleCopyLocation}
                className="py-2.5 px-4 rounded-xl bg-white border border-[#D4A359]/60 text-[#1E3A2B] text-xs font-semibold hover:bg-[#F5ECE0] transition-colors flex items-center gap-1.5"
              >
                {copiedLocation ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#C15C3D]" />}
                <span>{copiedLocation ? 'Copied!' : 'Copy Address'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Right Column: Google Maps Interactive Preview Box */}
        <div className="lg:col-span-6 bg-[#1E3A2B] rounded-2xl p-2 border-2 border-[#D4A359] shadow-md flex flex-col min-h-[300px]">
          <div className="relative w-full h-full min-h-[280px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            
            {/* Embed OpenStreetMap / Google Map Preview fallback */}
            <iframe
              title="Country Lodge Tawa Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Tawa%20Machakos%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />

            <div className="absolute bottom-3 left-3 right-3 bg-[#1E3A2B]/90 backdrop-blur-md text-[#FDF8F2] p-3 rounded-xl border border-[#D4A359] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C15C3D]" />
                <span className="font-serif font-bold text-sm">Country Lodge • Tawa</span>
              </div>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A359] underline font-semibold hover:text-white"
              >
                Get Directions &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  </div>
  );
};
