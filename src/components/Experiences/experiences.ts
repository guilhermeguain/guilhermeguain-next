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

export const experiences = [
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
      'Projeto desenvolvido em Next.js com TypeScript. Entre as principais ferramentas usadas no projeto estão Context API, Axios, Tailwind CSS, Chakra UI, ESLint e React Query. Para gerenciamento de conteúdo utilizamos o Prismic CMS. Minhas atividades envolviam o desenvolvimento do front-end, integração com APIs, criação de componentes e páginas, manutenção e correção de bugs e implantação contínua com Netlify e Vercel.',
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
      'Empresa de exame toxicológico onde atuo como desenvolvedor full-stack, responsável por desenvolver e manter o site da empresa, além de desenvolver integrações com sistemas internos, CRM e ERP. Entre as principais atividades, estão a otimização de SEO, desenvolvimento de novas funcionalidades, correção de bugs e manutenção de sites.',
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
      'Projeto desenvolvido com WordPress Multisite visando unificar os sites da organização, facilitando a manutenção e gerenciamento dos conteúdos. Atualmente sou responsável pelo monitoramento e manutenção do servidor, pela atualização dos plugins e temas do WordPress e pelo gerenciamento de conteúdo do site.',
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
      'Agência de comunicação onde desenvolvi diversos projetos em WordPress, participando de todo o processo de desenvolvimento, desde a criação do layout até a publicação do site. Minhas atividades envolviam a criação e customização de temas e plugins para WordPress, otimização de performance e SEO, criação de landing pages e integração com APIs.',
  },
];
