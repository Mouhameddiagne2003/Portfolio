import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../../data.jsx';

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-2">
            {'// Parcours Professionnel'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            {t("exp.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3">
            {t("exp.subtitle")}
          </p>
        </div>

        {/* Experience Timeline / Cards List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="cursor-target p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 backdrop-blur-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                
                {/* Company Logo & Role info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
                      {t(exp.roleKey)}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {exp.company}
                      </span>
                      <span className="text-slate-400 dark:text-zinc-600">•</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                        {t(exp.typeKey)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap items-center gap-2 md:self-start">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-600 dark:text-zinc-400">
                    <FaCalendarAlt className="text-[10px]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-950/60 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-600 dark:text-zinc-400">
                    <FaMapMarkerAlt className="text-[10px]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

              </div>

              {/* Context Summary */}
              {exp.contextKey && (
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 mb-4 italic">
                  {t(exp.contextKey)}
                </p>
              )}

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6">
                {t(exp.pointsKey, { returnObjects: true })?.map?.((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-500 mt-2 shrink-0 group-hover:bg-blue-500 transition-colors" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used in this role */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-200 dark:border-zinc-800/60">
                <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 mr-1.5">Stack:</span>
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-zinc-950/50 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
