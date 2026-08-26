import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBolt, FaArrowRight } from 'react-icons/fa';
import { projects } from '../../data.jsx';
import ProjectModal from '../ui/ProjectModal.jsx';

export default function Projects() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: "all", labelKey: "projects.filterAll" },
    { id: "fullstack", labelKey: "projects.filterFullstack" },
    { id: "backend", labelKey: "projects.filterBackend" },
    { id: "network", labelKey: "projects.filterNetwork" },
    { id: "ai-data", labelKey: "projects.filterAiData" },
    { id: "iot", labelKey: "projects.filterIot" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-2">
            {'// Réalisations & Systèmes'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cursor-target px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:border-zinc-800 shadow-sm'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-target flex flex-col justify-between rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 overflow-hidden backdrop-blur-sm group hover:border-blue-500/50 dark:hover:border-zinc-700 transition-all shadow-sm"
            >
              <div>
                {/* Image Preview Container */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 dark:bg-zinc-950 cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-white border border-slate-700/60 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/90 text-zinc-300 border border-slate-800 backdrop-blur-md truncate">
                      <FaBolt className="text-amber-400 text-[10px] shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-white transition-colors cursor-pointer mb-2 line-clamp-1"
                  >
                    {t(project.titleKey)}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                    {t(project.subtitleKey || project.descKey)}
                  </p>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-zinc-950/50 text-slate-700 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-zinc-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Actions */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <span>{t("projects.viewDetails")}</span>
                  <FaArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.source_code_link && (
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors shadow-sm"
                      title={project.source_code_back ? t("projects.viewCode") : "GitHub"}
                    >
                      <FaGithub className="text-xs" />
                    </a>
                  )}
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors shadow-sm"
                      title={t("projects.viewDemo")}
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
