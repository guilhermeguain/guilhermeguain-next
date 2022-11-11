import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';

export const contacts = [
  {
    id: 'linkedin',
    icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/guilhermeguain/',
  },
  {
    id: 'github',
    icon: BsGithub,
    url: 'https://github.com/guilhermeguain/',
  },
  {
    id: 'email',
    icon: GoMail,
    url: 'mailto:guilherme.guain@gmail.com',
  },
  {
    id: 'curriculum',
    icon: IoDocumentTextOutline,
    url: '/documents/curriculum-guilherme-guain-en.pdf',
  },
];
