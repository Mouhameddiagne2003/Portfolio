import { useState, useEffect } from 'react';
import '../i18n.js';
import './index.css';
import { Analytics } from "@vercel/analytics/react";

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingBackToTop from './components/ui/FloatingBackToTop.jsx';
import Hero from './components/sections/Hero.jsx';
import BentoAbout from './components/sections/BentoAbout.jsx';
import Experiences from './components/sections/Experiences.jsx';
import Projects from './components/sections/Projects.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 transition-colors duration-300 font-sans selection:bg-blue-100 dark:selection:bg-zinc-800 selection:text-blue-900 dark:selection:text-white bg-grid-pattern relative">
      <Analytics />

      {/* Floating Header with Scroll Progress */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single Page Content */}
      <main className="relative overflow-x-clip">
        <Hero />
        <BentoAbout />
        <Experiences />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
