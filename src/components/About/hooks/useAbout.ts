import React, { useCallback, useMemo } from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import TagManager from 'react-gtm-module';

export const useAbout = () => {
  const contacts = useMemo(
    () => [
      {
        id: 'linkedin',
        icon: BsLinkedin,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/guilhermeguain/',
      },
      {
        id: 'github',
        icon: BsGithub,
        label: 'GitHub',
        url: 'https://github.com/guilhermeguain/',
      },
      {
        id: 'instagram',
        icon: BsInstagram,
        label: 'Instagram',
        url: 'https://www.instagram.com/guilhermeguain/',
      },
      {
        id: 'email',
        icon: GoMail,
        label: 'E-mail',
        url: 'mailto:guilherme.guain@gmail.com',
      },
      {
        id: 'curriculum',
        icon: IoDocumentTextOutline,
        label: 'Currículo',
        url: `/documents/cv-guilherme-guain-pt-BR.pdf`,
      },
    ],
    [],
  );

  const paragraphs = useMemo(
    () => [
      {
        id: 'paragraph-1',
        highlights: [
          '2012',
          'WordPress',
          'React.js',
          'Clean Code',
          'SOLID',
          'resolução de problemas',
        ],
        text: 'Atuo com desenvolvimento web desde 2012, quando iniciei em uma agência de comunicação criando sites em Wordpress. Após 8 anos de experiência nessa tecnologia, iniciei uma especialização em React.js. Desde então tenho usado tecnologias como React.js, Next.js, TypeScript, ESLint, Tailwind CSS, Axios, Chakra UI, Styled Components, React Query, Git, entre outras. Além disso, sigo princípios de Clean Code e SOLID respeitando práticas de SEO técnico com o foco em resolução de problemas.',
      },
      {
        id: 'paragraph-2',
        highlights: [],
        text: 'Ao longo de minha carreira também assumi tarefas em áreas relacionadas, nas quais adquiri conhecimentos em:',
      },
    ],
    [],
  );

  const knowledges = useMemo(
    () => [
      {
        title: 'Design',
        summary:
          'Criação de layout, manipulação de imagem, uso de ferramentas como Figma, Photoshop e Illustrator. Conhecimento da UX/UI.',
      },
      {
        title: 'SEO',
        summary:
          'SEO técnico, otimização de código, configuração de cabeçalhos e diretrizes, criação de mapa do site e uso de ferramentas como Semrush, Google Tag Manager, Google Analytics e Google Search Console.',
      },
      {
        title: 'DevOps',
        summary:
          'CI/CD, Git e Git Flow, padronização de configurações, definição de ambientes, senso de urgência, adaptabilidade e trabalho em equipe.',
      },
      {
        title: 'Infraestrutura',
        summary:
          'Configuração de servidores Linux (Debian/Ubuntu), configuração de servidores web como Apache e Nginx, criação de máquinas virtuais e bancos de dados no Google Cloud, instalação de vários componentes, configuração de conexão SSH, ajuste de firewall e abertura de portas e configuração de certificados SSL.',
      },
    ],
    [],
  );

  const handleLinkClick = useCallback((event: React.MouseEvent) => {
    const id = event.currentTarget.getAttribute('data-id');
    const url = event.currentTarget.getAttribute('href');

    TagManager.dataLayer({
      dataLayer: {
        event: 'contactClick',
        contactId: id,
        contactUrl: url,
      },
    });
  }, []);

  return {
    contacts,
    paragraphs,
    knowledges,
    handleLinkClick,
  };
};
