
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#070707] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block mb-4">
               <span className="text-brand font-bold tracking-widest uppercase text-sm">About Me</span>
               <div className="h-1 w-full bg-brand/20 absolute -bottom-1 left-0" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              Bridging the gap between <br />
              <span className="text-brand">Design</span> and <span className="text-brand">Code</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6"
          >
            <p>
              I'm Ruban Prem Kumar, a freelance developer and digital consultant with hands-on experience in building modern websites, dashboards, and mobile applications.
            </p>
            <p>
              My philosophy is simple: build things that matter. I focus on clean UI, performance, scalability, and real business outcomes. Whether it's a small business site or a complex web solution, I ensure every pixel serves a purpose.
            </p>
            <div className="pt-4 flex space-x-12">
               <div>
                  <h4 className="text-3xl font-bold text-brand mb-1">4+</h4>
                  <p className="text-sm uppercase tracking-wider font-semibold opacity-60">Years Exp.</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-brand mb-1">20+</h4>
                  <p className="text-sm uppercase tracking-wider font-semibold opacity-60">Projects Done</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-brand mb-1">100%</h4>
                  <p className="text-sm uppercase tracking-wider font-semibold opacity-60">Success Rate</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
