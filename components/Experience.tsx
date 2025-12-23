
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070707] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold">Professional Path</h2>
            </div>
            
            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-slate-200 dark:border-white/10"
                >
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-brand" />
                  <span className="text-sm font-bold text-brand uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-lg font-medium text-slate-500 mb-6">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((res, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle size={14} className="text-brand mr-3 mt-1 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold">Academic Foundation</h2>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand/30 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-transparent">
              <h4 className="text-xl font-bold mb-4 opacity-80">Continuously Evolving</h4>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                "Beyond my formal degree, I am a dedicated lifelong learner. I consistently explore new tools, modern frameworks, and emerging design trends to ensure I provide the most effective and up-to-date digital solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
