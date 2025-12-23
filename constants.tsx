
import React from 'react';
import { 
  Monitor, 
  Layout, 
  Smartphone, 
  TrendingUp, 
  Palette, 
} from 'lucide-react';
import { Service, Project, Experience, Education, Skill } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    icon: <Monitor className="w-6 h-6" />,
    items: ['Business Websites', 'E-commerce Platforms', 'Portfolio & Informational Websites']
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    icon: <Layout className="w-6 h-6" />,
    items: ['Interactive Dashboards', 'Custom E-commerce Systems', 'Tailor-made Web Solutions']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['Android & iOS Apps', 'Cross-Platform Solutions', 'Business Apps']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    items: ['SEO', 'Google & Meta Ads', 'Social Media Management']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: <Palette className="w-6 h-6" />,
    items: ['Logo Design', 'Business Profiles', 'Brochures & Letterheads']
  }
];

export const PROJECTS: Project[] = [
  {
    name: 'Lesoko Dashboards',
    techStack: ['Django', 'PostgreSQL', 'AWS', 'Leaflet'],
    link: 'https://lesoko.in/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    // image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800', // Dashboard image
    status: 'completed'
  },
  {
    name: 'Startup Landing Pages (6+)',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'SEO'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&q=80&w=800', // Multi-landing page mockups
    status: 'completed'
  },
  {
    name: 'ISSS & Ergonomic AI Mobile',
    techStack: ['Flutter', 'Python', 'TensorFlow', 'Firebase'],
    link: 'https://isss.bz',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800', // Combined mobile & AI analytics
    status: 'completed'
  },
  {
    name: 'Butterfly Ragland (Pre-School)',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://butterflyragland.in',
    image: 'https://plus.unsplash.com/premium_photo-1684173662116-0e66b542774b?auto=format&fit=crop&q=80&w=800', // Preschool image
    status: 'completed'
  },
  {
    name: 'E-commerce & Crackers Store',
    techStack: ['PHP', 'Laravel', 'MySQL', 'SEO'],
    link: 'https://buycrackersonline.in/',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'Hospital Management System',
    techStack: ['Django', 'Python', 'PostgreSQL', 'REST API'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Developer & Digital Consultant',
    company: 'Freelance / Consultant',
    period: '2022 – Present',
    responsibilities: [
      'Architecting modern web applications using React, Node.js, and Laravel',
      'Developing scalable backend systems with Django and PostgreSQL',
      'Implementing high-performance SEO strategies and digital marketing campaigns',
      'Managing end-to-end deployment pipelines on AWS and cloud platforms'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Lesoko Technologies Pvt Ltd',
    period: '2021 – 2022',
    responsibilities: [
      'Built purpose-driven dashboards using Django & PostgreSQL',
      'Integrated image-based tracking with Leaflet maps',
      'Deployed applications using AWS',
      'Delivered clean, scalable, and maintainable code'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'MCA – Master of Computer Applications',
    institution: 'Hindusthan Institute of Technology, Coimbatore'
  }
];

export const SKILLS: Skill[] = [
  { name: 'PYTHON', category: 'technical' },
  { name: 'HTML5', category: 'technical' },
  { name: 'CSS3', category: 'technical' },
  { name: 'JS', category: 'technical' },
  { name: 'REACT', category: 'technical' },
  { name: 'POSTGRESQL', category: 'technical' },
  { name: 'MYSQL', category: 'technical' },
  { name: 'FIGMA', category: 'technical' },
  { name: 'ADOBE XD', category: 'technical' },
  { name: 'ILLUSTRATOR', category: 'technical' },
  { name: 'LARAVEL', category: 'technical' },
  { name: 'NEXT.JS', category: 'technical' },
  { name: 'NODE.JS', category: 'technical' },
  { name: 'EXPRESS', category: 'technical' },
  { name: 'MONGODB', category: 'technical' },
  { name: 'FIREBASE', category: 'technical' },
  { name: 'API', category: 'technical' },
  { name: 'TAILWIND', category: 'technical' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Flexibility', category: 'soft' },
  { name: 'Critical Thinking', category: 'soft' },
  { name: 'Self-Motivated', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
  { name: 'Creativity', category: 'soft' }
];
