
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, CheckCircle2, Globe } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const getProjectDescription = (name: string) => {
    switch (name) {
      case 'Lesoko Dashboards':
        return "Purpose-driven dashboards built with Django and PostgreSQL, featuring image-based tracking and Leaflet map integration.";
      case 'Startup Landing Pages (6+)':
        return "Crafted high-converting, performance-optimized landing pages for various startups and MNCs with advanced animations.";
      case 'ISSS & Ergonomic AI Mobile':
        return "Integrated mobile application development with AI-driven analytics focusing on ergonomic posture and user health tracking.";
      case 'Butterfly Ragland (Pre-School)':
        return "A comprehensive educational portal for Butterfly Ragland school, managing curriculum and student outreach.";
      case 'E-commerce & Crackers Store':
        return "High-performance e-commerce platforms like Buy Crackers Online, optimized for high seasonal traffic and SEO.";
      case 'Hospital Management System':
        return "A full-scale HMS platform for tracking patient records, scheduling appointments, and managing medical workflows.";
      default:
        return "A high-performance digital solution focused on scalability and refined user experience.";
    }
  };

  const getDeliverables = (name: string) => {
    switch (name) {
      case 'Hospital Management System':
        return ['Patient Record Management', 'Medical Appointment Flow', 'Scalable Database Architecture'];
      case 'ISSS & Ergonomic AI Mobile':
        return ['AI Analytics Integration', 'Ergonomic Feedback System', 'Cross-platform Mobile App'];
      case 'Startup Landing Pages (6+)':
        return ['Conversion Rate Optimization', 'Premium UI/UX Design', 'Multi-device Responsiveness'];
      case 'Lesoko Dashboards':
        return ['Leaflet Maps Integration', 'Image-based Tracking', 'Custom Admin Dashboards'];
      case 'E-commerce & Crackers Store':
        return ['SEO Ranking Strategy', 'High-Traffic Handling', 'E-commerce Checkout Flow'];
      case 'Butterfly Ragland (Pre-School)':
        return ['Student Management System', 'Parent Portal Interface', 'Educational Resource Hub'];
      default:
        return ['Custom Architecture Design', 'SEO & Performance Audit', 'AWS/Cloud Deployment'];
    }
  };

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">Work Showcases</h2>
          </div>
          <p className="max-w-md text-slate-500 text-lg">
            Scroll through these interactive document profiles to explore my key deliverables and results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-[550px] bg-white dark:bg-[#111111] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden group"
            >
              {/* Document Header */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-brand text-white">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold truncate max-w-[120px] dark:text-white">{project.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Project Profile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Active</span>
                </div>
              </div>

              {/* Scrollable Document Content */}
              <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-brand scrollbar-track-transparent custom-scrollbar">
                <style dangerouslySetInnerHTML={{ __html: `
                  .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                  .custom-scrollbar::-webkit-scrollbar-thumb { background: #111184; border-radius: 10px; }
                `}} />
                
                {/* Visual Cover */}
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Body */}
                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Overview</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {getProjectDescription(project.name)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-4">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-[11px] font-bold dark:text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-4">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {getDeliverables(project.name).map((deliverable, dIdx) => (
                        <li key={dIdx} className="flex items-start text-sm text-slate-500">
                          <CheckCircle2 size={14} className="text-brand mr-2 mt-1 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <p className="text-[10px] text-center text-slate-400 italic uppercase tracking-widest">
                      --- End of Preview ---
                    </p>
                  </div>
                </div>
              </div>

              {/* Document Footer (Sticky) */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/10 flex justify-between items-center mt-auto">
                <div className="flex space-x-1">
                   {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i===1 ? 'bg-brand' : 'bg-slate-300 dark:bg-slate-700'}`} />)}
                </div>
                {/* 
                  Commented out as requested. 
                  Uncomment the following block to show the project link again.
                */}
                {/* 
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[11px] font-bold text-brand hover:underline"
                >
                  Visit Portal <Globe size={12} className="ml-1" />
                </a>
                */}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Hint */}
        <div className="flex justify-center mt-12">
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-slate-400"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Scroll inside cards to read more</p>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
