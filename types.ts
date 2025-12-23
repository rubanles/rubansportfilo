
// Import React to provide access to React.ReactNode type
import React from 'react';

export interface Service {
  id: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  techStack: string[];
  link: string;
  image: string;
  status?: 'completed' | 'ongoing';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  level?: string; // e.g. "Read, Write, Speak"
}