
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const Path = () => {
  const milestones = [
    {
      type: "EXPERIENCE",
      icon: Briefcase,
      title: "Open to Internship",
      institution: "Looking for opportunities",
      location: "Remote / Hybrid / On-site",
      date: "PRESENT",
      description:
        "Currently a student building this portfolio and shipping side projects — actively seeking a frontend or MERN-stack internship where I can contribute, learn fast, and grow alongside a great team.",
      tags: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "JavaScript",
      ],
    },
    {
      type: "EDUCATION",
      icon: GraduationCap,
      title: "Diploma in Computer Science",
      institution: "Barguna Polytechnic Institute",
      location: "Barguna, Barguna",
      date: "2023 - RUNNING",
      description:
        "Currently pursuing a Diploma in Computer Science with a strong focus on web development, programming fundamentals, databases, and full-stack engineering. Building real-world projects alongside coursework.",
      tags: ["Web Dev", "Programming", "Databases"],
    },
    {
      type: "EDUCATION",
      icon: GraduationCap,
      title: "SSC — Business Studies",
      institution: "Global Public School",
      location: "Gazipur, Dhaka",
      date: "2022",
      description:
        "Completed the Secondary School Certificate in Business Studies, building a foundation in analytical thinking, accounting basics, and disciplined study habits that carry into engineering work.",
      tags: ["Business Studies", "Foundation"],
    },
    {
      type: "EDUCATION",
      icon: GraduationCap,
      title: "JSC",
      institution: "Global Public School",
      location: "Gazipur, Dhaka",
      date: "2019",
      description:
        "Completed the Junior School Certificate, where I first discovered my interest in computers, the Internet, and how websites are built — the spark that started my web development journey.",
      tags: ["Foundation"],
    },
  ];

  return (
    <section
      id="path"
      className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] text-brand tracking-widest mb-16 uppercase"
        >
          02 // PATH
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-xl leading-[1.1] text-slate-900 dark:text-white"
          >
            A timeline of{" "}
            <span className="text-brand dark:text-glow">build</span> & learn.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-sm font-mono text-xs leading-loose"
          >
            "Every project and milestone has shaped a more focused developer.
            Below is the verified history of what I've shipped, the stacks I've
            mastered, and what I've learned along the way."
          </motion.p>
        </div>

        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-black/5 dark:bg-white/10 hidden md:block"></div>

          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-12 group"
            >
              {/* Glow Dot */}
              <div className="absolute left-[-1px] md:left-[3px] top-10 w-3 h-3 rounded-full bg-brand shadow-[0_0_10px_#00FF00] z-10 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute left-[3px] md:left-[7px] top-11 w-1 h-1 rounded-full bg-brand z-10 md:hidden"></div>

              <div className="bg-slate-50 dark:bg-surface/30 border border-black/5 dark:border-white/10 p-8 hover:border-brand/30 transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-brand" />
                    </div>
                    <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                      {item.type}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-brand tracking-widest flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-brand transition-colors duration-300 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 font-mono text-[10px] text-muted uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 dark:text-white uppercase">
                      {item.institution}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-8 max-w-3xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[9px] font-mono text-muted tracking-widest group-hover:border-brand/20 transition-colors uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Path;
