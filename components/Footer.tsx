
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold tracking-tighter mb-6">RUBAN<span className="text-brand">.</span></h3>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              Freelance Developer & Digital Consultant specializing in modern web solutions and business growth strategies.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-brand transition-colors">About</a></li>
              <li><a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-brand transition-colors">Services</a></li>
              <li><a href="#work" className="text-slate-600 dark:text-slate-400 hover:text-brand transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Socials</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-brand hover:text-white transition-all flex items-center justify-center">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-brand hover:text-white transition-all flex items-center justify-center">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-brand hover:text-white transition-all flex items-center justify-center">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-brand hover:text-white transition-all flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} Ruban Prem Kumar. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
