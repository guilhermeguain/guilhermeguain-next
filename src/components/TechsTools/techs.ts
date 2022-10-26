import {
  SiReact,
  SiTypescript,
  SiEslint,
  SiPostman,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiGraphql,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaGitAlt, FaNodeJs } from 'react-icons/fa';

import { Figma } from '../../assets/Figma';
import { Photoshop } from '../../assets/Photoshop';
import { Illustrator } from '../../assets/Illustrator';

export const techs = {
  primary: [
    {
      id: 'reactjs',
      title: 'React.js',
      icon: SiReact,
      color: '#61dafb',
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      icon: SiTypescript,
      color: '#3178c6',
    },
    {
      id: 'nextjs',
      title: 'Next.js',
      icon: TbBrandNextjs,
      color: '#000',
    },
    {
      id: 'eslint',
      title: 'ESLint',
      icon: SiEslint,
      color: '#4b32c3',
    },
    {
      id: 'tailwind',
      title: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#38bdf8',
    },
    {
      id: 'git',
      title: 'Git',
      icon: FaGitAlt,
      color: '#f14e32',
    },
    {
      id: 'postman',
      title: 'Postman',
      icon: SiPostman,
      color: '#ff6c37',
    },
  ],
  secondary: [
    {
      id: 'php',
      title: 'PHP',
      icon: SiPhp,
      color: '#7a86b8',
    },
    {
      id: 'nodejs',
      title: 'Node.js',
      icon: FaNodeJs,
      color: '#689f63',
    },
    {
      id: 'mysql',
      title: 'MySQL',
      icon: SiMysql,
      color: '#0074a3',
    },
    {
      id: 'wordpress',
      title: 'WordPress',
      icon: SiWordpress,
      color: '#000',
    },
    {
      id: 'graphql',
      title: 'GraphQL',
      icon: SiGraphql,
      color: '#e10098',
    },
  ],
  design: [
    {
      id: 'figma',
      title: 'Figma',
      icon: Figma,
    },
    {
      id: 'photoshop',
      title: 'Photoshop',
      icon: Photoshop,
    },
    {
      id: 'illustrator',
      title: 'Illustrator',
      icon: Illustrator,
    },
  ],
};
