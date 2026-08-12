import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Country Lodge Tawa Machakos Kenya'
  )}`;

  return (
    <div className="bg-[#FDF8F2] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D4A359]/30">
      <section id="venue" className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A2B]/10 text-[#1E3A2B] text-xs font-semibold uppercase tracking-widest border border-[#1E3A2B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#C15C3D]" />
            <span>The Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A2B] font-bold">
            Country Lodge, Tawa
          </h2>
        </div>

        {/* Google Map Container */}
        <div className="bg-[#1E3A2B] rounded-2xl p-2 border-2 border-[#D4A359] shadow-lg relative overflow-hidden">
          <div className="relative w-full h-[350px] sm:h-[420px] rounded-xl overflow-hidden bg-gray-100">
            <iframe
              title="Country Lodge Tawa Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Tawa%20Machakos%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />

            <div className="absolute bottom-3 left-3 right-3 bg-[#1E3A2B]/90 backdrop-blur-md text-[#FDF8F2] p-3 rounded-xl border border-[#D4A359] flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C15C3D]" />
                <span className="font-serif font-bold">Country Lodge • Tawa</span>
              </div>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D4A359] font-bold hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Directions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

