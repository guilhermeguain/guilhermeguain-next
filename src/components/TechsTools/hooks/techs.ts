import {
  SiReact,
  SiTypescript,
  SiEslint,
  SiGo,
  SiMysql,
  SiPython,
  SiClaude,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';

import { Cursor } from '@assets/Cursor';
import { DeepSeek } from '@assets/DeepSeek';
import { Figma } from '@assets/Figma';
import { Photoshop } from '@assets/Photoshop';
import { Illustrator } from '@assets/Illustrator';

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
      id: 'claude',
      title: 'Claude',
      icon: SiClaude,
      color: '#d97757',
    },
    {
      id: 'chatgpt',
      title: 'ChatGPT',
      icon: SiOpenai,
      color: '#412991',
    },
    {
      id: 'cursor',
      title: 'Cursor',
      icon: Cursor,
      color: '#000',
    },
  ],
  secondary: [
    {
      id: 'golang',
      title: 'Go',
      icon: SiGo,
      color: '#00add8',
    },
    {
      id: 'python',
      title: 'Python',
      icon: SiPython,
      color: '#3776ab',
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
      id: 'github-copilot',
      title: 'GitHub Copilot',
      icon: SiGithubcopilot,
      color: '#000',
    },
    {
      id: 'gemini',
      title: 'Gemini',
      icon: SiGooglegemini,
      color: '#8e75b2',
    },
    {
      id: 'deepseek',
      title: 'DeepSeek',
      icon: DeepSeek,
      color: '#5786fe',
    },
  ],
  design: [
    {
      id: 'figma',
      title: 'Figma',
      icon: Figma,
      color: '#000',
    },
    {
      id: 'photoshop',
      title: 'Photoshop',
      icon: Photoshop,
      color: '#000',
    },
    {
      id: 'illustrator',
      title: 'Illustrator',
      icon: Illustrator,
      color: '#000',
    },
  ],
};
