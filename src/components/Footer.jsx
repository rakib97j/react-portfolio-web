
import logo from "../../public/projects/fav1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/RAKIB97J' },
    { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/RAKIB97J' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/RAKIB97J' },
    { icon: 'fab fa-facebook-f', href: 'https://facebook.com/RAKIB97J' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-black/5 dark:border-white/5 py-24 px-6 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex  gap-2">
              <div className="w-10 h-10 rounded-sm border border-brand/30 flex items-center justify-center bg-brand/10 group-hover:bg-brand/20 transition-all duration-300">
                <a href="/index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>

              <div className="text-slate-900  dark:text-white mt-1  font-mono font-black text-2xl mb-6 tracking-tighter uppercase">
                RAKIB<span className="text-brand">.</span>DEV
              </div>
            </div>
            <p className="text-muted font-mono text-[11px] max-w-xs leading-loose uppercase tracking-wider">
              "MD RAKIBUL HASSAN RAKIB — FRONTEND & MERN STACK DEVELOPER.
              <br />
              BUILT FROM A WORKSTATION, POLISHED FOR PRECISION ACROSS ALL
              THEMES."
            </p>

            <div className="flex gap-4 mt-10">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-black/10 dark:border-white/10 flex items-center justify-center text-muted hover:text-brand hover:border-brand transition-all duration-300"
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3 font-mono text-[9px] text-muted tracking-widest">
              <span className="w-2 mb-1 h-2 bg-brand animate-pulse shadow-[0_0_8px_var(--brand-color)]"></span>
              SYSTEM STATUS:{" "}
              <span className="text-slate-900 dark:text-white">
                OPERATIONAL
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-mono text-muted tracking-widest mb-8 uppercase">
              Quick Links
            </h5>
            <ul className="space-y-4 font-mono text-[10px] font-bold">
              {["Index", "About", "Path", "Work", "Stack", "Connect"].map(
                (link, i) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted hover:text-brand transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="opacity-20">0{i} //</span>{" "}
                      {link.toUpperCase()}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-mono text-muted tracking-widest mb-8 uppercase">
              Contact / Sync
            </h5>
            <ul className="space-y-4 font-mono text-[10px] font-bold">
              <li>
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=1bVDJRetZGA35AqfY2aQbTSGIusQu4NZo&export=download"
                  download
                  className="text-muted hover:text-brand transition-colors uppercase tracking-widest"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="mailto:rakibulhassansrakib559@gmail.com"
                  className="text-muted hover:text-brand transition-colors uppercase tracking-widest"
                >
                  MAIL TERMINAL
                </a>
              </li>
              <li>
                <a
                  href="#index"
                  className="text-brand hover:underline transition-all flex items-center gap-2 uppercase tracking-widest"
                >
                  <i className="fas fa-arrow-up text-[9px]"></i> Return to
                  Origin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 dark:border-white/5 pt-12 text-[9px] font-mono text-muted uppercase tracking-[0.3em]">
          <div>
            © {currentYear} MD RAKIBUL HASSAN RAKIB. ALL SYSTEMS NOMINAL.
          </div>
          <div className="mt-6 md:mt-0 space-x-6 flex items-center opacity-50">
            <span className="hover:text-brand transition-colors cursor-default">
              REACT 19
            </span>
            <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></span>
            <span className="hover:text-brand transition-colors cursor-default">
              TAILWIND 4
            </span>
            <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></span>
            <span className="hover:text-brand transition-colors cursor-default">
              FRAMER MOTION
            </span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full -z-10"></div>
    </footer>
  );
};

export default Footer;
