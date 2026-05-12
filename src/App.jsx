import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Path from './components/Path';
import Work from './components/Work';
import Stack from './components/Stack';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
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
