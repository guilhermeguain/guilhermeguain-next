import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import TagManager from 'react-gtm-module';

export const useAbout = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(['common', 'about']);

  const contacts = useMemo(
    () => [
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
        id: 'instagram',
        icon: BsInstagram,
        url: 'https://www.instagram.com/guilhermeguain/',
      },
      {
        id: 'email',
        icon: GoMail,
        url: 'mailto:guilherme.guain@gmail.com',
      },
      {
        id: 'curriculum',
        icon: IoDocumentTextOutline,
        url: `/documents/cv-guilherme-guain-${locale}.pdf`,
      },
    ],
    [],
  );

  const paragraphs = useMemo(
    () => [
      {
        id: 'paragraph-1',
        highlights: ['2012', 'wordpress', 'react-js', 'clean-code', 'solid', 'problem-solving'],
      },
      {
        id: 'paragraph-2',
        highlights: [],
      },
    ],
    [],
  );

  const knowledges = useMemo(() => ['design', 'seo', 'devops', 'infrastructure'], []);

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
    t,
    contacts,
    paragraphs,
    knowledges,
    handleLinkClick,
  };
};
