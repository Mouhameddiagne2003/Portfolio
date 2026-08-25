import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  FaArrowRight, 
  FaDownload, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt,
  FaTerminal
} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { personalInfo, stats } from '../../data.jsx';
import AcidSquares from '../ui/AcidSquares.jsx';
import ShinyText from '../ui/ShinyText.jsx';

// Animated Counter Component that re-triggers on scroll into view
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(0);
      const controls = animate(count, value, {
        duration: 3.2,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier
      });
      const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [count, isInView, rounded, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative isolate min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* React Bits AcidSquares WebGL Background */}
      <div className="absolute inset-0 z-0 w-full h-full opacity-45 dark:opacity-60">
        <AcidSquares
          color1="#1D4ED8"
          color2="#38BDF8"
          color3="#FFFFFF"
          detail="medium"
          speed={0.7}
          waveDepth={1}
          zoom={1.3}
          density={10}
          glow={1}
          exposure={2700}
          spread={0.3}
          stepSize={0.002}
          colorShift={0}
          contrast={1}
          brightness={1}
          opacity={1}
          mouseInteraction
          mouseStrength={0.1}
          mouseRadius={0.35}
          blur={0}
          grain
          grainIntensity={0.05}
        />
      </div>

      {/* Radial Gradient Masks to protect text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-50/10 via-slate-50/35 to-slate-50 dark:from-zinc-950/10 dark:via-zinc-950/45 dark:to-zinc-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300 mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t("hero.badge")}</span>
            </motion.div>

            {/* Engineer Terminal Tag */}
            <div className="flex items-center gap-1.5 mb-3 px-3 py-2 max-w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950/95 text-[11px] sm:text-xs font-mono shadow-lg shadow-blue-950/20">
              <FaTerminal className="mr-1 shrink-0 text-emerald-400" />
              <span className="text-emerald-400">mouhamed@portfolio</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-zinc-300">$</span>
              <span className="terminal-path ml-1 text-zinc-200">~/software-engineer/mouhamed-diagne</span>
              <span className="terminal-cursor text-cyan-400">▋</span>
            </div>

            {/* Main Name with smooth Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 leading-[1.12] mb-4"
            >
              <ShinyText text="Mouhamed DIAGNE" speed={3.4} />
            </motion.h1>

            {/* Role Title */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-base sm:text-lg font-mono text-slate-800 dark:text-zinc-300 font-bold mb-5 shadow-sm"
            >
              {t(personalInfo.titleKey)}
            </motion.div>

            {/* Subtitle / Pitch */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8"
            >
              {t(personalInfo.subtitleKey)}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition-all shadow-md group"
              >
                {t("hero.ctaProjects")}
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.cvFile}
                download="Mouhamed-DIAGNE-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:border-slate-400 dark:hover:border-zinc-600 transition-all shadow-sm"
              >
                <FaDownload className="text-xs" />
                {t("hero.ctaResume")}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white font-mono text-xs font-medium transition-colors"
              >
                {t("hero.ctaContact")} ↘
              </a>
            </motion.div>

            {/* Quick Socials & Location */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-zinc-800 w-full"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-500">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-base" />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  aria-label="Twitter / X"
                >
                  <FaSquareXTwitter className="text-base" />
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Avatar & Animated Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Image Container with Glow Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 dark:from-zinc-700 dark:via-zinc-500 dark:to-zinc-800 rounded-3xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl">
                <img
                  src={personalInfo.profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-zinc-950/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* Quick Metrics Grid with Live Animated Counters */}
            <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-sm">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800/90 flex flex-col items-start backdrop-blur-md shadow-sm"
                >
                  <span className="text-2xl font-bold font-mono text-slate-900 dark:text-zinc-100">
                    <AnimatedCounter value={item.numericValue} suffix={item.suffix} />
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 mt-1">
                    {t(item.labelKey)}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
