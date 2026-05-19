
import { motion } from 'framer-motion';
import { Code2, Cpu, Coffee } from 'lucide-react';
import PixelCard from './PixelCard';
import ExpandableText from './ExpandableText';

const About = () => {
  const metrics = [
    { label: 'PROJECT WORK', value: '15+', icon: Code2 },
    { label: 'YEARS BUILDING', value: '1+', icon: Cpu },
    { label: 'COFFEE PER SHIP', value: '∞', icon: Coffee },
  ];

  const tags = [
    'SYSTEMS THINKING',
    'DESIGN SYSTEMS',
    'REAL-TIME UX',
    'EDGE RENDERING',
    'DX-FIRST',
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-[10px] text-brand tracking-widest">
            01
          </span>
          <div className="h-[1px] w-12 bg-brand/30"></div>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
            ABOUT / IDENTITY
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-10 leading-[1.0] tracking-tighter text-slate-900 dark:text-white"
            >
              Engineering interfaces that feel{" "}
              <span className="text-brand dark:text-glow italic">alive.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 text-muted text-lg leading-relaxed max-w-2xl font-medium"
            >
              <ExpandableText bgClass="from-white dark:from-black" className="space-y-8">
                <p>
                  MERN Stack Developer focused on Building Scalable Web Apps with
                  React & Next.js. Frontend Specialist and JavaScript enthusiast —
                  currently pursuing a Diploma in Computer Science at Barguna
                  Polytechnic Institute. I love turning ideas into clean, fast,
                  and accessible interfaces, and I am actively building real-world
                  projects while looking for an internship opportunity to grow
                  with a great team.
                </p>
                <p className="text-base text-muted/80 leading-relaxed">
                  I treat the browser as a workstation: every keystroke, every
                  transition, every millisecond of latency is a design decision.
                  My favourite projects sit at the intersection of clean systems
                  thinking and unapologetically distinctive UI.
                </p>
              </ExpandableText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mt-16"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[9px] font-mono text-muted tracking-widest uppercase hover:bg-brand hover:text-black hover:border-brand hover:shadow-[0_0_15px_rgba(0,255,0,0.4)] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Metrics Card - Re-designed to match image */}
          <div className="lg:col-span-5">
            <PixelCard
              colors="#00ff66,#39ff14,#00ff99"
              gap={4}
              speed={35}
              className="bg-slate-50 dark:bg-[#0A0A0A]/50 border border-black/5 dark:border-white/10 p-10 relative overflow-hidden backdrop-blur-xl h-full"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase relative z-10 bg-main-bg/50 px-2 py-1 backdrop-blur-md rounded-sm border border-black/5 dark:border-white/5">
                  ./ABOUT.METRICS
                </div>
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand-color)]"></div>
              </div>

              <div className="space-y-10 relative z-10">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="group border-b border-black/5 dark:border-white/5 pb-8"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 border border-black/10 dark:border-brand/30 flex items-center justify-center bg-black/5 dark:bg-brand/5 group-hover:bg-brand/10 group-hover:border-brand/50 transition-all duration-300">
                        <m.icon className="w-5 h-5 text-brand drop-shadow-[0_0_5px_var(--brand-color)]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">
                          {m.label}
                        </div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
                          {m.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Currently Section from image */}
              <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5 relative z-10 bg-main-bg/50 backdrop-blur-sm -mx-10 -mb-10 p-10">
                <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-4">
                  Currently
                </div>
                <p className="text-sm text-slate-900 dark:text-white leading-relaxed font-medium">
                  "Crafting seamless user experiences with the MERN stack — and
                  obsessing over pixel-perfect UI designs."
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
