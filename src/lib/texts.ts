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
        text: 'Trabalho com desenvolvimento web desde 2012, quando comecei a desenvolver sites em WordPress em uma agência de comunicação. Foram aproximadamente 8 anos me aprofundando nessa tecnologia, até que em 2020 decidi migrar e me especializar em React.js. Desde então tenho usado tecnologias como React.js, Next.js, TypeScript, ESLint, Tailwind CSS, Axios, Chakra UI, Styled Components, React Query, Git, entre outras. Sigo príncipios e práticas como Clean Code e SOLID e minha especialidade é resolver problemas.',
      },
      {
        highlights: [],
        text: 'Ao longo da minha carreira também assumi tarefas em áreas relacionadas, onde adquiri conhecimentos em:',
      },
    ],
    knowledges: [
      {
        area: 'Design',
        summary:
          'Criação de layouts, manipulação de imagens, uso de ferramentas como Figma, Photoshop e Illustrator. Conhecimento em UX/UI.',
      },
      {
        area: 'SEO',
        summary:
          'SEO técnico, otimização de código, configuração de cabeçalhos e diretivas, criação de sitemap e uso de ferramentas como Semrush, Google Tag Manager, Google Analytics e Google Search Console.',
      },
      {
        area: 'DevOps',
        summary:
          'CI/CD, Git e Git Flow, padronização de configurações, definição de ambientes, senso de urgência, adaptabilidade e trabalho em equipe.',
      },
      {
        area: 'Infrastructure',
        summary:
          'Configuração de servidores Linux (Debian/Ubuntu), configuração de servidores web como Apache e Nginx, criação de máquinas virtuais e bancos de dados no Google Cloud, instalação de componentes diversos, configuração de conexão SSH, ajuste de firewall e abertura de portas e configuração de certificados SSL.',
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
          'Pesquisa e análise de palavras-chave e concorrentes',
          'Acompanhamento e correção de erros apontados pela auditoria',
          'Monitoramento de desempenho e posicionamento',
        ],
      },
      {
        id: 'google-tag-manager',
        title: 'Google Tag Manager',
        icon: GoogleTagManager,
        items: [
          'Configuração de tags, gatilhos e variáveis',
          'Criação de gatilhos baseados em eventos personalizados',
          'Configuração para comunicação entre iframes',
          'Captura de informações através de data layer',
        ],
      },
      {
        id: 'google-analytics',
        title: 'Google Analytics',
        icon: GoogleAnalytics,
        items: [
          'Instalação de tag usando Google Tag Manager',
          'Configuração de dimensões e métricas personalizadas',
          'Configuração do GA4',
          'Configuração de filtros e metas de conversão',
          'Uso de data layer para obter dados',
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
        title: 'Lógica de programação, tecnologia web e PHP',
        institution: 'Impacta',
        period: '10/2012 - 06/2014',
        location: 'São Paulo, SP',
      },
      {
        title: 'Técnico em Design Gráfico',
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
