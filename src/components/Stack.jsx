import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Stack = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: 'fas fa-code' },
    { id: 'frameworks', label: 'FRAMEWORKS', icon: 'fas fa-cubes' },
    { id: 'tools', label: 'TOOLS', icon: 'fas fa-screwdriver-wrench' },
  ];

  const stack = {
    languages: [
      { name: "JavaScript", level: "ADVANCED", icon: "fab fa-js" },
      { name: "PHP", level: "INTERMEDIATE", icon: "fab fa-php" },
      { name: "HTML", level: "EXPERT", icon: "fab fa-html5" },
      { name: "CSS", level: "EXPERT", icon: "fab fa-css3-alt" },
      { name: "SQL", level: "EXPERT", icon: "fas fa-database" },
    ],
    frameworks: [
      { name: "MongoDB", level: "ADVANCED", icon: "fas fa-leaf" },
      { name: "Express.js", level: "ADVANCED", icon: "fas fa-server" },
      { name: "React.js", level: "ADVANCED", icon: "fab fa-react" },
      { name: "Node.js", level: "ADVANCED", icon: "fab fa-node-js" },
      { name: "Next.js", level: "ADVANCED", icon: "fas fa-cube" },
      { name: 'Laravel', level: 'INTERMEDIATE', icon: 'fab fa-laravel' },
      { name: "Tailwind CSS", level: "EXPERT", icon: "fas fa-wind" },

      { name: "Bootstrap", level: "EXPERT", icon: "fab fa-bootstrap" },
    ],
    tools: [
      { name: "Git / GitHub", level: "ADVANCED", icon: "fab fa-github" },
      { name: "Postman", level: "ADVANCED", icon: "fas fa-rocket" },
      { name: "VS Code", level: "EXPERT", icon: "fas fa-laptop-code" },
      { name: "Figma", level: "INTERMEDIATE", icon: "fab fa-figma" },
      { name: "Firebase", level: "INTERMEDIATE", icon: "fas fa-fire" },
      { name: "Netlify", level: "ADVANCED", icon: "fas fa-cloud-arrow-up" },
      {
        name: "Vercel",
        level: "ADVANCED",
        icon: "fas fa-triangle-exclamation",
      },
      { name: "Canva", level: "INTERMEDIATE", icon: "fas fa-palette" },
      { name: "Font Awesome", level: "EXPERT", icon: "fab fa-font-awesome" },
      { name: "Daisy UI", level: "EXPERT", icon: "fas fa-certificate" },
      { name: "Google Fonts", level: "EXPERT", icon: "fas fa-font" },
      { name: "NPM", level: "EXPERT", icon: "fab fa-npm" },
      { name: "React Icons", level: "ADVANCED", icon: "fab fa-reacteurope" },
    ],
  };

  return (
    <section id="stack" className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] text-brand tracking-widest">04</span>
          <div className="h-[1px] w-12 bg-brand/30"></div>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">STACK / TOOLCHAIN</span>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold max-w-2xl leading-[1.0] text-slate-900 dark:text-white"
          >
            The <span className="text-brand dark:text-glow">workstation</span> I ship from.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-sm font-mono text-[11px] leading-loose uppercase tracking-wider"
          >
            My current toolkit, organised by surface area. Tap a tab to drill into the layer.
          </motion.p>
        </div>

        {/* Tab Navigation Pill */}
        <div className="flex p-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-sm mb-16 max-w-fit overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-8 py-3 font-mono text-[10px] font-bold tracking-widest transition-all duration-300 relative whitespace-nowrap ${
                activeTab === cat.id 
                ? 'text-brand' 
                : 'text-muted hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand/10 border border-brand/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <i className={`${cat.icon} text-sm relative z-10`} />
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full"
            >
              {stack[activeTab].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-slate-50 dark:bg-surface/30 border border-black/5 dark:border-white/10 p-6 flex items-center gap-6 hover:border-brand/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 group-hover:bg-brand/5 group-hover:border-brand/30 transition-all">
                    <i className={`${item.icon} text-xl text-muted group-hover:text-brand transition-colors`} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg tracking-tight mb-0.5 group-hover:text-brand transition-colors">{item.name}</div>
                    <div className="font-mono text-[9px] text-muted tracking-widest uppercase">{item.level}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Stack;
