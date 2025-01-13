import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
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
  SiReactquery,
  SiJest,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';

export const useExperiences = () => {
  const { t } = useTranslation(['experience']);

  const experiences = useMemo(
    () => [
      {
        id: 'ifood',
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
            id: 'jest',
            title: 'Jest',
            color: '#99425b',
            icon: SiJest,
          },
        ],
      },
      {
        id: 'gobrax',
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
            id: 'jest',
            title: 'Jest',
            color: '#99425b',
            icon: SiJest,
          },
        ],
      },
      {
        id: 'toxicologia-pardini',
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
          {
            id: 'jest',
            title: 'Jest',
            color: '#99425b',
            icon: SiJest,
          },
        ],
      },
      {
        id: 'amo-promo',
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
            id: 'jest',
            title: 'Jest',
            color: '#99425b',
            icon: SiJest,
          },
        ],
      },
      {
        id: 'global-empregos',
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
          {
            id: 'reactquery',
            title: 'React Query',
            color: '#fe4155',
            icon: SiReactquery,
          },
        ],
      },
      {
        id: '360-comunicacao',
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
    t,
    experiences,
  };
};
