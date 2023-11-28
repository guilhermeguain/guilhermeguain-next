import { useMemo } from 'react';
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

export const useExperiences = () => {
  const experiences = useMemo(
    () => [
      {
        id: 'amo-promo',
        label: 'Amo Promo',
        role: 'Desenvolvedor Front-end',
        period: '01/2023 - atual',
        summary:
          'Com o propósito de promover experiências inesquecíveis, atuo no planejamento e desenvolvimento de soluções web e mobile utilizando as tecnologias mais modernas.',
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
        ],
      },
      {
        id: 'toxicologia-pardini',
        label: 'Toxicologia Pardini',
        role: 'Desenvolvedor Full-stack',
        period: '08/2018 - atual',
        summary:
          'Empresa referência em exame toxicológico onde atuo como desenvolvedor full-stack responsável pelo desenvolvimento e manutenção do site. Entre as principais atividades estão: otimização de SEO on-page, implementação de novas funcionalidades, correção de bugs e integrações com sistemas internos, CRM e ERP.',
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
        ],
      },
      {
        id: 'inter-american',
        label: 'Inter-American Coalition',
        role: 'Desenvolvedor Full-stack',
        period: '08/2021 - atual',
        summary:
          'Projeto desenvolvido com WordPress Multisite para unificar os websites da organização, facilitando a manutenção e o gerenciamento do conteúdo. Atualmente sou responsável pelo monitoramento e manutenção do servidor, atualização dos plugins e temas do WordPress, e gerenciamento do conteúdo do site.',
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
      },
      {
        id: 'global-empregos',
        label: 'Global Empregos',
        role: 'Desenvolvedor Full-stack',
        period: '08/2018 - 04/2023',
        summary:
          'Atuei como desenvolvedor full-stack, desempenhando um papel multifuncional que incluía o desenvolvimento de soluções tecnológicas, otimização de SEO e gerenciamento de servidores web. Nessa posição desafiadora, fui responsável por criar uma experiência online aprimorada para candidatos e empresas.',
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
      },
      {
        id: 'global-treina',
        label: 'Global Treina',
        role: 'Desenvolvedor Full-stack',
        period: '11/2019 - 04/2023',
        summary:
          'Na Global Treina, tive a oportunidade de desempenhar um papel crucial no desenvolvimento de uma plataforma de ensino a distância, voltada para cursos profissionalizantes. Como desenvolvedor full-stack, fui responsável por criar uma experiência de ensino interativa e de alta qualidade para os alunos, incorporando tecnologias modernas e soluções inovadoras.',
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
      },
      {
        id: 'health-protection',
        label: 'Health Protection',
        role: 'Desenvolvedor Front-end',
        period: '09/2020 - 10/2022',
        summary:
          'Projeto desenvolvido em Next.js com TypeScript e ferramentas como Context API, Axios, Tailwind CSS, Chakra UI, ESLint e React Query. Para o gerenciamento de conteúdo utilizamos o Sanity CMS. Minhas atividades envolviam o desenvolvimento do front-end, integração com APIs, criação de componentes e páginas, manutenção e correção de bugs e implantação contínua com Netlify e Vercel.',
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
      },
      {
        id: '360-comunicacao',
        label: '360 Comunicação Digital',
        role: 'Desenvolvedor Full-stack',
        period: '05/2013 - 08/2018',
        summary:
          'Como uma agência de comunicação focada em posicionar empresas com o marketing digital, participava de todo o processo, desde a criação do layout até a publicação do site em Wordpress. Minhas atividades envolviam a estruturação e customização de temas e plugins para WordPress, otimização de performance e SEO, criação de landing pages e integração com APIs.',
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
      },
    ],
    [],
  );

  return {
    experiences,
  };
};
