
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';
import { CheckCircle2, Star, Lightbulb } from 'lucide-react';

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  // Mapping of skill names to Simple Icons slugs
  const slugMap: Record<string, string> = {
    'PYTHON': 'python',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'JS': 'javascript',
    'REACT': 'react',
    'POSTGRESQL': 'postgresql',
    'MYSQL': 'mysql',
    'FIGMA': 'figma',
    'ADOBE XD': 'adobexd',
    'ILLUSTRATOR': 'adobeillustrator',
    'LARAVEL': 'laravel',
    'NEXT.JS': 'nextdotjs',
    'NODE.JS': 'nodedotjs',
    'EXPRESS': 'express',
    'MONGODB': 'mongodb',
    'FIREBASE': 'firebase',
    'API': 'postman',
    'TAILWIND': 'tailwindcss'
  };

  const getIconColor = (n: string) => {
    switch (n) {
      case 'PYTHON': return '3776AB';
      case 'HTML5': return 'E34F26';
      case 'CSS3': return '1572B6';
      case 'JS': return 'F7DF1E';
      case 'REACT': return '61DAFB';
      case 'POSTGRESQL': return '4169E1';
      case 'MYSQL': return '4479A1';
      case 'FIGMA': return 'F24E1E';
      case 'ADOBE XD': return 'FF61F6';
      case 'ILLUSTRATOR': return 'FF9A00';
      case 'LARAVEL': return 'FF2D20';
      case 'NODE.JS': return '339933';
      case 'MONGODB': return '47A248';
      case 'FIREBASE': return 'FFCA28';
      case 'API': return 'FF6C37';
      case 'TAILWIND': return '06B6D4';
      default: return ''; // Empty for default color
    }
  };

  const slug = slugMap[name] || name.toLowerCase().replace(/\s+/g, '');
  const color = getIconColor(name);
  
  // Use a more robust CDN URL format
  // If color is specified, we append it. Otherwise, use default brand color.
  const baseUrl = `https://cdn.simpleicons.org/${slug}`;
  const iconUrl = color ? `${baseUrl}/${color}` : baseUrl;

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <img 
        src={iconUrl} 
        alt={name} 
        loading="lazy"
        className={`w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 
          ${(name === 'NEXT.JS' || name === 'EXPRESS') ? 'dark:invert' : ''}
          ${name === 'JS' ? 'dark:brightness-125' : ''}`}
        onError={(e) => {
          // Fallback if specific slug/color fails
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('official')) {
             target.src = `https://cdn.simpleicons.org/${slug}`;
          }
        }}
      />
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');

  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const filteredSkills = SKILLS.filter(s => s.category === activeTab);

  return (
    <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-widest text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white"
          >
            Professional Expertise
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/5 rounded-2xl md:rounded-[2rem]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-8 py-3 md:px-12 md:py-4 text-xs md:text-sm font-bold rounded-xl md:rounded-[1.8rem] transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabSkill"
                    className="absolute inset-0 bg-brand rounded-xl md:rounded-[1.8rem]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'technical' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {filteredSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ 
                        y: -10, 
                        backgroundColor: 'rgba(17, 17, 132, 0.05)',
                        borderColor: 'rgba(17, 17, 132, 0.2)'
                      }}
                      className="flex flex-col items-center justify-center aspect-square p-6 rounded-3xl bg-slate-50 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5 transition-all group"
                    >
                      <SkillIcon name={skill.name} />
                      <span className="mt-4 text-[10px] md:text-[11px] font-black tracking-[0.2em] text-slate-400 group-hover:text-brand dark:group-hover:text-white transition-colors uppercase text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'soft' && (
                <div className="max-w-4xl mx-auto space-y-12">
                   <div className="grid sm:grid-cols-2 gap-6">
                    {filteredSkills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-6 p-6 rounded-2xl bg-slate-50 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                           <Star size={20} />
                        </div>
                        <span className="text-lg font-bold text-slate-800 dark:text-white">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 rounded-[2.5rem] bg-brand text-white relative overflow-hidden group shadow-2xl shadow-brand/20"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                      <Lightbulb size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-6">
                        <CheckCircle2 size={24} className="text-white" />
                        <h4 className="text-2xl font-bold uppercase tracking-tight">Continuously Evolving</h4>
                      </div>
                      <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                        Started my journey with heavy focus on Django and Python. Successfully transitioned into modern full-stack development, now expertly delivering high-quality solutions using <strong>React, Node.js, and Laravel</strong>.
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
