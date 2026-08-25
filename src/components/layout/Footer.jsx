import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { personalInfo } from '../../data.jsx';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800/80 py-12 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & status */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800 dark:text-zinc-200">
              Mouhamed DIAGNE
            </span>
            <span className="text-slate-400 dark:text-zinc-600">•</span>
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.name}. {t("footer.rights")}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-blue-500 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm"
            aria-label="Twitter / X"
          >
            <FaSquareXTwitter className="text-base" />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm"
            title={t("footer.backToTop")}
          >
            <FaArrowUp className="text-[10px]" />
            <span>{t("footer.backToTop")}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
