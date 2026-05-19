import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoLoop from './LogoLoop';
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiFigma, SiGithub } from 'react-icons/si';

const techLogos = [
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
  { node: <SiReact color="#61DAFB" />, title: "React" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js" },
  { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS" },
  { node: <SiNodedotjs color="#339933" />, title: "Node.js" },
  { node: <SiExpress className="text-black dark:text-white" />, title: "Express.js" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
  { node: <SiFirebase color="#FFCA28" />, title: "Firebase" },
  { node: <SiFigma color="#F24E1E" />, title: "Figma" },
  { node: <SiGithub className="text-black dark:text-white" />, title: "GitHub" },
];

const Stack = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const categories = [
    { id: 'languages', label: 'LANGUAGES', icon: 'fas fa-code' },
    { id: 'frameworks', label: 'FRAMEWORKS', icon: 'fas fa-cubes' },
    { id: 'tools', label: 'TOOLS', icon: 'fas fa-screwdriver-wrench' },
  ];

  const stack = {
    languages: [
      { name: "JavaScript", level: "", icon: "fab fa-js" },
      { name: "PHP", level: "", icon: "fab fa-php" },
      { name: "HTML", level: "", icon: "fab fa-html5" },
      { name: "CSS", level: "", icon: "fab fa-css3-alt" },
      { name: "SQL", level: "", icon: "fas fa-database" },
    ],
    frameworks: [
      { name: "MongoDB", level: "", icon: "fas fa-leaf" },
      { name: "Express.js", level: "", icon: "fas fa-server" },
      { name: "React.js", level: "", icon: "fab fa-react" },
      { name: "Node.js", level: "", icon: "fab fa-node-js" },
      { name: "Next.js", level: "", icon: "fas fa-cube" },
      { name: 'Laravel', level: '', icon: 'fab fa-laravel' },
      { name: "Tailwind CSS", level: "EXPERT", icon: "fas fa-wind" },

      { name: "Bootstrap", level: "EXPERT", icon: "fab fa-bootstrap" },
    ],
    tools: [
      { name: "Git / GitHub", level: "", icon: "fab fa-github" },
      { name: "Postman", level: "", icon: "fas fa-rocket" },
      { name: "VS Code", level: "", icon: "fas fa-laptop-code" },
      { name: "Figma", level: "", icon: "fab fa-figma" },
      { name: "Firebase", level: "", icon: "fas fa-fire" },
      { name: "Netlify", level: "", icon: "fas fa-cloud-arrow-up" },
      {
        name: "Vercel",
        level: "",
        icon: "fas fa-triangle-exclamation",
      },
      { name: "Canva", level: "", icon: "fas fa-palette" },
      { name: "Font Awesome", level: "", icon: "fab fa-font-awesome" },
      { name: "Daisy UI", level: "", icon: "fas fa-certificate" },
      { name: "Google Fonts", level: "", icon: "fas fa-font" },
      { name: "NPM", level: "", icon: "fab fa-npm" },
      { name: "React Icons", level: "", icon: "fab fa-reacteurope" },
    ],
  };

  return (
    <section id="stack" className="py-2 bg-main-bg relative transition-colors duration-500 overflow-hidden w-full">
      <div className="w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-16 px-6"
        >
          <span className="font-mono text-[10px] text-brand tracking-widest">04</span>
          <div className="h-[1px] w-12 bg-brand/30"></div>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">STACK / TOOLCHAIN</span>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-6 mb-12 text-center px-6 w-full max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold leading-[1.0] text-slate-900 dark:text-white"
          >
            The <span className="text-brand text-4xl font-black md:font-bold md:text-6xl dark:text-glow">workstation</span> I ship from.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-lg font-mono text-[11px] leading-loose uppercase tracking-wider text-center"
          >
            My current toolkit, organised by surface area. Tap a tab to drill into the layer.
          </motion.p>
        </div>

        {/* Logo Loop Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-main-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-main-bg to-transparent z-10 pointer-events-none"></div>
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={24}
            gap={40}
            hoverSpeed={10}
            scaleOnHover
            fadeOut={false} // Handled by custom gradient overlay above
            className="opacity-90 w-full"
          />
        </motion.div>

        {/* Tab Navigation Pill */}
        <div className="flex justify-center w-full px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 p-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-sm w-full max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-center gap-3 px-8 py-3 font-mono text-[10px] font-bold tracking-widest transition-all duration-300 relative whitespace-nowrap ${
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
        </div>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto px-6 w-full">
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
