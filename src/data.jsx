import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/ecg_iot.png';
import Work2 from './assets/maternity.jpg';
import Work3 from './assets/spadon.jpg';
import Work4 from './assets/c.png';
import Work5 from './assets/donnees.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];



export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const Educationresume = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    year: '2023-2026',
    title: 'DIC GENIE INFORMATIQUE <span> Ecole Superieure Polytechnique de DAKAR </span>',
    desc: 'Diplôme d\'Ingénieur de Conception en Génie Informatique'
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    year: '2021-2023',
    title: 'DUT INFORMATIQUE <span> Ecole Superieure Polytechnique de DAKAR </span>',
    desc: 'Diplôme Universitaire de Technologie en Informatique'
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Baccalauréat Scientifique <span> Lycée d\'Excellence Privé Birago DIOP de DAKAR </span>',
    desc: 'Obtention de mon BAC série S2 avec la mention BIEN',
  }
    ]
import nandigium from "../src/assets/nandigium_consulting_logo.jpeg";
import feindy from "../src/assets/feindy.jpg"
export const experiences = [
  {
    title: "CybersecurityAssistant",
    company_name: "Nandigium Consulting",
    icon: nandigium,
    iconBg: "#383E56",
    date: "Juillet2022-Sept2022",
    points: [
      "Nandigium1fstPoint",
      "Nandigium2ndPoint",
      "Nandigium3rdPoint"
    ],
  },
  {
    title: "WebDeveloper",
    company_name: "Feindy Solutions",
    icon: feindy,
    iconBg: "#000000",
    date: "Mai2023-Juil2023",
    points: [
      "Feindy1fstPoint",
      "Feindy2ndPoint",
      "Feindy3rdPoint",
      "Feindy4thPoint",
    ],
  },
  {
    title: "FrontDeveloper",
    company_name: "Spadon",
    icon: feindy,
    iconBg: "#000000",
    date: "Sept2023-Now",
    points: [
      "Spadon1fstPoint",
      "Spadon2ndPoint"
    ],
  }
];

import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';

export const services = [
  {
    title: "ConcepteurTitle",
    icon: FiLayers ,
    desc: "conceptdesc",
    points: [
      "ServiceA1fstPoint",
      "ServiceA2ndPoint",
      "ServiceA3rdPoint",
      "ServiceA4thPoint",
    ],
  },
  {
    title: "WebDeveloper",
    icon: FaLaptopCode,
    desc: "webdevdesc",
    points: [
      "ServiceB1fstPoint",
      "ServiceB2ndPoint",
      "ServiceB3rdPoint",
      "ServiceB4thPoint",
    ],
  },
  {
    title: "MobileDeveloper",
    icon: FaMobileAlt,
    desc: "mobdevdesc",
    points: [
      "ServiceC1fstPoint",
      "ServiceC2ndPoint",
      "ServiceC3rdPoint",
      "ServiceC4thPoint",
    ],
  },
  {
    title: "Designer",
    icon: FaPaintBrush,
    desc: "desdesc",
    points: [
      "ServiceD1fstPoint",
      "ServiceD2ndPoint",
      "ServiceD3rdPoint",
      "ServiceD4thPoint",
    ],
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];
import { FaHtml5, FaPhp,FaFigma,FaJava, FaAngular, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaLinux } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiMysql, SiUml, SiCanva } from 'react-icons/si';

export const techskills = [
  {
    id: 1,
    title: 'Html',
    color: '#FFA500',
    percentage: '75',
    logo: FaHtml5,
    level: "Advanced"
  },
  {
    id: 2,
    title: 'Css',
    color: '#0000FF',
    percentage: '70',
    logo: IoLogoCss3,
    level: "Advanced"
  },
  {
    id: 3,
    title: 'JavaScript',
    color: '#FFFF00',
    percentage: '70',
    logo: IoLogoJavascript,
    level: "Advanced"
  },
  {
    id: 4,
    title: 'Php',
    color: '#777BB3',
    percentage: '60',
    logo: FaPhp,
    level: "Intermediate"
  },
  {
    id: 5,
    title: 'Java',
    color: '#F89820',
    percentage: '75',
    logo: FaJava,
    level: "Advanced"
  },
  {
    id: 6,
    title: 'Angular',
    color: '#c3002f',
    percentage: '45',
    logo: FaAngular,
    level: "Intermediate"
  },
  {
    id: 7,
    title: 'ReactJS',
    color: '#61dbfb',
    percentage: '60',
    logo: FaReact,
    level: "Intermediate"
  },
  {
    id: 8,
    title: 'NodeJS',
    color: '#68a063',
    percentage: '65',
    logo: FaNodeJs,
    level: "Intermediate"
  },
  {
    id: 9,
    title: 'MongoDb',
    color: '#4DB33D',
    percentage: '70',
    logo: SiMongodb,
    level: "Advanced"
  },
  {
    id: 10,
    title: 'Mysql',
    color: '#00758f',
    percentage: '80',
    logo: SiMysql,
    level: "Advanced"
  },
  {
    id: 11,
    title: 'Git/Github',
    color: '#000000',
    percentage: '50',
    logo: FaGitAlt,
    level: "Intermediate"
  },
  {
    id: 12,
    title: 'Docker',
    color: '#0db7ed',
    percentage: '45',
    logo: FaDocker,
    level: "Intermediate"
  },
  {
    id: 13,
    title: 'Linux',
    color: '#ffcc33',
    percentage: '75',
    logo: FaLinux,
    level: "Advanced"
  },
  {
    id: 14,
    title: 'UML',
    color: '#000000',
    percentage: '75',
    logo: SiUml,
    level: "Advanced"
  },
  {
    id: 15,
    title: 'Canva',
    color: '#2A89DA',
    percentage: '50',
    logo: SiCanva,
    level: "Intermediate"
  },
  {
    id: 16,
    title: 'Figma',
    color: '#ff7262',
    percentage: '35',
    logo: FaFigma,
    level: "Beginner"
  },

];

export const profskills = [
  {
    title: 'Creativity',
    percentage: '75',
  },
  {
    title: 'ProblemSolving',
    percentage: '75',
  },
  {
    title: 'Communication',
    percentage: '90',
  },
  {
    title: 'Teamwork',
    percentage: '85',
  }
  ]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'portfoliotitle1',
    desc :'portfoliodesc1',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs-express",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Mouhameddiagne2003/Heart_iot"
  },
  {
    id: 2,
    img: Work2,
    title: 'portfoliotitle2',
    desc: 'portfoliodesc2',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs-express",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Mouhameddiagne2003/MaternitePlus"

  },
  {
    id: 3,
    img: Work3,
    title: 'portfoliotitle3',
    desc:'portfoliodesc3',
    tags: [
      {
        name: "java2ee",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html-jsp",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/"
  },
  {
    id: 4,
    img: Work4,
    title: 'portfoliotitle4',
    desc: 'portfoliodesc4',
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/"

  },
  {
    id: 5,
    img: Work5,
    title: 'portfoliotitle5',
    desc:'portfoliodesc5',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/"

  },


];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: '#006DA4',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
