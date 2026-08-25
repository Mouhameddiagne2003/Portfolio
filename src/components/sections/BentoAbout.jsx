import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaServer, 
  FaMoneyBillWave, 
  FaBrain,
  FaShieldAlt
} from 'react-icons/fa';
import { educationList } from '../../data.jsx';
import CardSwap, { Card } from '../ui/CardSwap.jsx';

export default function BentoAbout() {
  const { t } = useTranslation();
  const scrollStageRef = useRef(null);

  return (
    <section id="about" className="py-24 relative overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={scrollStageRef}
          className="about-scroll-stage"
          style={{ '--about-scroll-distance': '2700px' }}
        >
          <div className="about-scroll-stage__sticky">
            {/* The heading stays visible below the navbar during the card sequence. */}
            <div className="flex flex-col items-center text-center mb-28">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500 mb-2">
                {'// Profil & Vision'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
                {t("bento.title")}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mt-3">
                {t("bento.subtitle")}
              </p>
            </div>

            {/* 2-Column Layout: Left (Academic & Overview) | Right (Interactive CardSwap 3D) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start lg:min-h-[540px]">
          
          {/* Left Column: Academic & Foundation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 shadow-sm backdrop-blur-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200">
                    <FaGraduationCap className="text-xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                      {t("bento.academicTitle")}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-500">
                      ESP Dakar • DIC Génie Informatique
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
                  2021 — 2026
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {t("bento.academicText")}
              </p>

              {/* Education Timeline Details */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-zinc-800">
                {educationList.map((edu) => (
                  <div key={edu.id} className="flex items-start justify-between text-xs gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950/40 border border-slate-200/80 dark:border-zinc-800/80">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-800 dark:text-zinc-200">
                        {t(edu.degreeKey)}
                      </span>
                      <span className="text-slate-500 dark:text-zinc-500 text-[11px]">
                        {t(edu.schoolKey)}
                      </span>
                    </div>
                    <span className="font-mono text-slate-500 dark:text-zinc-400 shrink-0 text-[11px] font-medium">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Column: React Bits 3D CardSwap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-start pt-4 min-h-[540px]"
          >
            <div className="w-full h-full flex items-center justify-center">
              <CardSwap
                width={480}
                height={420}
                cardDistance={35}
                verticalDistance={45}
                skewAmount={3}
                easing="smooth"
                scrollTriggerRef={scrollStageRef}
                scrollPerCard={900}
              >
                {/* Card 1: Ingénierie Logicielle & Systèmes Métiers */}
                <Card className="p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                        <FaServer className="text-lg" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        {'// 01. Architecture'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
                      {t("bento.card1Title")}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {t("bento.card1Text")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Performance & APIs</span>
                    <span>Full-Stack ➔</span>
                  </div>
                </Card>

                {/* Card 2: FinTech & Intégration de services */}
                <Card className="p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                        <FaMoneyBillWave className="text-lg" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        {'// 02. FinTech'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
                      {t("bento.card2Title")}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {t("bento.card2Text")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Wave • OM • Paydunya • SYSCOHADA</span>
                    <span>Intégrations ➔</span>
                  </div>
                </Card>

                {/* Card 3: IA & Technologies émergentes */}
                <Card className="p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
                        <FaBrain className="text-lg" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        {'// 03. IA & IoT'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
                      {t("bento.card3Title")}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {t("bento.card3Text")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Gemini • DeepSeek • ESP32 MQTT</span>
                    <span>Innovation ➔</span>
                  </div>
                </Card>

                {/* Card 4: Sécurité & Architecture */}
                <Card className="p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                        <FaShieldAlt className="text-lg" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        {'// 04. Sécurité'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
                      {t("bento.card4Title")}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {t("bento.card4Text")}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Fiabilité & Résilience</span>
                    <span>DevSecOps ➔</span>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
