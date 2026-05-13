import  { useState, useEffect } from 'react';
import {  Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../../public/projects/fav1.png'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('index');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: '00 / INDEX', href: '#index', id: 'index' },
    { label: '01 / ABOUT', href: '#about', id: 'about' },
    { label: '02 / PATH', href: '#path', id: 'path' },
    { label: '03 / WORK', href: '#work', id: 'work' },
    { label: '04 / STACK', href: '#stack', id: 'stack' },
    { label: '05 / CONNECT', href: '#connect', id: 'connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-black/5 dark:border-white/5 bg-main-bg/30 dark:bg-black/30 backdrop-blur-3xl ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
        <a href="#index" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-sm border border-brand/30 flex items-center justify-center bg-brand/10 group-hover:bg-brand/20 transition-all duration-300">
            <p href="/index.html">
              {/* <img src="/public/projects/fav1.png" alt="Logo" /> */}
              <img src={logo} alt="Logo" />
            </p>
          </div>
          <span className="text-slate-900 dark:text-white font-black text-2xl tracking-tighter uppercase">
            RAKIB<span className="text-brand">.</span>DEV
          </span>
        </a>

        {/* Centered Nav Links */}
        <div className="hidden lg:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-8 py-3 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative py-1 font-mono text-[10px] font-bold tracking-widest transition-all duration-300 ${
                activeSection === item.id
                  ? "text-brand"
                  : "text-slate-500 dark:text-muted hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand shadow-[0_0_8px_var(--brand-color)]"></div>
              )}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-black/10 dark:border-white/10 hover:border-brand/50 bg-black/5 dark:bg-white/5 transition-all duration-300 group"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-brand group-hover:rotate-90 transition-transform duration-500" />
            ) : (
              <Moon className="w-4 h-4 text-brand group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>

          <a
            href="/public/CV/resume.pdf"
            target='_blank'
            className="hidden md:flex items-center gap-3 px-6 py-2.5 border border-brand/40 text-brand font-mono text-[10px] font-bold tracking-widest hover:bg-brand/10 transition-all rounded-sm relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
            RESUME.PDF
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
