import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Path from './components/Path';
import Work from './components/Work';
import Stack from './components/Stack';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-brand/30 selection:text-brand transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Path />
          <Work />
          <Stack />
          <Connect />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
