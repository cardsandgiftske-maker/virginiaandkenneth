import React from 'react';
import { Sparkles, Palette, Shirt, Heart } from 'lucide-react';
import { COLOR_PALETTE, WEDDING_DETAILS } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dresscode" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C15C3D]/10 text-[#C15C3D] text-xs font-semibold uppercase tracking-widest border border-[#C15C3D]/30">
          <Palette className="w-3.5 h-3.5" />
          <span>Dress Code & Theme</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A2B] font-bold">
          {WEDDING_DETAILS.dressCodeTheme}
        </h2>

        <p className="max-w-xl mx-auto text-sm text-[#2C4C3B] font-sans leading-relaxed">
          {WEDDING_DETAILS.dressCodeDescription}
        </p>
      </div>

      {/* Color Palette Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
        {COLOR_PALETTE.map((color, index) => (
          <div
            key={index}
            className="bg-[#FDF8F2] border border-[#D4A359]/50 rounded-2xl p-4 text-center shadow-xs hover:shadow-md transition-shadow group"
          >
            {/* Color Swatch */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl shadow-inner mb-3 transform group-hover:scale-105 transition-transform border border-black/10`}
              style={{ backgroundColor: color.hex }}
            />

            <h3 className="font-serif font-bold text-base text-[#1E3A2B]">
              {color.name}
            </h3>

            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">
              {color.hex}
            </span>

            <p className="text-[11px] text-[#2C4C3B] font-sans mt-1.5 line-clamp-2">
              {color.description}
            </p>
          </div>
        ))}
      </div>

      {/* Outfit Recommendations Box */}
      <div className="bg-[#1E3A2B] text-[#FDF8F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D4A359] shadow-lg max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        
        <div className="w-16 h-16 rounded-full bg-[#D4A359]/20 border border-[#D4A359] text-[#D4A359] flex items-center justify-center shrink-0">
          <Shirt className="w-8 h-8" />
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-xl font-bold text-[#FDF8F2]">
            Attire Inspiration
          </h3>
          <p className="text-xs sm:text-sm text-[#F5ECE0]/90 font-sans leading-relaxed">
            Guests are encouraged to wear traditional Kitenge, Ankara, Kamba beaded attire, Luo traditional garments, or modern suits & dresses styled with our earthy color palette.
          </p>
        </div>

      </div>

    </section>
  );
};
