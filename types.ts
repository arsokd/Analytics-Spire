
export interface User {
  email: string;
  name: string;
  role: 'admin' | 'client';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  slug?: string;
  details?: string[]; // Optional array of strings for bullet points
  imageUrl?: string; // Image from Google Sheet
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string; // 'Podcast' | 'Training'
  description: string;
  youtubeUrl: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  text: string;
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  missionText: string;
  visionText: string;
  aboutText: string;
  contactEmail: string;
  founderName: string;
  founderBio: string;
  logoUrl?: string; // Logo from Google Sheet
  founderImageUrl?: string;
  partnerImageUrl?: string;
  brandNames?: string; // Semicolon-separated list from Sheet
  brandLogos?: string; // Semicolon-separated list of URLs from Sheet
}

export interface BrandAssociation {
  name: string;
  logo: string;
}

export interface ExpertItem {
  id: string;
  name: string;
  function: string;
  expertise: string;
  experience: string;
  imageUrl: string;
  bio: string;
}

export interface SiteData {
  config: SiteConfig;
  services: ServiceItem[];
  events: EventItem[];
  videos: VideoItem[];
  brands: BrandAssociation[];
  experts: ExpertItem[];
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}
