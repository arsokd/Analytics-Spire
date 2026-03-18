
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
}

export interface EventItem {
  id: number | string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
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
}

export interface SiteData {
  config: SiteConfig;
  services: ServiceItem[];
  events: EventItem[];
  videos: VideoItem[];
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}
