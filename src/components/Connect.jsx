import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const Connect = () => {
  const channels = [
    {
      name: 'GitHub',
      handle: '/RAKIB97J',
      href: 'https://github.com/RAKIB97J',
      icon: 'fab fa-github',
    },
    {
      name: 'LinkedIn',
      handle: '/IN/RAKIB97J',
      href: 'https://linkedin.com/in/RAKIB97J',
      icon: 'fab fa-linkedin-in',
    },
    {
      name: 'Twitter / X',
      handle: '@RAKIB97J',
      href: 'https://twitter.com/RAKIB97J',
      icon: 'fab fa-x-twitter',
    },
    {
      name: 'Facebook',
      handle: '/RAKIB97J',
      href: 'https://facebook.com/RAKIB97J',
      icon: 'fab fa-facebook-f',
    },
    {
      name: 'Instagram',
      handle: '@RAKIB97J',
      href: 'https://instagram.com/RAKIB97J',
      icon: 'fab fa-instagram',
    },
    {
      name: 'Threads',
      handle: '@RAKIB97J',
      href: 'https://threads.net/@RAKIB97J',
      icon: 'fas fa-at',
    },
    {
      name: 'Email',
      handle: 'RAKIBULHASSANRAKIB559@GMAIL.COM',
      href: 'mailto:rakibulhassansrakib559@gmail.com',
      icon: 'far fa-envelope',
    },
  ];

  return (
    <section id="connect" className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-500 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] text-brand tracking-widest">05</span>
          <div className="h-[1px] w-12 bg-brand/30"></div>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">CONNECT / CHANNELS</span>
        </motion.div>

        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10 text-slate-900 dark:text-white uppercase"
          >
            Let's build <span className="text-brand dark:text-glow">something</span><br />
            that hums.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12"
          >
            Open to collaborations, freelance engagements, and serious conversations about product. Pick your channel — I respond fastest on the first two.
          </motion.p>

          <motion.a
            href="mailto:rakibulhassansrakib559@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-5 border border-brand text-brand font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand hover:text-black hover:shadow-[0_0_25px_#00FF00] transition-all duration-300 group"
          >
            <i className="far fa-envelope text-sm"></i>
            RAKIBULHASSANRAKIB559@GMAIL.COM
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 bg-slate-50 dark:bg-[#0A0A0A]/50 border border-black/5 dark:border-white/10 hover:border-brand/40 transition-all duration-300 flex items-center justify-between relative overflow-hidden"
            >
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 group-hover:bg-brand/10 transition-all duration-300">
                  <i className={`${ch.icon} text-xl text-muted group-hover:text-brand transition-colors`} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand transition-colors">{ch.name}</div>
                  <div className="text-[10px] font-mono text-muted tracking-widest uppercase">{ch.handle}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-brand transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
              
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/[0.02] transition-colors"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
