import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Antigravity from './Antigravity';

const Hero = () => {
  const { theme } = useTheme();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toISOString().substr(11, 8) + ' UTC';
      setTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="index"
      className="relative min-h-screen pt-32 px-6 flex flex-col justify-center bg-main-bg overflow-hidden transition-colors duration-500"
    >
      {/* Antigravity Animation Background */}
      <Antigravity waveSpeed={3.6} />

      {/* 3D Perspective Grid */}
      <div className="grid-3d">
        <div
          className={`grid-3d-inner ${theme === "light" ? "opacity-20" : "opacity-100"}`}
        ></div>
        <div className="scanline"></div>
      </div>

      <div className="max-w-[1800px] mx-auto w-full relative z-10">
        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10 font-mono text-[11px] text-muted tracking-[0.2em] uppercase"
        >
          <div className="flex items-center gap-2">
            <div className="status-dot animate-pulse"></div>
            <span className="text-slate-900 dark:text-white">
              OPEN TO INTERNSHIP
            </span>
          </div>
          <span className="opacity-30">//</span>
          <span>{time}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline - Giant & Bold */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[50px] md:text-[120px] lg:text-[150px] font-black lg:leading-[0.88] tracking-[-0.04em] text-slate-900 dark:text-white relative"
            >
              Rakib
              <br />
              <span className="relative">
                Hassan
                <span className="inline-block w-8 h-8 lg:w-12 lg:h-12 bg-brand rounded-full ml-4 shadow-[0_0_20px_var(--brand-color)]"></span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 max-w-2xl"
            >
              <div className="text-brand font-mono text-xs mb-6 tracking-widest uppercase flex items-center gap-3">
                <span className="text-muted opacity-30">{">"}</span>
                ROLE::FRONTEND_&_MERN_STACK_DEVELOPER
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "steps(1)",
                  }}
                  className="text-brand"
                >
                  _
                </motion.span>
              </div>
              <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
                I am a passionate web developer — building scalable, accessible,
                and visually polished web apps with React and Next.js.
              </p>

              <div className="flex flex-wrap gap-4 mt-12 mb-6">
                <a
                  href="#work"
                  className="px-10 py-5 border border-brand text-brand font-bold text-xs tracking-[0.2em] hover:bg-brand/10 transition-all flex items-center gap-4 uppercase group"
                >
                  INITIATE SHOWCASE{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="../../public/CV/Screenshot 2026-05-26 010755.png"
                  download
                  className="px-10 py-5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xs tracking-[0.2em] hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-4 uppercase group"
                >
                  <Download className="w-4 h-4 text-muted group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />{" "}
                  DOWNLOAD CV
                </a>
              </div>
            </motion.div>
          </div>

          {/* System ID Sidebar (Terminal Style) - Optimized Size */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 md:p-8 backdrop-blur-md relative font-mono overflow-hidden max-w-[340px] ml-auto">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand/20"></div>

              <div className="flex justify-between items-center mb-8">
                <div className="text-[9px] text-muted tracking-widest">
                  SYSTEM.ID
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand-color)]"></div>
              </div>

              <div className="space-y-4 text-[10px] tracking-wider">
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-1.5">
                  <span className="text-muted opacity-50 lowercase">
                    handle
                  </span>
                  <span className="text-slate-900 dark:text-white">
                    @rakib97j
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-1.5">
                  <span className="text-muted opacity-50 lowercase">
                    location
                  </span>
                  <span className="text-slate-900 dark:text-white uppercase truncate ml-4">
                    GAZIPUR, DHAKA , BANGLADESH
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-1.5">
                  <span className="text-muted opacity-50 lowercase">mode</span>
                  <span className="text-slate-900 dark:text-white uppercase">
                    {theme}.WS
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/5 dark:border-white/5 pb-1.5">
                  <span className="text-muted opacity-50 lowercase">focus</span>
                  <span className="text-brand">MERN.stack</span>
                </div>
              </div>

              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    01+
                  </div>
                  <div className="text-[12px] text-muted mt-0.5 uppercase tracking-tighter">
                    Exp_Year
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    15+
                  </div>
                  <div className="text-[12px] text-muted mt-0.5 uppercase tracking-tighter">
                    PROJECT WORK
                  </div>
                </div>
              </div>

              {/* Decorative scanline inside box */}
              <div className="scanline"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
