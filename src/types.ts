export interface BookEdition {
  id: 'digital' | 'print' | 'audio' | 'bundle';
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarLetter: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type ModalType = 'digital-checkout' | 'print-checkout' | 'audio-checkout' | 'sample-reader' | 'privacy' | 'terms' | 'contact' | 'press' | null;
