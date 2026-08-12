import React from 'react';

// Top Left Floral Arrangement with Cream Roses, Terracotta Daisies & Eucalyptus
export const TopLeftFloralSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    <g id="eucalyptus-foliage">
      {/* Background Leaves */}
      <path d="M40 180 Q10 140 15 90 Q30 110 50 140 Z" fill="#3B5745" opacity="0.85" />
      <path d="M20 150 Q-10 110 5 60 Q20 80 35 115 Z" fill="#4B6E58" opacity="0.75" />
      <path d="M70 210 Q40 180 30 130 Q55 150 75 180 Z" fill="#2D4737" opacity="0.9" />
      <path d="M15 110 Q-15 80 5 30 Q20 50 28 80 Z" fill="#5B8067" opacity="0.7" />
      
      {/* Stems */}
      <path d="M60 210 Q30 140 20 60" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 130 Q80 70 50 10" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M150 80 Q100 40 40 5" stroke="#253C2E" strokeWidth="2" strokeLinecap="round" />

      {/* Eucalyptus oval leaves along stems */}
      <ellipse cx="35" cy="110" rx="14" ry="9" transform="rotate(-30 35 110)" fill="#688F76" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="25" cy="80" rx="12" ry="8" transform="rotate(-40 25 80)" fill="#789F86" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="20" cy="50" rx="10" ry="6" transform="rotate(-20 20 50)" fill="#88AF96" stroke="#2D4737" strokeWidth="1" />

      <ellipse cx="85" cy="75" rx="15" ry="10" transform="rotate(-15 85 75)" fill="#5B8067" stroke="#253C2E" strokeWidth="1" />
      <ellipse cx="65" cy="45" rx="13" ry="8" transform="rotate(-35 65 45)" fill="#688F76" stroke="#253C2E" strokeWidth="1" />
      <ellipse cx="45" cy="20" rx="10" ry="6" transform="rotate(-50 45 20)" fill="#789F86" stroke="#253C2E" strokeWidth="1" />

      {/* Terracotta/Orange Berries */}
      <g fill="#C15C3D">
        <circle cx="80" cy="120" r="4.5" />
        <circle cx="90" cy="115" r="4" />
        <circle cx="85" cy="128" r="5" />
        <circle cx="95" cy="125" r="4" />
        <circle cx="72" cy="130" r="3.5" />
        <circle cx="68" cy="140" r="4" />

        <circle cx="120" cy="65" r="4" />
        <circle cx="130" cy="60" r="4.5" />
        <circle cx="125" cy="72" r="5" />
        <circle cx="138" cy="68" r="3.5" />
      </g>
    </g>

    {/* Large Cream Rose (Top Left) */}
    <g id="cream-rose-1" transform="translate(60, 40)">
      {/* Outer Petals */}
      <path d="M-10 10 C-35 -15 -10 -45 20 -40 C50 -45 70 -15 50 15 C30 40 -10 35 -10 10 Z" fill="#FBF3E6" stroke="#E6D3B8" strokeWidth="1.5" />
      <path d="M-25 0 C-40 30 0 55 30 50 C60 45 65 10 40 -15" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
      <path d="M-30 -20 C-10 -50 40 -50 55 -25 C70 5 45 35 15 35" fill="#F8EAD6" stroke="#DFC7A8" strokeWidth="1.5" />

      {/* Middle Petals */}
      <circle cx="15" cy="0" r="28" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1.5" />
      <path d="M0 -15 C0 -30 30 -30 30 -15 C30 0 0 0 0 -15" fill="#F7E4CC" opacity="0.9" />
      <path d="M-10 -5 C-20 -20 10 -25 20 -10 C25 5 -5 10 -10 -5" fill="#F3DCBE" opacity="0.85" />
      
      {/* Inner Rose Spiral */}
      <path d="M5 -8 C2 -16 22 -18 20 -6 C18 4 6 2 5 -8" fill="#E8CBA3" />
      <path d="M10 -10 C8 -14 16 -15 15 -9" fill="#D9B78A" />
    </g>

    {/* Second Cream Rose (Below Main Rose) */}
    <g id="cream-rose-2" transform="translate(110, 85) scale(0.85)">
      <circle cx="0" cy="0" r="32" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
      <path d="M-20 -10 C-30 15 5 30 25 15 C35 -10 10 -30 -15 -20" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1" />
      <circle cx="2" cy="-2" r="18" fill="#F3DCBE" opacity="0.85" />
      <path d="M-5 -5 Q5 -15 12 -3 Q15 8 -2 5 Z" fill="#E2C29A" />
    </g>

    {/* Terracotta/Orange Daisy/Sunflower */}
    <g id="terracotta-flower" transform="translate(45, 125)">
      {/* Petals radiating */}
      <g fill="#D86B47" stroke="#B04E2D" strokeWidth="1">
        <ellipse cx="0" cy="-28" rx="7" ry="18" />
        <ellipse cx="20" cy="-20" rx="7" ry="18" transform="rotate(35 20 -20)" />
        <ellipse cx="28" cy="0" rx="7" ry="18" transform="rotate(70 28 0)" />
        <ellipse cx="20" cy="20" rx="7" ry="18" transform="rotate(110 20 20)" />
        <ellipse cx="0" cy="28" rx="7" ry="18" transform="rotate(145 0 28)" />
        <ellipse cx="-20" cy="20" rx="7" ry="18" transform="rotate(180 -20 20)" />
        <ellipse cx="-28" cy="0" rx="7" ry="18" transform="rotate(215 -28 0)" />
        <ellipse cx="-20" cy="-20" rx="7" ry="18" transform="rotate(250 -20 -20)" />
      </g>
      {/* Inner Petal Ring */}
      <g fill="#E47E5C">
        <ellipse cx="0" cy="-20" rx="5" ry="12" />
        <ellipse cx="14" cy="-14" rx="5" ry="12" transform="rotate(35 14 -14)" />
        <ellipse cx="20" cy="0" rx="5" ry="12" transform="rotate(70 20 0)" />
        <ellipse cx="14" cy="14" rx="5" ry="12" transform="rotate(110 14 14)" />
        <ellipse cx="0" cy="20" rx="5" ry="12" transform="rotate(145 0 20)" />
        <ellipse cx="-14" cy="14" rx="5" ry="12" transform="rotate(180 -14 14)" />
        <ellipse cx="-20" cy="0" rx="5" ry="12" transform="rotate(215 -20 0)" />
        <ellipse cx="-14" cy="-14" rx="5" ry="12" transform="rotate(250 -14 -14)" />
      </g>
      {/* Center Seed Pod */}
      <circle cx="0" cy="0" r="11" fill="#6B2E1C" stroke="#D4A359" strokeWidth="2" />
      <circle cx="0" cy="0" r="7" fill="#421A0F" />
    </g>

    {/* Baby's Breath / Small White Floral Sprays */}
    <g fill="#FFFFFF" stroke="#D4A359" strokeWidth="0.5">
      <circle cx="160" cy="35" r="3.5" />
      <circle cx="170" cy="28" r="3" />
      <circle cx="152" cy="25" r="3.5" />
      <circle cx="178" cy="40" r="2.5" />
      
      <circle cx="145" cy="115" r="3.5" />
      <circle cx="155" cy="125" r="3" />
      <circle cx="160" cy="110" r="2.5" />
    </g>
  </svg>
);

// Top Right Woven Kiondo/Lilio Basket & Sage Fabric Swag
export const TopRightBasketAndFabricSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    {/* Draped Sage Green Traditional Cloth */}
    <g id="sage-fabric">
      <path
        d="M80 0 C120 40 160 30 240 10 L240 160 C180 180 140 130 90 80 C60 50 20 30 0 0 Z"
        fill="#3D5A47"
        opacity="0.9"
      />
      <path
        d="M110 0 C145 35 180 25 240 20 L240 120 C190 140 150 90 110 50 Z"
        fill="#4F715B"
        opacity="0.85"
      />
      <path
        d="M150 0 C175 25 200 15 240 25 L240 80 C200 95 170 60 140 30 Z"
        fill="#668B73"
        opacity="0.8"
      />
      {/* Fabric Fold Lines */}
      <path d="M80 0 Q140 70 240 120" stroke="#253C2E" strokeWidth="2" opacity="0.6" />
      <path d="M120 0 Q170 60 240 80" stroke="#253C2E" strokeWidth="1.5" opacity="0.5" />
      <path d="M160 0 Q200 50 240 50" stroke="#1A2D22" strokeWidth="1.5" opacity="0.5" />
    </g>

    {/* Traditional Woven Winnowing Basket / Kiondo Motif */}
    <g id="woven-basket" transform="translate(155, 75)">
      {/* Outer Rim */}
      <circle cx="0" cy="0" r="58" fill="#F7EDDC" stroke="#B8853D" strokeWidth="4" />
      <circle cx="0" cy="0" r="54" stroke="#1E3A2B" strokeWidth="2" strokeDasharray="6 3" />
      
      {/* Terracotta Diamond Tribal Ring */}
      <circle cx="0" cy="0" r="45" fill="#E6C8A0" stroke="#C15C3D" strokeWidth="3" />
      
      {/* Geometric Sawtooth Pattern */}
      <path
        d="M0 -45 L8 -35 L16 -45 L24 -35 L32 -45 L40 -25 L45 0 L35 8 L45 16 L35 24 L45 32 L25 40 L0 45 L-8 35 L-16 45 L-24 35 L-32 45 L-40 25 L-45 0 L-35 -8 L-45 -16 L-35 -24 L-45 -32 L-25 -40 Z"
        fill="#C15C3D"
        opacity="0.85"
      />

      {/* Forest Green Inner Circle */}
      <circle cx="0" cy="0" r="32" fill="#1E3A2B" />
      <circle cx="0" cy="0" r="26" stroke="#D4A359" strokeWidth="2.5" strokeDasharray="4 2" />

      {/* Ochre Center Star Burst */}
      <path
        d="M0 -26 L5 -8 L26 0 L5 8 L0 26 L-5 8 L-26 0 L-5 -8 Z"
        fill="#D4A359"
      />
      <circle cx="0" cy="0" r="7" fill="#C15C3D" />
      <circle cx="0" cy="0" r="3" fill="#FDF8F2" />
    </g>
  </svg>
);

// Bottom Left Clay Water Pot (Jug with Handle), Woven Lid Basket, Small Bowl & Terracotta Draped Cloth
export const BottomLeftClayPotAndDrapeSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 280 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    {/* Draped Sage Green & Terracotta Fabric Base */}
    <g id="draped-fabric-base">
      {/* Sage Green Fabric Underlayer */}
      <path
        d="M0 120 C50 120 100 160 160 210 C210 250 240 280 280 320 L0 320 Z"
        fill="#3B5745"
        opacity="0.95"
      />
      <path d="M0 120 Q90 190 260 320" stroke="#253C2E" strokeWidth="2.5" opacity="0.6" />

      {/* Terracotta Fabric Top Swag */}
      <path
        d="M0 210 C40 210 80 240 140 270 C180 290 220 305 270 320 L0 320 Z"
        fill="#A8482A"
        opacity="0.95"
      />
      <path
        d="M0 245 C30 245 60 265 110 288 C150 305 190 315 240 320 L0 320 Z"
        fill="#8A341A"
        opacity="0.9"
      />
      {/* Fabric Fold Highlights */}
      <path d="M0 210 Q80 260 250 320" stroke="#D86B47" strokeWidth="2" opacity="0.6" />
      <path d="M0 245 Q70 280 210 320" stroke="#5C1F0E" strokeWidth="2.5" opacity="0.7" />
    </g>

    {/* Traditional African Earthenware Clay Jug/Pot with Handle & Stamped Tribal Patterns */}
    <g id="clay-pot-jug" transform="translate(15, 95)">
      {/* Drop Shadow */}
      <ellipse cx="65" cy="182" rx="52" ry="14" fill="#25120B" opacity="0.45" />

      {/* Handle on Right Side */}
      <path
        d="M80 35 C115 35 125 75 88 100"
        stroke="#7A2E16"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 35 C112 35 120 75 88 100"
        stroke="#A8482A"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main Jug Body */}
      <path
        d="M40 0 C40 -12 70 -12 70 0 L66 22 C98 42 110 88 92 125 C75 158 35 158 12 125 C-6 88 6 42 38 22 Z"
        fill="#A8482A"
        stroke="#5C2415"
        strokeWidth="3"
      />

      {/* Pot Mouth Rim */}
      <ellipse cx="55" cy="-2" rx="20" ry="7" fill="#5C2415" />
      <ellipse cx="55" cy="-3" rx="17" ry="5" fill="#C15C3D" />
      <ellipse cx="55" cy="-4" rx="13" ry="3" fill="#3B150A" />

      {/* Neck Tribal Pattern Band */}
      <path d="M42 12 Q55 17 68 12 L67 18 Q55 23 43 18 Z" fill="#3B150A" />
      <path d="M44 14 L48 18 L52 14 L56 18 L60 14 L64 18" stroke="#D4A359" strokeWidth="1.2" fill="none" />

      {/* Main Belly Tribal Diamond & Chevron Band */}
      <path
        d="M10 58 Q55 75 100 58 L103 82 Q55 98 7 82 Z"
        fill="#2D4737"
        stroke="#D4A359"
        strokeWidth="1.5"
      />
      
      {/* Zigzag Chevrons & Diamonds inside main band */}
      <path
        d="M12 66 L22 76 L32 66 L42 76 L52 66 L62 76 L72 66 L82 76 L92 66 L98 72"
        stroke="#FDF8F2"
        strokeWidth="2"
        fill="none"
      />
      <g fill="#A8482A" stroke="#D4A359" strokeWidth="1">
        <polygon points="22,60 26,64 22,68 18,64" />
        <polygon points="42,60 46,64 42,68 38,64" />
        <polygon points="62,60 66,64 62,68 58,64" />
        <polygon points="82,60 86,64 82,68 78,64" />
      </g>

      {/* Lower Triangles / Sawtooth Pattern on Pot */}
      <path
        d="M18 105 L26 120 L34 105 L42 120 L50 105 L58 120 L66 105 L74 120 L82 105"
        stroke="#5C2415"
        strokeWidth="2"
        fill="#7A2E16"
      />

      {/* Pot Highlights & Shadow Curve */}
      <path
        d="M15 35 C3 65 12 110 32 138 C18 110 8 70 24 35 Z"
        fill="#D86B47"
        opacity="0.7"
      />
      <path
        d="M78 35 C98 70 92 115 75 142 C88 115 90 70 70 35 Z"
        fill="#3B150A"
        opacity="0.6"
      />
    </g>

    {/* Woven Basket Pot with Round Lid (Kiondo Lid Basket) */}
    <g id="woven-lid-basket" transform="translate(10, 215)">
      {/* Shadow */}
      <ellipse cx="50" cy="65" rx="52" ry="12" fill="#25120B" opacity="0.4" />

      {/* Basket Base */}
      <ellipse cx="50" cy="35" rx="52" ry="26" fill="#D4A359" stroke="#8A5A1B" strokeWidth="2.5" />
      <path d="M-2 35 C0 55 20 62 50 62 C80 62 100 55 102 35 Z" fill="#B8853D" stroke="#704712" strokeWidth="2" />
      
      {/* Horizontal Woven Coils on Basket */}
      <path d="M2 40 Q50 50 98 40" stroke="#704712" strokeWidth="1.8" fill="none" />
      <path d="M6 46 Q50 56 94 46" stroke="#704712" strokeWidth="1.8" fill="none" />
      <path d="M12 52 Q50 60 88 52" stroke="#704712" strokeWidth="1.8" fill="none" />

      {/* Rounded Lid */}
      <ellipse cx="50" cy="22" rx="50" ry="20" fill="#E8D1B5" stroke="#704712" strokeWidth="2.5" />
      <ellipse cx="50" cy="18" rx="42" ry="15" fill="#C15C3D" opacity="0.85" />
      <ellipse cx="50" cy="15" rx="32" ry="11" fill="#2D4737" />
      <ellipse cx="50" cy="12" rx="20" ry="7" fill="#D4A359" />

      {/* Top Knob Handle on Lid */}
      <circle cx="50" cy="6" r="8" fill="#25120B" stroke="#D4A359" strokeWidth="1.5" />
      <circle cx="50" cy="4" r="4" fill="#704712" />
    </g>

    {/* Small Clay Cup / Bowl in Front with Dot Rim */}
    <g id="small-clay-cup" transform="translate(100, 245)">
      {/* Shadow */}
      <ellipse cx="36" cy="42" rx="36" ry="9" fill="#25120B" opacity="0.4" />

      {/* Cup Body */}
      <path
        d="M6 0 C-4 12 2 35 36 38 C70 35 76 12 66 0 Z"
        fill="#A8482A"
        stroke="#5C2415"
        strokeWidth="2"
      />
      {/* Cup Mouth / Liquid Interior */}
      <ellipse cx="36" cy="0" rx="30" ry="8" fill="#3B150A" stroke="#5C2415" strokeWidth="1.5" />
      <ellipse cx="36" cy="1" rx="26" ry="5" fill="#1C0904" />

      {/* White Dots around Top Rim */}
      <g fill="#FDF8F2">
        <circle cx="12" cy="7" r="1.5" />
        <circle cx="18" cy="10" r="1.5" />
        <circle cx="25" cy="12" r="1.5" />
        <circle cx="33" cy="13" r="1.5" />
        <circle cx="41" cy="12" r="1.5" />
        <circle cx="48" cy="10" r="1.5" />
        <circle cx="54" cy="7" r="1.5" />
      </g>

      {/* Stamped Diamond Row on Small Cup */}
      <path
        d="M12 18 Q36 25 60 18 L62 28 Q36 35 10 28 Z"
        fill="#2D4737"
        stroke="#D4A359"
        strokeWidth="1"
      />
      <path
        d="M14 23 L20 28 L26 23 L32 28 L38 23 L44 28 L50 23 L56 28"
        stroke="#FDF8F2"
        strokeWidth="1.5"
        fill="none"
      />
    </g>
  </svg>
);

// Bottom Right Floral Bouquet SVG
export const BottomRightFloralSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    <g transform="translate(240, 260) scale(-1, -1)">
      {/* Reusing rich flora arrangement with inverted coords */}
      {/* Background Leaves */}
      <path d="M40 180 Q10 140 15 90 Q30 110 50 140 Z" fill="#3B5745" opacity="0.85" />
      <path d="M20 150 Q-10 110 5 60 Q20 80 35 115 Z" fill="#4B6E58" opacity="0.75" />
      <path d="M70 210 Q40 180 30 130 Q55 150 75 180 Z" fill="#2D4737" opacity="0.9" />

      {/* Stems */}
      <path d="M60 210 Q30 140 20 60" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 130 Q80 70 50 10" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eucalyptus Leaves */}
      <ellipse cx="35" cy="110" rx="14" ry="9" transform="rotate(-30 35 110)" fill="#688F76" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="25" cy="80" rx="12" ry="8" transform="rotate(-40 25 80)" fill="#789F86" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="85" cy="75" rx="15" ry="10" transform="rotate(-15 85 75)" fill="#5B8067" stroke="#253C2E" strokeWidth="1" />

      {/* Berries */}
      <g fill="#C15C3D">
        <circle cx="80" cy="120" r="4.5" />
        <circle cx="90" cy="115" r="4" />
        <circle cx="85" cy="128" r="5" />
        <circle cx="120" cy="65" r="4" />
        <circle cx="130" cy="60" r="4.5" />
      </g>

      {/* Large Cream Rose */}
      <g id="cream-rose-br1" transform="translate(60, 40)">
        <path d="M-10 10 C-35 -15 -10 -45 20 -40 C50 -45 70 -15 50 15 C30 40 -10 35 -10 10 Z" fill="#FBF3E6" stroke="#E6D3B8" strokeWidth="1.5" />
        <path d="M-25 0 C-40 30 0 55 30 50 C60 45 65 10 40 -15" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
        <circle cx="15" cy="0" r="28" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1.5" />
        <path d="M0 -15 C0 -30 30 -30 30 -15 C30 0 0 0 0 -15" fill="#F7E4CC" opacity="0.9" />
        <path d="M5 -8 C2 -16 22 -18 20 -6 C18 4 6 2 5 -8" fill="#E8CBA3" />
      </g>

      {/* Terracotta Daisy */}
      <g id="terracotta-flower-br" transform="translate(45, 125)">
        <g fill="#D86B47" stroke="#B04E2D" strokeWidth="1">
          <ellipse cx="0" cy="-28" rx="7" ry="18" />
          <ellipse cx="20" cy="-20" rx="7" ry="18" transform="rotate(35 20 -20)" />
          <ellipse cx="28" cy="0" rx="7" ry="18" transform="rotate(70 28 0)" />
          <ellipse cx="20" cy="20" rx="7" ry="18" transform="rotate(110 20 20)" />
          <ellipse cx="0" cy="28" rx="7" ry="18" transform="rotate(145 0 28)" />
          <ellipse cx="-20" cy="20" rx="7" ry="18" transform="rotate(180 -20 20)" />
          <ellipse cx="-28" cy="0" rx="7" ry="18" transform="rotate(215 -28 0)" />
          <ellipse cx="-20" cy="-20" rx="7" ry="18" transform="rotate(250 -20 -20)" />
        </g>
        <circle cx="0" cy="0" r="11" fill="#6B2E1C" stroke="#D4A359" strokeWidth="2" />
        <circle cx="0" cy="0" r="7" fill="#421A0F" />
      </g>

      {/* Baby's Breath */}
      <g fill="#FFFFFF" stroke="#D4A359" strokeWidth="0.5">
        <circle cx="160" cy="35" r="3.5" />
        <circle cx="170" cy="28" r="3" />
        <circle cx="145" cy="115" r="3.5" />
      </g>
    </g>
  </svg>
);

// Top Tribal Diamond Emblem SVG - Matches traditional boho geometric symbol
export const TopEmblemSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center my-3 ${className}`}>
    <svg
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm sm:max-w-md h-auto drop-shadow-2xs select-none"
    >
      {/* Colors: Terracotta/Rust = #A8482A, Earthy Sage Green = #405847, Line = #8C6F5E */}
      
      {/* Horizontal Divider Lines */}
      <line x1="22" y1="60" x2="110" y2="60" stroke="#8C6F5E" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="60" r="2" fill="#8C6F5E" />

      <line x1="210" y1="60" x2="298" y2="60" stroke="#8C6F5E" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="300" cy="60" r="2" fill="#8C6F5E" />

      {/* Left Terracotta Rays & Dots */}
      <path d="M 108 53 L 84 46 C 94 51 98 54 108 55 Z" fill="#A8482A" />
      <circle cx="72" cy="43" r="2.5" fill="#A8482A" />
      
      <path d="M 108 67 L 84 74 C 94 69 98 66 108 65 Z" fill="#A8482A" />
      <circle cx="72" cy="77" r="2.5" fill="#A8482A" />

      {/* Right Terracotta Rays & Dots */}
      <path d="M 212 53 L 236 46 C 226 51 222 54 212 55 Z" fill="#A8482A" />
      <circle cx="248" cy="43" r="2.5" fill="#A8482A" />

      <path d="M 212 67 L 236 74 C 226 69 222 66 212 65 Z" fill="#A8482A" />
      <circle cx="248" cy="77" r="2.5" fill="#A8482A" />

      {/* Outer Terracotta Main Diamond */}
      <polygon points="160,26 204,60 160,94 116,60" fill="none" stroke="#A8482A" strokeWidth="2.5" strokeLinejoin="miter" />

      {/* Top Cap Diamond & Connection */}
      <line x1="160" y1="26" x2="160" y2="18" stroke="#A8482A" strokeWidth="2" />
      <polygon points="160,6 168,14 160,22 152,14" fill="#FDF8F2" stroke="#A8482A" strokeWidth="2" strokeLinejoin="miter" />
      <polygon points="160,11 163,14 160,17 157,14" fill="#A8482A" />

      {/* Bottom Cap Diamond & Connection */}
      <line x1="160" y1="94" x2="160" y2="102" stroke="#A8482A" strokeWidth="2" />
      <polygon points="160,98 168,106 160,114 152,106" fill="#FDF8F2" stroke="#A8482A" strokeWidth="2" strokeLinejoin="miter" />
      <polygon points="160,103 163,106 160,109 157,106" fill="#A8482A" />

      {/* Bottom Diagonal Hash Strokes */}
      <line x1="149" y1="96" x2="140" y2="105" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="171" y1="96" x2="180" y2="105" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Flanking External Diamonds & Accents */}
      {/* Upper Left */}
      <polygon points="126,33 130,37 126,41 122,37" fill="#A8482A" />
      <line x1="135" y1="28" x2="139" y2="24" stroke="#405847" strokeWidth="2" strokeLinecap="round" />
      <line x1="139" y1="33" x2="143" y2="29" stroke="#405847" strokeWidth="2" strokeLinecap="round" />

      {/* Upper Right */}
      <polygon points="194,33 198,37 194,41 190,37" fill="#A8482A" />
      <line x1="185" y1="28" x2="181" y2="24" stroke="#405847" strokeWidth="2" strokeLinecap="round" />
      <line x1="181" y1="33" x2="177" y2="29" stroke="#405847" strokeWidth="2" strokeLinecap="round" />

      {/* Lower Left */}
      <polygon points="126,81 130,85 126,89 122,85" fill="#405847" />
      <line x1="134" y1="93" x2="141" y2="86" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Lower Right */}
      <polygon points="194,81 198,85 194,89 190,85" fill="#405847" />
      <line x1="186" y1="93" x2="179" y2="86" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* INNER GREEN MOTIF */}
      <g stroke="#405847" fill="none">
        {/* Inner Diamond */}
        <polygon points="160,48 172,60 160,72 148,60" strokeWidth="2.5" strokeLinejoin="miter" />
        <polygon points="160,57 163,60 160,63 157,60" fill="#405847" stroke="none" />

        {/* Top Green Chevron & Trunk */}
        <line x1="160" y1="48" x2="160" y2="34" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 152 42 L 160 48 L 168 42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="152" cy="44" r="1.5" fill="#405847" stroke="none" />
        <circle cx="168" cy="44" r="1.5" fill="#405847" stroke="none" />

        {/* Bottom Green Chevron & Trunk */}
        <line x1="160" y1="72" x2="160" y2="86" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 152 78 L 160 72 L 168 78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="152" cy="76" r="1.5" fill="#405847" stroke="none" />
        <circle cx="168" cy="76" r="1.5" fill="#405847" stroke="none" />

        {/* Left & Right Inner Extensions */}
        <path d="M 148 60 L 138 60 M 138 56 L 138 64" strokeWidth="2" strokeLinecap="round" />
        <path d="M 172 60 L 182 60 M 182 56 L 182 64" strokeWidth="2" strokeLinecap="round" />
        <circle cx="144" cy="54" r="1.5" fill="#405847" stroke="none" />
        <circle cx="144" cy="66" r="1.5" fill="#405847" stroke="none" />
        <circle cx="176" cy="54" r="1.5" fill="#405847" stroke="none" />
        <circle cx="176" cy="66" r="1.5" fill="#405847" stroke="none" />
      </g>
    </svg>
  </div>
);

// Vertical Side Geometric Tribal Border Pattern Component matching the uploaded image exactly
export const SideTribalBorderSVG: React.FC<{ side: 'left' | 'right'; className?: string }> = ({ side, className = '' }) => (
  <svg
    viewBox="0 0 28 600"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-full w-5 sm:w-7 pointer-events-none ${className}`}
  >
    <defs>
      <pattern id="tribal-diamond-pattern" width="28" height="50" patternUnits="userSpaceOnUse">
        {/* Double Framing Gold / Terracotta Lines */}
        <line x1="2" y1="0" x2="2" y2="50" stroke="#A8482A" strokeWidth="1.2" opacity="0.8" />
        <line x1="5" y1="0" x2="5" y2="50" stroke="#D4A359" strokeWidth="1" opacity="0.9" />

        <line x1="23" y1="0" x2="23" y2="50" stroke="#D4A359" strokeWidth="1" opacity="0.9" />
        <line x1="26" y1="0" x2="26" y2="50" stroke="#A8482A" strokeWidth="1.2" opacity="0.8" />

        {/* Inner Chevron / Diamond Tribal Stack matching uploaded image */}
        {/* Upper Green Chevron */}
        <path d="M 8 10 L 14 4 L 20 10" stroke="#3B5745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Terracotta Central Diamond */}
        <polygon points="14,14 20,22 14,30 8,22" fill="#A8482A" opacity="0.9" />
        <polygon points="14,18 17,22 14,26 11,22" fill="#FDF8F2" />

        {/* Lower Green Chevron */}
        <path d="M 8 34 L 14 40 L 20 34" stroke="#3B5745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Connector Accents */}
        <circle cx="14" cy="45" r="1.8" fill="#D4A359" />
        <circle cx="14" cy="49" r="1.5" fill="#A8482A" />
      </pattern>
    </defs>
    <rect width="28" height="100%" fill="url(#tribal-diamond-pattern)" />
  </svg>
);
