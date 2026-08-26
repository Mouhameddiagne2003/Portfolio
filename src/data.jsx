import React from 'react';
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaPhp,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaMoneyBillWave,
  FaNetworkWired,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
  SiAngular,
  SiUml,
  SiPostman,
  SiC,
  SiPrisma,
  SiGraphql,
  SiGooglecloud,
  SiOpenai,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandWhatsapp } from 'react-icons/tb';

// Assets
import Work1 from './assets/ecg_iot.png';
import Work2 from './assets/maternity.jpg';
import Work3 from './assets/spadon.jpg';
import Work4 from './assets/c.png';
import Work7 from './assets/data_eval.png';
import Work8 from './assets/waxtaan_splash.png';
import Work5G from './assets/5g_network_designer.png';

import nandigium from './assets/nandigium_consulting_logo.jpeg';
import feindy from './assets/feindy.jpg';
import awa from './assets/awa_logo.png';
import ayweu from './assets/ayweu_logo.png';
import EngineerPhoto from './assets/me_engineer.jpg';
import CvPdf from './assets/Mouhamed_DIAGNE_FlowCV_Resume_2026-08-25.pdf';

export const personalInfo = {
  name: "Mouhamed DIAGNE",
  titleKey: "hero.role",
  subtitleKey: "hero.subtitle",
  email: "mouhameddiagne029@gmail.com",
  phone: "+221 78 195 89 11",
  location: "Dakar, Sénégal",
  statusKey: "hero.status",
  profileImg: EngineerPhoto,
  cvFile: CvPdf,
  socials: {
    github: "https://github.com/Mouhameddiagne2003",
    linkedin: "https://www.linkedin.com/in/mouhamed-diagne-265015245/",
    twitter: "https://x.com/_amethjr10",
  }
};

export const stats = [
  { id: 1, numericValue: 3, suffix: "+", labelKey: "stats.yearsExperience" },
  { id: 2, numericValue: 10, suffix: "+", labelKey: "stats.projectsDelivered" },
  { id: 3, numericValue: 4, suffix: "+", labelKey: "stats.companiesWorked" },
  { id: 4, numericValue: 100, suffix: "%", labelKey: "stats.commitment" },
];

export const educationList = [
  {
    id: 1,
    degreeKey: "edu.dic.degree",
    schoolKey: "edu.dic.school",
    period: "2023 — 2026",
    descKey: "edu.dic.desc",
    badge: "Diplôme d'Ingénieur",
  },
  {
    id: 2,
    degreeKey: "edu.dut.degree",
    schoolKey: "edu.dut.school",
    period: "2021 — 2023",
    descKey: "edu.dut.desc",
    badge: "DUT Informatique",
  },
  {
    id: 3,
    degreeKey: "edu.bac.degree",
    schoolKey: "edu.bac.school",
    period: "2021",
    descKey: "edu.bac.desc",
    badge: "Mention Bien",
  }
];

export const experiences = [
  {
    id: "awa",
    roleKey: "exp.awa.role",
    company: "AWA Africa",
    contextKey: "exp.awa.context",
    period: "Août 2025 — Juillet 2026",
    logo: awa,
    location: "Dakar, Sénégal",
    typeKey: "exp.type.apprenticeship",
    skills: ["KeystoneJS 6", "React", "GraphQL", "Prisma", "MySQL", "Gemini / Vertex AI", "Google Cloud", "Wave / Orange Money API", "WhatsApp API"],
    pointsKey: "exp.awa.points",
  },
  {
    id: "ayweu",
    roleKey: "exp.ayweu.role",
    company: "Ayweu",
    contextKey: "exp.ayweu.context",
    period: "Mars 2025 — Août 2025",
    logo: ayweu,
    location: "Dakar & Gambie",
    typeKey: "exp.type.internship",
    skills: ["Next.js", "Node.js", "Express", "MongoDB", "ActivePieces", "Paydunya", "APIs Yango / Paps", "WhatsApp API"],
    pointsKey: "exp.ayweu.points",
  },
  {
    id: "spadon",
    roleKey: "exp.spadon.role",
    company: "Spadon",
    contextKey: "exp.spadon.context",
    period: "Sept 2023 — 2024",
    logo: feindy,
    location: "Dakar, Sénégal",
    typeKey: "exp.type.contract",
    skills: ["FullStack JavaScript", "Java EE", "REST API", "Optimisation UI"],
    pointsKey: "exp.spadon.points",
  },
  {
    id: "feindy",
    roleKey: "exp.feindy.role",
    company: "Feindy Solutions",
    contextKey: "exp.feindy.context",
    period: "Mai 2023 — Juil 2023",
    logo: feindy,
    location: "Dakar, Sénégal",
    typeKey: "exp.type.internship",
    skills: ["Java EE", "Spring", "MySQL", "SMTP Google API", "CronJobs"],
    pointsKey: "exp.feindy.points",
  },
  {
    id: "nandigium",
    roleKey: "exp.nandigium.role",
    company: "Nandigium Consulting",
    contextKey: "exp.nandigium.context",
    period: "Juil 2022 — Sept 2022",
    logo: nandigium,
    location: "Dakar, Sénégal",
    typeKey: "exp.type.internship",
    skills: ["Cybersécurité", "ISO 27001", "Réseaux Sécurisés", "Audit"],
    pointsKey: "exp.nandigium.points",
  }
];

export const projects = [
  {
    id: 1,
    slug: "5g-network-designer",
    titleKey: "projects.fiveg.title",
    subtitleKey: "projects.fiveg.subtitle",
    category: "network",
    img: Work5G,
    featured: true,
    tags: ["Next.js", "Tailwind CSS", "Node.js (Express)", "Prisma", "PostgreSQL", "Google Maps API", "COST-231 Hata"],
    metrics: "Modélisation COST-231 Hata • Shannon & 3GPP",
    descKey: "projects.fiveg.desc",
    fullDescKey: "projects.fiveg.fullDesc",
    featuresKey: "projects.fiveg.features",
    source_code_link: "https://github.com/Mouhameddiagne2003/5G-Network-Design",
    source_code_back: "https://github.com/Mouhameddiagne2003/5G-Network-Design-back",
    demo_link: null,
  },
  {
    id: 2,
    slug: "waxtaan",
    titleKey: "projects.waxtaan.title",
    subtitleKey: "projects.waxtaan.subtitle",
    category: "fullstack",
    img: Work8,
    featured: true,
    tags: ["Next.js", "Spring Boot", "TypeScript", "Tailwind CSS", "WebSocket", "PostgreSQL"],
    metrics: "Temps réel < 50ms • Multi-utilisateurs",
    descKey: "projects.waxtaan.desc",
    fullDescKey: "projects.waxtaan.fullDesc",
    featuresKey: "projects.waxtaan.features",
    source_code_link: "https://github.com/Mouhameddiagne2003/Waxtaan-back",
    demo_link: null,
  },
  {
    id: 3,
    slug: "data-eval",
    titleKey: "projects.dataeval.title",
    subtitleKey: "projects.dataeval.subtitle",
    category: "ai-data",
    img: Work7,
    featured: true,
    tags: ["React", "Node.js", "PostgreSQL", "DeepSeek AI", "SQL Parsing"],
    metrics: "Correction instantanée par IA & feedback syntaxique",
    descKey: "projects.dataeval.desc",
    fullDescKey: "projects.dataeval.fullDesc",
    featuresKey: "projects.dataeval.features",
    source_code_link: "https://github.com/Mouhameddiagne2003/data-eval-back",
    demo_link: null,
  },
  {
    id: 4,
    slug: "ecg-iot",
    titleKey: "projects.ecg.title",
    subtitleKey: "projects.ecg.subtitle",
    category: "iot",
    img: Work1,
    featured: true,
    tags: ["ESP32", "AD8232", "MQTT", "React", "Express.js", "MongoDB"],
    metrics: "Flux ECG en temps réel • Alertes d'anomalies",
    descKey: "projects.ecg.desc",
    fullDescKey: "projects.ecg.fullDesc",
    featuresKey: "projects.ecg.features",
    source_code_link: "https://github.com/Mouhameddiagne2003/Heart_iot",
    demo_link: "https://youtu.be/DiDXGserTGM",
  },
  {
    id: 5,
    slug: "maternity-plus",
    titleKey: "projects.maternity.title",
    subtitleKey: "projects.maternity.subtitle",
    category: "fullstack",
    img: Work2,
    featured: false,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Gestion sécurisée des dossiers médicaux & naissances",
    descKey: "projects.maternity.desc",
    fullDescKey: "projects.maternity.fullDesc",
    featuresKey: "projects.maternity.features",
    source_code_link: "https://github.com/Mouhameddiagne2003/MaternitePlus",
    demo_link: null,
  },
  {
    id: 6,
    slug: "spadon-automations",
    titleKey: "projects.spadon.title",
    subtitleKey: "projects.spadon.subtitle",
    category: "fullstack",
    img: Work3,
    featured: false,
    tags: ["Java EE", "WhatsApp API", "Google SMTP", "Tomcat Security", "CronJobs"],
    metrics: "Automatisation de 100% des notifications clients",
    descKey: "projects.spadon.desc",
    fullDescKey: "projects.spadon.fullDesc",
    featuresKey: "projects.spadon.features",
    source_code_link: "https://github.com/Mouhameddiagne2003",
    demo_link: null,
  },
  {
    id: 7,
    slug: "bnf-c-evaluator",
    titleKey: "projects.bnf.title",
    subtitleKey: "projects.bnf.subtitle",
    category: "backend",
    img: Work4,
    featured: false,
    tags: ["Langage C", "Grammaire BNF", "Analyse Syntaxique", "Structures de Données"],
    metrics: "Évaluation arithmétique rigoureuse & gestion d'erreurs",
    descKey: "projects.bnf.desc",
    fullDescKey: "projects.bnf.fullDesc",
    featuresKey: "projects.bnf.features",
    source_code_link: "https://github.com/Mouhameddiagne2003",
    demo_link: null,
  }
];

export const skillCategories = [
  {
    id: "languages",
    titleKey: "skills.cat.languages",
    icon: FaCode,
    skills: [
      { name: "Java", icon: FaJava, level: "Production", color: "#F89820" },
      { name: "TypeScript", icon: SiTypescript, level: "Production", color: "#3178C6" },
      { name: "JavaScript", icon: IoLogoJavascript, level: "Production", color: "#F7DF1E" },
      { name: "C / C++", icon: SiC, level: "Système", color: "#A8B9CC" },
      { name: "PHP", icon: FaPhp, level: "Avancé", color: "#777BB4" },
      { name: "SQL", icon: SiPostgresql, level: "Production", color: "#4169E1" },
    ]
  },
  {
    id: "frontend",
    titleKey: "skills.cat.frontend",
    icon: FaReact,
    skills: [
      { name: "Next.js", icon: SiNextdotjs, level: "Production", color: "#111827", darkColor: "#F4F4F5" },
      { name: "React.js", icon: FaReact, level: "Production", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Production", color: "#06B6D4" },
      { name: "Angular", icon: SiAngular, level: "Intermédiaire", color: "#DD0031" },
    ]
  },
  {
    id: "backend",
    titleKey: "skills.cat.backend",
    icon: FaServer,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: "Production", color: "#6DB33F" },
      { name: "Node.js / Express", icon: FaNodeJs, level: "Production", color: "#5FA04E" },
      { name: "GraphQL", icon: SiGraphql, level: "Production", color: "#E10098" },
      { name: "Prisma ORM", icon: SiPrisma, level: "Production", color: "#2D3748" },
      { name: "KeystoneJS 6", icon: FaServer, level: "Production", color: "#166BFF" },
      { name: "REST APIs & WebSocket", icon: SiPostman, level: "Production", color: "#FF6C37" },
    ]
  },
  {
    id: "fintech_apis",
    titleKey: "skills.cat.fintech",
    icon: FaMoneyBillWave,
    skills: [
      { name: "Wave Money API", icon: FaMoneyBillWave, level: "Intégration", color: "#1DC3E8" },
      { name: "Orange Money API", icon: FaMoneyBillWave, level: "Intégration", color: "#FF7900" },
      { name: "Paydunya / PayTech", icon: FaMoneyBillWave, level: "Agrégation", color: "#00A859" },
      { name: "WhatsApp Business Cloud", icon: TbBrandWhatsapp, level: "Production", color: "#25D366" },
      { name: "Google Maps API", icon: FaNetworkWired, level: "Cartographie", color: "#4285F4" },
    ]
  },
  {
    id: "ai_cloud",
    titleKey: "skills.cat.ai_cloud",
    icon: FaBrain,
    skills: [
      { name: "Google Gemini / Vertex AI", icon: FaBrain, level: "Intégration", color: "#1A73E8" },
      { name: "DeepSeek AI", icon: SiOpenai, level: "Intégration", color: "#4D6BFE" },
      { name: "Google Cloud (GCP)", icon: SiGooglecloud, level: "Cloud", color: "#4285F4" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Production", color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, level: "Production", color: "#47A248" },
      { name: "MySQL", icon: SiMysql, level: "Production", color: "#4479A1" },
      { name: "Supabase / Firebase", icon: SiSupabase, level: "Production", color: "#3ECF8E" },
    ]
  },
  {
    id: "devops",
    titleKey: "skills.cat.devops",
    icon: FaTools,
    skills: [
      { name: "Docker", icon: FaDocker, level: "Production", color: "#2496ED" },
      { name: "Linux & Bash", icon: FaLinux, level: "Production", color: "#FCC624" },
      { name: "Git & GitHub", icon: FaGitAlt, level: "Production", color: "#F05032" },
      { name: "UML / Modélisation", icon: SiUml, level: "Conception", color: "#5B21B6", darkColor: "#C4B5FD" },
      { name: "Cybersécurité (ISO 27001)", icon: FaTools, level: "Fondations", color: "#00B4D8" },
    ]
  }
];
