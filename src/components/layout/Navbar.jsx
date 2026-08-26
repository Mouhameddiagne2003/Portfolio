import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '../../data.jsx';
const FaviconImg = '/favicon.png';

const navLinks = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#experience", labelKey: "nav.experience" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#contact", labelKey: "nav.contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage (0 - 100)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800/80 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center p-1.5 shadow-sm group-hover:border-blue-500 transition-colors">
            <img 
              src={FaviconImg} 
              alt="Mouhamed Diagne" 
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-zinc-100">
              Mouhamed Diagne
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-zinc-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 dark:border-zinc-800 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive 
                    ? 'bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm font-semibold' 
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {t(link.labelKey)}
              </a>
            );
          })}
        </nav>

        {/* Controls: Language, Theme & CTA */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
            title="Changer de langue / Switch language"
          >
            <FaGlobe className="text-slate-500 dark:text-zinc-400 text-[11px]" />
            <span className="uppercase">{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <FaSun className="text-sm text-amber-400" /> : <FaMoon className="text-sm text-slate-700" />}
          </button>

          {/* Resume CTA */}
          <a
            href={personalInfo.cvFile}
            download="Mouhamed_DIAGNE_Resume.pdf"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-slate-800 dark:hover:bg-white transition-all font-mono shadow-sm"
          >
            {t("nav.resume")} ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 shadow-sm"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar positioned directly at the bottom edge of Navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-200/50 dark:bg-zinc-800/40 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-500 dark:via-indigo-400 dark:to-teal-300 transition-all duration-100 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 border-b border-slate-200 dark:border-zinc-800 px-4 py-4 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <a
                href={personalInfo.cvFile}
                download="Mouhamed_DIAGNE_Resume.pdf"
                className="mt-2 text-center py-2.5 rounded-lg bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-mono text-xs font-semibold shadow-sm"
              >
                {t("hero.ctaResume")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleTheme: PropTypes.func.isRequired
};
