import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink,  ArrowUpRight, Plus, Minus } from 'lucide-react';
import ExpandableText from './ExpandableText';


const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "01",
      date: "2026",
      title: "Digi Tool",
      description:
        "A modern, responsive marketplace for premium digital products  AI tools, design assets, templates, and productivity software, all in one place.",
      tags: [
        "React.js",
        "JavaScript (ES6+)",
        "React-Toastify (NPM Package)",
        "Tailwind CSS + DaisyUI",
      ],
      image: "/projects/digitols.png",
      links: {
        source: "https://github.com/rakib97j/DigiTools",
        live: "https://digitool-rakib97j.netlify.app/",
      },
    },
    {
      id: "02",
      date: "2026",
      title: "GitHub Issues Tracker",
      description:
        "A live dashboard that fetches and visualizes GitHub issues for any public repository using the GitHub REST API. Includes search, filtering, and a clean responsive Tailwind UI.",
      tags: [
        "JavaScript",
        "JavaScript ES6",
        "API",
        "DOM",
        "Tailwind CSS",
        "HTML",
      ],
      image: "/projects/githubissue.png",
      links: {
        source: "https://github.com/rakib97j/GitHub-Issues-Tracker",
        live: "https://rakib97j.github.io/GitHub-Issues-Tracker/",
      },
    },
    {
      id: "03",
      date: "2026",
      title: "Job Application Tracker",
      description:
        "The Job Application Tracker is a simple and user-friendly web application that helps users manage their job search process efficiently. It allows users to track the total number of job applications, interviews, and rejected applications in one place.",
      tags: ["HTML", "JavaScript", "Tailwind"],
      image: "/projects/JAT.png",
      links: {
        source: "https://github.com/rakib97j/Job-Application-Tracker",
        live: "https://rakib97j.github.io/Job-Application-Tracker/",
      },
    },

    {
      id: "04",
      date: "2026",
      title: "First Portfolio",
      description:
        "After a dedicated journey of learning and building, I am thrilled to share my first personal portfolio website!",
      tags: ["HTML", "Tailwind CSS"],
      image: "/projects/HTportfoloi.png",
      links: {
        source: "https://github.com/rakib97j/portfolio-web",
        live: "https://rakib97j.github.io/portfolio-web/",
      },
    },

    {
      id: "05",
      date: "2026",
      title: "Payoo",
      description:
        "Payoo is a secure and user-friendly personal mobile financial service interface. It features a clean login system and a responsive dashboard designed to simulate essential financial transactions like sending money, adding money, and managing a digital wallet with a focus on seamless user experience.",
      tags: ["HTML", "Java Script", "Tailwind"],
      image: "/projects/pay.png",
      links: {
        source: "https://github.com/rakib97j/parsonal-paymant-system",
        live: "https://rakib97j.github.io/parsonal-paymant-system/",
      },
    },

    {
      id: "06",
      date: "2026",
      title: "TechWave",
      description:
        "A modern landing page concept for a tech-focused brand, built with semantic HTML and pure CSS. Focused on clean typography, layout craft, and a responsive, distraction-free experience.",
      tags: ["HTML", "CSS"],
      image: "/public/projects/jat.png",
      links: {
        source: "https://github.com/rakib97j/TechWave",
        live: "https://rakib97j.github.io/TechWave/",
      },
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  // Custom GitHub SVG to avoid lucide-react export issues
  const GitHubIcon = () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <section id="work" className="py-32 px-6 bg-main-bg relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] text-brand tracking-widest mb-16 uppercase"
        >
          03 // SELECTED / WORk
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold max-w-2xl leading-[1.0] text-slate-900 dark:text-white"
          >
            Selected projects from the <span className="text-brand dark:text-glow">workshop.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-sm font-mono text-[11px] leading-loose uppercase tracking-wider"
          >
           "A curated set of products I've designed, architected, and shipped. Each links to its source and a live deployment."
          </motion.p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 dark:bg-[#080808]  border-brand/20 hover:border-brand transition-all duration-500 group relative flex flex-col"
              >
                {/* Image Container with Overlays */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* ID Badge Overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-brand/50 backdrop-blur-sm text-brand font-mono text-[9px] font-bold tracking-widest z-10">
                    {project.id} / {project.date}
                  </div>

                  {/* Arrow Overlay */}
                  <div className="absolute top-4 right-4 text-brand opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-brand transition-colors text-slate-900 dark:text-white tracking-tight uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="mb-8">
                    <ExpandableText className="text-muted text-sm leading-relaxed font-medium" bgClass="from-slate-50 dark:from-[#080808]">
                      {project.description}
                    </ExpandableText>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-black/10 dark:border-white/10 text-[9px] font-mono text-muted tracking-widest uppercase group-hover:border-brand/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex items-center gap-8 pt-6 border-t border-black/5 dark:border-white/5">
                    <a href={project.links.source} className="flex items-center gap-2 font-mono text-[10px] font-bold text-muted hover:text-brand transition-colors tracking-[0.2em] uppercase group/link">
                      <GitHubIcon />
                      SOURCE
                    </a>
                    <a href={project.links.live} className="flex items-center gap-2 font-mono text-[10px] font-bold text-muted hover:text-brand transition-colors tracking-[0.2em] uppercase group/link">
                      <ExternalLink className="w-3.5 h-3.5" /> 
                      LIVE DEMO
                    </a>
                  </div>
                </div>

                {/* Permanent Card Border Glow */}
                <div className="absolute inset-0 border border-brand/5 group-hover:border-brand/40 pointer-events-none transition-colors duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button - Bottom Right */}
        <div className="mt-16 flex justify-end">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-4 px-10 py-5 border border-brand text-brand font-bold text-xs tracking-[0.2em] hover:bg-brand/10 transition-all uppercase group"
          >
            {showAll ? (
              <>COLLAPSE VIEW <Minus className="w-4 h-4 group-hover:scale-110 transition-transform" /></>
            ) : (
              <>VIEW ALL PROJECTS <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
