import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data.jsx';

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-2">
            {'// Toolkit & Technologies'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            {t("skills.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 backdrop-blur-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 shadow-sm">
                      <CategoryIcon className="text-lg" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                      {t(category.titleKey)}
                    </h3>
                  </div>

                  {/* Skills List in Category with Brand Color on Hover */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={sIdx}
                          style={{
                            '--skill-color': skill.color || '#3b82f6',
                            '--skill-color-dark': skill.darkColor || skill.color || '#60a5fa'
                          }}
                          className="tech-skill flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950/50 border border-slate-200/80 dark:border-zinc-800/80 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                        >
                          <SkillIcon 
                            className="tech-skill__accent text-base transition-colors duration-300 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="tech-skill__accent block text-xs font-semibold truncate transition-colors duration-300 text-slate-800 dark:text-zinc-200">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
