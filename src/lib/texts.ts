import {
  SiReact,
  SiTypescript,
  SiEslint,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiGulp,
  SiAmp,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';

import { Semrush } from '../assets/Semrush';
import { GoogleAnalytics } from '../assets/GoogleAnalytics';
import { GoogleTagManager } from '../assets/GoogleTagManager';

export const texts = {
  meta: {
    title: 'Front-end Developer - Guilherme Guain',
    desc: 'Front-end Developer since 2012, specialist in React.js, Next.js, TypeScript and WordPress',
  },
  hero: {
    name: 'Guilherme Guain',
    role: 'Front-end Developer',
    desc: 'Since 2012 solving problems and creating web solutions.',
  },
  about: {
    name: 'Guilherme Guain',
    role: 'Front-end Developer',
    paragraphs: [
      {
        highlights: ['2012', 'WordPress', 'React.js', 'Clean Code', 'SOLID', 'resolver problemas'],
        text: "I've been working with web development since 2012, when I started developing WordPress websites at a communication agency. It took me approximately 8 years to delve into this technology, until in 2020 I decided to migrate and specialize in React.js. Since then I've been using technologies like React.js, Next.js, TypeScript, ESLint, Tailwind CSS, Axios, Chakra UI, Styled Components, React Query, Git, among others. I follow principles and practices such as Clean Code and SOLID and my specialty is problem solving.",
      },
      {
        highlights: [],
        text: 'Throughout my career I also took on tasks in related areas, where I acquired knowledge in:',
      },
    ],
    knowledges: [
      {
        area: 'Design',
        summary:
          'Layout creation, image manipulation, use of tools like Figma, Photoshop and Illustrator. Knowledge of UX/UI.',
      },
      {
        area: 'SEO',
        summary:
          'Technical SEO, code optimization, headers and directives configuration, sitemap creation and use of tools like Semrush, Google Tag Manager, Google Analytics and Google Search Console.',
      },
      {
        area: 'DevOps',
        summary:
          'CI/CD, Git and Git Flow, standardization of settings, definition of environments, sense of urgency, adaptability and teamwork.',
      },
      {
        area: 'Infrastructure',
        summary:
          'Configuration of Linux servers (Debian/Ubuntu), configuration of web servers such as Apache and Nginx, creation of virtual machines and databases on Google Cloud, installation of various components, SSH connection configuration, firewall adjustment and opening of ports and configuration of SSL certificates.',
      },
    ],
    hardSkills: [
      {
        slug: 'html-css',
        label: 'HTML/CSS',
        value: 100,
      },
      {
        slug: 'javascript-react',
        label: 'JavaScript/React.js',
        value: 95,
      },
      {
        slug: 'typescript',
        label: 'TypeScript',
        value: 80,
      },
      {
        slug: 'technical-seo',
        label: 'Technical SEO',
        value: 90,
      },
      {
        slug: 'design-layout',
        label: 'Design/Layout',
        value: 95,
      },
      {
        slug: 'git',
        label: 'Git',
        value: 80,
      },
    ],
    softSkills: [
      {
        slug: 'communication',
        label: 'Communication',
        value: 80,
      },
      {
        slug: 'teamwork',
        label: 'Teamwork',
        value: 90,
      },
      {
        slug: 'problem-solving',
        label: 'Problem-solving',
        value: 100,
      },
      {
        slug: 'time-management',
        label: 'Time Management',
        value: 70,
      },
      {
        slug: 'critical-thinking',
        label: 'Critical Thinking',
        value: 90,
      },
      {
        slug: 'decision-making',
        label: 'Decision Making',
        value: 80,
      },
    ],
    techsTools: {
      title: 'Techs & Tools',
      primary: 'Primary',
      secondary: 'Secondary',
      design: 'Design',
    },
    languages: {
      title: 'Languages',
      items: [
        {
          code: 'pt-br',
          name: 'Portuguese',
          profficiency: [
            { label: 'Speaking', value: 100 },
            { label: 'Listening', value: 100 },
            { label: 'Writing', value: 100 },
          ],
        },
        {
          code: 'en-us',
          name: 'English',
          profficiency: [
            { label: 'Speaking', value: 40 },
            { label: 'Listening', value: 80 },
            { label: 'Writing', value: 90 },
          ],
        },
      ],
    },
  },
  dataDrivenSeo: {
    title: 'Data-driven SEO',
    items: [
      {
        id: 'semrush',
        title: 'Semrush',
        icon: Semrush,
        items: [
          'Keyword and competitor research and analysis',
          'Monitoring and correction of errors identified by the audit',
          'Performance and positioning monitoring',
        ],
      },
      {
        id: 'google-tag-manager',
        title: 'Google Tag Manager',
        icon: GoogleTagManager,
        items: [
          'Setup of tags, triggers and variables',
          'Creation of triggers based on custom events',
          'Configuration for communication between iframes',
          'Capture of information through data layer',
        ],
      },
      {
        id: 'google-analytics',
        title: 'Google Analytics',
        icon: GoogleAnalytics,
        items: [
          'Tag installation using Google Tag Manager',
          'Setup of custom dimensions and metrics',
          'GA4 Setup',
          'Setup of filters and conversion goals',
          'Use of data layer to get data',
        ],
      },
    ],
  },
  experiences: [
    {
      role: 'Front-end Developer',
      company: 'Health Protection',
      period: '09/2020 - 10/2022',
      badges: [
        {
          id: 'reactjs',
          title: 'React.js',
          color: '#61dafb',
          icon: SiReact,
        },
        {
          id: 'typescript',
          title: 'TypeScript',
          color: '#3178c6',
          icon: SiTypescript,
        },
        {
          id: 'nextjs',
          title: 'Next.js',
          color: '#000',
          icon: TbBrandNextjs,
        },
        {
          id: 'eslint',
          title: 'ESLint',
          color: '#4b32c3',
          icon: SiEslint,
        },
        {
          id: 'tailwindcss',
          title: 'Tailwind CSS',
          color: '#38bdf8',
          icon: SiTailwindcss,
        },
      ],
      summary:
        'Project developed in Next.js with TypeScript. Among the main tools used in the project are Context API, Axios, Tailwind CSS, Chakra UI, ESLint and React Query. For content management we used Prismic CMS. My activities involved front-end development, integration with APIs, creation of components and pages, maintenance and bug fixing and continuous deployment with Netlify and Vercel.',
    },
    {
      role: 'Full-stack Developer',
      company: 'Toxicologia Pardini',
      period: '08/2018 - now',
      badges: [
        {
          id: 'wordpress',
          title: 'WordPress',
          color: '#000',
          icon: SiWordpress,
        },
        {
          id: 'php',
          title: 'PHP',
          color: '#7a86b8',
          icon: SiPhp,
        },
        {
          id: 'mysql',
          title: 'MySQL',
          color: '#0074a3',
          icon: SiMysql,
        },
        {
          id: 'amp',
          title: 'AMP',
          color: '#0379c4',
          icon: SiAmp,
        },
        {
          id: 'sass',
          title: 'Sass',
          color: '#bf4080',
          icon: FaSass,
        },
        {
          id: 'gulp',
          title: 'Gulp',
          color: '#cf4647',
          icon: SiGulp,
        },
      ],
      summary:
        "Toxicological examination company where I work as a full-stack developer, responsible for developing and maintaining the company's website, in addition to developing integrations with internal systems, CRM and ERP. Among the main activities are SEO optimization, development of new features, bug fixing and website maintenance.",
    },
    {
      role: 'WordPress Developer',
      company: 'Inter-American Coalition',
      period: '08/2021 - now',
      badges: [
        {
          id: 'wordpress',
          title: 'WordPress',
          color: '#000',
          icon: SiWordpress,
        },
        {
          id: 'php',
          title: 'PHP',
          color: '#7a86b8',
          icon: SiPhp,
        },
        {
          id: 'mysql',
          title: 'MySQL',
          color: '#0074a3',
          icon: SiMysql,
        },
        {
          id: 'sass',
          title: 'Sass',
          color: '#bf4080',
          icon: FaSass,
        },
        {
          id: 'gulp',
          title: 'Gulp',
          color: '#cf4647',
          icon: SiGulp,
        },
      ],
      summary:
        "Project developed with WordPress Multisite to unify the organization's websites, facilitating the maintenance and management of content. I am currently responsible for monitoring and maintaining the server, updating WordPress plugins and themes, and managing website content.",
    },
    {
      role: 'WordPress Developer',
      company: '360 Comunicação Digital',
      period: '05/2013 - 08/2018',
      badges: [
        {
          id: 'wordpress',
          title: 'WordPress',
          color: '#000',
          icon: SiWordpress,
        },
        {
          id: 'php',
          title: 'PHP',
          color: '#7a86b8',
          icon: SiPhp,
        },
        {
          id: 'mysql',
          title: 'MySQL',
          color: '#0074a3',
          icon: SiMysql,
        },
      ],
      summary:
        'Communication agency where I developed several projects in WordPress, participating in the entire development process, from the creation of the layout to the publication of the website. My activities involved creating and customizing WordPress themes and plugins, optimizing performance and SEO, creating landing pages and integrating with APIs.',
    },
  ],
  projects: {
    title: 'Projects',
    items: [
      {
        id: 'sleepie',
        title: 'Sleepie',
        link: 'https://www.sleepie.life/',
      },
      {
        id: 'health-protection',
        title: 'Health Protection',
        link: 'https://www.healthprotection.com/',
      },
      {
        id: 'toxicologia-pardini',
        title: 'Exame Toxicológico - Toxicologia Pardini',
        link: 'https://www.exametoxicologico.com.br/',
      },
      {
        id: 'extra-consult',
        title: 'Extra Consult',
        link: 'https://www.extraconsult.com.br/',
      },
      {
        id: 'trabalhista-cred',
        title: 'Trabalhista Cred',
        link: 'https://www.trabalhistacred.com.br/',
      },
      {
        id: 'inter-american-coalition',
        title: 'Inter-American Coalition',
        link: 'https://www.interamericancoalition-medtech.org/',
      },
      {
        id: 'global-empregos',
        title: 'Global Empregos',
        link: 'https://www.globalempregos.com.br/',
      },
      {
        id: 'aladdiv',
        title: 'ALLADiV',
        link: 'https://www.aladdiv.org.br/',
      },
      {
        id: 'declare-facil',
        title: 'DeclareFácil',
        link: 'https://www.declarefacil.com.br/',
      },
      {
        id: 'emporio-das-arabias',
        title: 'Empório das Arábias',
        link: 'https://www.emporiodasarabias.com.br/',
      },
      {
        id: 'rbac-120',
        title: 'RBAC 120',
        link: 'https://www.rbac120.com.br/',
      },
      {
        id: 'sorriso-da-vila',
        title: 'Sorriso da Vila',
        link: 'https://www.sorrisodavilla.com.br/',
      },
      {
        id: 'slh-engenharia',
        title: 'SLH Engenharia',
        link: 'https://www.slhengenharia.com.br/',
      },
      {
        id: 'swell',
        title: 'Swell Engenharia',
        link: 'https://www.swell.eng.br/',
      },
      {
        id: 'espaco-manar',
        title: 'Espaço Manar',
        link: 'https://www.espacomanar.com.br/',
      },
      {
        id: 'zetaz',
        title: 'Zetaz',
        link: 'https://zetaz.com.br/',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'React.js - Ignite',
        institution: 'Rocketseat',
        period: '07/2022 - 07/2022',
        location: 'Online',
      },
      {
        title: 'GoStack - Node.js, React.js e React Native',
        institution: 'Rocketseat',
        period: '10/2020 - 03/2021',
        location: 'Online',
      },
      {
        title: 'Nanodegree Front-end Web Developer',
        institution: 'Udacity',
        period: '11/2017 - 04/2018',
        location: 'Online',
      },
      {
        title: 'HTML5, CSS3, JavaScript, Flexbox e Bootstrap',
        institution: 'Alura',
        period: '11/2017 - 02/2018',
        location: 'Online',
      },
      {
        title: 'Programming logic, web technology and PHP',
        institution: 'Impacta',
        period: '10/2012 - 06/2014',
        location: 'São Paulo, SP',
      },
      {
        title: 'Graphic Design Technician',
        institution: 'Alpha Channel',
        period: '05/2012 - 05/2013',
        location: 'São Paulo, SP',
      },
    ],
  },
  events: {
    title: 'Events',
    items: [
      {
        title: 'Next.js Conf',
        host: 'Vercel',
        date: '10/2022',
        location: 'Online',
      },
      {
        title: 'SEO Summit',
        host: 'Conversion',
        date: '09/2022',
        location: 'Online',
      },
      {
        title: 'DoWhile 2020',
        host: 'Rocketseat',
        date: '12/2020',
        location: 'Online',
      },
      {
        title: 'Semrush Live',
        host: 'Semrush',
        date: '10/2019',
        location: 'São Paulo, SP',
      },
      {
        title: 'Google Cloud Summit',
        host: 'Google',
        date: '12/2018',
        location: 'São Paulo, SP',
      },
      {
        title: 'WordCamp São Paulo 2018',
        host: 'Community',
        date: '10/2018',
        location: 'São Paulo, SP',
      },
      {
        title: 'Google AMP Roadshow Brazil',
        host: 'Google',
        date: '08/2018',
        location: 'São Paulo, SP',
      },
    ],
  },
};
