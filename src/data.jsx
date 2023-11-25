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

import Work1 from './assets/portfolio.jpg';
import Work2 from './assets/note-app-1.jpg';
import Work3 from './assets/calculator.PNG';
import Work4 from './assets/yummy.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';


//  ===============> Links <===============
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

//  ===============> Personal Information <===============
export const personalInfo = [
  {
    id: 1,
    title: 'Name: ',
    description: 'Belal Sameh',
  },

  {
    id: 2,
    title: 'Age: ',
    description: '24 years old',
  },

  {
    id: 3,
    title: 'Address: ',
    description: 'Cairo, Egypt',
  },

  {
    id: 4,
    title: 'Phone: ',
    description: '+201006269871',
  },

  {
    id: 5,
    title: 'Email: ',
    description: 'belal.ko3ip@gmail.com',
  },

  {
    id: 6,
    title: 'Linkedin: ',
    description: 'belalsameh',
  },

  {
    id: 7,
    title: 'Github: ',
    description: 'BelalSameh2022',
  },

  {
    id: 8,
    title: 'Languages: ',
    description: 'Arabic, English',
  }
];

//  ===============> States <===============
export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> experience',
  },

  {
    id: 2,
    no: '15+',
    title: 'Completed <br /> projects',
  },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

//  ===============> Resume <===============
export const resume = [
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2018 - PRESENT',
  //   title: 'Web Developer <span> Envato </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May 2023 - Nov 2023',
    title: 'Internship <span> Route Academy </span>',
    desc: 'Full Front-end Development Diploma with ReactJS Framework.',
  },

  // {
  //   id: 4,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2015',
  //   title: 'Engineering Degree <span> Oxford University </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  // },

  // {
  //   id: 5,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2012',
  //   title: 'Master Degree <span> KIEV University </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2022',
    title: 'Bachelor Degree <span> Al-Azhar University </span>',
    desc: 'Computers & Systems Department, Faculty of Engineering.',
  },
];

//  ===============> Skills <===============
export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '25',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Bootstarp',
    percentage: '45',
  },

  {
    id: 4,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Jquery',
    percentage: '66',
  },

  {
    id: 6,
    title: 'SCSS',
    percentage: '95',
  },

  {
    id: 7,
    title: 'Typescript',
    percentage: '50',
  },

  {
    id: 8,
    title: 'ReactJS',
    percentage: '65',
  },

  {
    id: 8,
    title: 'NextJS',
    percentage: '65',
  },

];

//  ===============> Portfolio <===============
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Portfolio',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'ReactJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Demo: ',
        desc: 'react-js-portfolio-omega.vercel.app',
      },
    ],
  },
  
  {
    id: 2,
    img: Work2,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Notes App',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'HTML, CSS and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Demo: ',
        desc: 'notes-app-1-1.vercel.app'
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Calculator',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'HTML, CSS and JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Demo: ',
        desc: 'calculator-nu-indol-53.vercel.app'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language: ',
        desc: 'JQuery, Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Demo: ',
        desc: 'yummy-sable.vercel.app'
      },
    ],
  },

  // {
  //   id: 1,
  //   img: Work1,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project: ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language: ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview: ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 2,
  //   img: Work2,
  //   title: 'Website Design',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project: ',
  //       desc: 'Website',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language: ',
  //       desc: 'React JS',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview: ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   img: Work3,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project: ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language: ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview: ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project: ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language: ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview: ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project: ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language: ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview: ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project: ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client: ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language: ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview: ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

//  ===============> Themes <===============
export const themes = [
  {
    id: 1,
    color: 'hsl(252, 35%, 51%)'
  },

  {
    id: 2,
    color: 'hsl(225, 73%, 57%)'
  },

  {
    id: 3,
    color: 'hsl(183, 61%, 50%)'
  },

  {
    id: 4,
    color: 'hsl(88, 65%, 43%)'
  },

  {
    id: 5,
    color: 'hsl(43, 74%, 49%)'
  },

  {
    id: 6,
    color: 'hsl(19, 96%, 52%)'
  },

  {
    id: 7,
    color: 'hsl(339, 81%, 66%)'
  },

  {
    id: 8,
    color: 'hsl(4, 83%, 50%)'
  }
];
