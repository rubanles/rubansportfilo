
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-widest text-sm"
          >
            What I Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-4 tracking-tight"
          >
            Solutions for your growth
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand/50 dark:hover:border-brand transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center mb-8 shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-brand transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
