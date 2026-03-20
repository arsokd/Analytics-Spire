
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
  details?: string[]; // Optional array of strings for bullet points
  imageUrl?: string; // Image from Google Sheet
}

export interface EventItem {
  id: number | string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  imageUrl?: string; // Image from Google Sheet
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
  partnerName?: string;
  partnerBio?: string;
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

export interface SiteData {
  config: SiteConfig;
  services: ServiceItem[];
  events: EventItem[];
  videos: VideoItem[];
  brands: BrandAssociation[];
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}
