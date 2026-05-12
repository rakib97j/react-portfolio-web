
import { motion } from 'framer-motion';
import { ArrowUpRight,  UserPlus, Fingerprint } from 'lucide-react';

import rakibImg from '../../public/projects/rakib1.jpg'

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
    <section
      id="connect"
      className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] text-brand tracking-widest">
            05
          </span>
          <div className="h-[1px] w-12 bg-brand/30"></div>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
            CONNECT / CHANNELS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[100px] font-black leading-[0.88] tracking-tighter mb-12 text-slate-900 dark:text-white uppercase"
            >
              Let's build{" "}
              <span className="text-brand dark:text-glow text-5xl md:text-[100px]">
                something
              </span>
              <br />
              that hums.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12"
            >
              Open to collaborations, freelance engagements, and serious
              conversations about product. Pick your channel — I respond fastest
              on <span className="font-bold">FACEBOOK & LINKEDIN</span>.
            </motion.p>

            <motion.a
              href="mailto:rakibulhassansrakib559@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center  gap-4 px-2 md:px-8 py-5 border border-brand text-brand font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand hover:text-black hover:shadow-[0_0_25px_#00FF00] transition-all duration-300 group"
            >
              <i className="far fa-envelope text-sm"></i>
              RAKIBULHASSANRAKIB559@GMAIL.COM
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right Placeholder Element (Glassmorphism Profile Card) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] max-w-[420px] ml-auto"
            >
              {/* Main Card Frame */}
              <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-2xl rounded-sm overflow-hidden group">
                {/* Floating Animation Wrapper */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full p-8 flex flex-col justify-between"
                >
                  {/* Top Metadata */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="font-mono text-[8px] text-brand tracking-[0.3em] uppercase">
                        USER.IDENTITY.RAKIB.JS
                      </div>
                      <div className="font-mono text-[10px] text-muted tracking-widest uppercase">
                        MERN_STACK
                      </div>
                    </div>
                    <Fingerprint className="w-6 h-6 text-brand/20 group-hover:text-brand transition-colors duration-500" />
                  </div>

                  {/* Center Placeholder Icon / Future Profile Image */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <div className="w-full h-full rounded border border-dashed border-brand/30 flex items-center justify-center relative overflow-hidden">
                      {/* MY IMAGE  */}
                      <img
                        src={rakibImg}
                        alt="Rakib"
                        className="w-full h-full object-cover"
                      />

                      <UserPlus className="w-8 h-8 text-muted group-hover:text-brand transition-colors duration-500" />

                      {/* Scanning line animation */}
                      <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute left-0 w-full h-[1px] bg-brand/50 blur-[2px] z-10"
                      />
                    </div>
                    <div className="text-[9px] font-mono text-muted tracking-[0.4em] uppercase opacity-40">
                      <span className="font-bold">
                        INTERN_MODE.ACTIVE_READY
                      </span>
                    </div>
                  </div>

                  {/* Bottom Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-black/5 dark:border-white/10 pt-6">
                    <div>
                      <div className="font-mono text-[8px] text-muted uppercase tracking-widest mb-1">
                        Status
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-[10px] tracking-widest uppercase">
                        LEVEL_UP
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[8px] text-muted uppercase tracking-widest mb-1">
                        Access
                      </div>
                      <div className="font-bold text-brand text-[10px] tracking-widest uppercase">
                        GAZIPUR || REMOTE_OK
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand/5 blur-3xl -z-10"></div>

                {/* Neon Edge Highlight */}
                <div className="absolute inset-0 border border-brand/0 group-hover:border-brand/20 transition-all duration-700 pointer-events-none"></div>
              </div>

              {/* Backglow element */}
              <div className="absolute -inset-4 bg-brand/5 blur-2xl rounded-full -z-20 group-hover:bg-brand/10 transition-all"></div>
            </motion.div>
          </div>
        </div>

        {/* Channels Grid */}
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
                  <i
                    className={`${ch.icon} text-xl text-muted group-hover:text-brand transition-colors`}
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand transition-colors">
                    {ch.name}
                  </div>
                  <div className="text-[10px] font-mono text-muted tracking-widest uppercase">
                    {ch.handle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-brand transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />

              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/[0.02] transition-colors"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
