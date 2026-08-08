import { EventTimelineItem, GuestbookEntry } from '../types';

export const WEDDING_DETAILS = {
  bride: "Virginia Mutuku",
  groom: "Kenneth Abonyo",
  fullTitle: "Traditional Wedding Ceremony",
  date: "2026-10-03T10:00:00",
  formattedDate: "03 / 10 / 2026",
  readableDate: "Saturday, 3rd October 2026",
  time: "10:00 AM",
  venue: "Country Lodge",
  location: "Tawa, Machakos County",
  rsvpPhone: "0741912468",
  formattedRsvpPhone: "+254 741 912 468",
  rsvpDeadline: "15th September 2026",
  mpesaNumber: "0741912468",
  mpesaName: "Virginia / Kenneth",
  giftingNote: "Your love and presence are the greatest gifts to us. Should you wish to bless us further, enveloped gifts will be deeply appreciated.",
  closingQuote: "Your presence will make our day complete.",
  dressCodeTheme: "Traditional African Elegance",
  dressCodeDescription: "Embrace the warmth of our culture with traditional or modern African attire inspired by Earthy Terracotta, Forest Green, Warm Ochre/Gold, and Cream accents."
};

export const COLOR_PALETTE = [
  { name: "Terracotta Rust", hex: "#C15C3D", bgClass: "bg-[#C15C3D]", description: "Warm clay & traditional earth tones" },
  { name: "Forest Green", hex: "#2C4C3B", bgClass: "bg-[#2C4C3B]", description: "Deep foliage & rich eucalyptus leaves" },
  { name: "Warm Gold", hex: "#D4A359", bgClass: "bg-[#D4A359]", description: "Sunlit ochre & celebratory brass accents" },
  { name: "Parchment Cream", hex: "#F5ECE0", bgClass: "bg-[#F5ECE0]", description: "Soft ivory canvas & natural fibers" },
];

export const TIMELINE: EventTimelineItem[] = [
  {
    time: "10:00 AM",
    title: "Guest Arrival & Warm Welcome",
    description: "Guests arrive at Country Lodge Tawa. Enjoy fresh tropical refreshments and soft traditional melodies.",
    iconName: "Users"
  },
  {
    time: "10:30 AM",
    title: "Arrival of In-Laws & Delegation",
    description: "Joyful arrival of the groom's family delegation with traditional Kamba & Luo welcome songs.",
    iconName: "Music"
  },
  {
    time: "11:15 AM",
    title: "Traditional Negotiation & Blessing",
    description: "Elders convene for the ceremonial bride-wealth presentation, blessings, and cultural rituals.",
    iconName: "Award"
  },
  {
    time: "12:30 PM",
    title: "Unveiling of the Bride & Couple Entry",
    description: "Grand entrance of Virginia Mutuku accompanied by traditional dancers and celebratory ululations.",
    iconName: "Heart"
  },
  {
    time: "01:30 PM",
    title: "Celebratory Cultural Feast",
    description: "Sumptuous buffet featuring authentic traditional delicacies, roasted meats, and modern cuisine.",
    iconName: "Utensils"
  },
  {
    time: "03:00 PM",
    title: "Gift Presentation & Cake Cutting",
    description: "Guests present goodwill gifts and join the couple in cutting the ceremonial traditional cake.",
    iconName: "Gift"
  },
  {
    time: "04:30 PM",
    title: "Evening Entertainment & Dance",
    description: "Lively music, cultural dances, and photos with Virginia & Kenneth before official departure.",
    iconName: "Sparkles"
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: "gb-1",
    name: "Uncle Joseph & Auntie Mary",
    relationship: "Family",
    message: "May God bless Virginia and Kenneth abundantly on this sacred union! We are counting down the days to celebrate at Country Lodge Tawa.",
    createdAt: "2026-08-01T09:30:00Z"
  },
  {
    id: "gb-2",
    name: "David Ochieng",
    relationship: "Groom's Friend",
    message: "Kenneth my brother, congratulations! So happy for you and Virginia. The culture, the love, and the union will be legendary!",
    createdAt: "2026-08-03T14:15:00Z"
  },
  {
    id: "gb-3",
    name: "Dr. Grace Nthenya",
    relationship: "Bride's Sister",
    message: "My dear sister Virginia, you are going to make the most gorgeous bride! Kenneth is so blessed to have you. Love you both endlessly!",
    createdAt: "2026-08-05T18:45:00Z"
  }
];
