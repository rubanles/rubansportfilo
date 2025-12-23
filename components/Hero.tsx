
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={item}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 mb-8"
          >
            <Sparkles size={14} className="text-brand" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-light">
              Available for Freelance Projects
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="text-brand">Ruban</span> <br className="hidden md:block" /> Prem Kumar
          </motion.h1>

          <motion.h2 
            variants={item}
            className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8"
          >
            Freelance Developer & Digital Consultant
          </motion.h2>

          <motion.p 
            variants={item}
            className="max-w-2xl text-lg md:text-xl text-slate-500 dark:text-slate-500 mb-12 leading-relaxed"
          >
            I craft fast, responsive websites, scalable web applications, and mobile apps — 
            and help businesses grow through SEO and digital marketing.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-brand text-white rounded-full font-bold overflow-hidden transition-all shadow-2xl shadow-brand/20"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center">
                View My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-slate-200 dark:border-white/10 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
