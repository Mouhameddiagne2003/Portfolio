import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLayerGroup, FaBolt } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto z-10 custom-scrollbar"
          >
            {/* Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800">
              <img
                src={project.img}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/50 backdrop-blur-md transition-all z-20"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Title & Tag on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider bg-white text-slate-950 shadow-sm">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-zinc-300 border border-slate-700/60 backdrop-blur-sm">
                      <FaBolt className="text-amber-400 text-[10px]" />
                      {project.metrics}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t(project.titleKey)}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Subtitle / Key Description */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                {t(project.fullDescKey || project.descKey)}
              </p>

              {/* Key Features Section */}
              {project.featuresKey && (
                <div className="space-y-3 pt-2">
                  <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    <FaCheckCircle className="text-slate-700 dark:text-zinc-300" />
                    {t("projects.keyFeatures")}
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {t(project.featuresKey, { returnObjects: true })?.map?.((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-950/50 p-3 rounded-xl border border-slate-200 dark:border-zinc-800/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div className="space-y-3 pt-2">
                <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  <FaLayerGroup className="text-slate-700 dark:text-zinc-300" />
                  {t("projects.architecture")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-100 dark:bg-zinc-950 text-slate-800 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Source Code (GitHub / Front / Back) & Live Demo */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-zinc-800">
                {project.source_code_link && (
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-900 dark:text-zinc-100 border border-slate-300 dark:border-zinc-700 transition-all shadow-sm"
                  >
                    <FaGithub className="text-sm" />
                    {project.source_code_back ? t("projects.viewCode") : "Code GitHub"}
                  </a>
                )}
                {project.source_code_back && (
                  <a
                    href={project.source_code_back}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-900 dark:text-zinc-100 border border-slate-300 dark:border-zinc-700 transition-all shadow-sm"
                  >
                    <FaGithub className="text-sm" />
                    {t("projects.viewCodeBack")}
                  </a>
                )}
                {project.demo_link && (
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-900 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-all shadow-sm"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {t("projects.viewDemo")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
