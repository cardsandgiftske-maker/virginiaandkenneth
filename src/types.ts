export interface RsvpResponse {
  id: string;
  name: string;
  phone: string;
  attending: 'yes' | 'no';
  guestCount: number;
  dietary?: string;
  message?: string;
  submittedAt: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  relationship: string;
  message: string;
  createdAt: string;
}

export interface EventTimelineItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}
