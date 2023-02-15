import React from 'react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import NextImage from 'next/image';

import { LangSelector } from '@components/LangSelector';

import { Container, ContainerContent, Texts, TextsInner, TextsInnerItem } from './styles.css';

export const Footer = () => {
  const { t } = useTranslation(['common']);

  return (
    <footer className={Container}>
      <div className={ContainerContent}>
        <NextLink href="/">
          <NextImage
            src={'/images/logo.svg'}
            width={48}
            height={48}
            alt="Front-end Developer - Guilherme Guain"
            title="Front-end Developer - Guilherme Guain"
          />
        </NextLink>
        <div className={Texts}>
          <div className={TextsInner}>
            <span className={TextsInnerItem}>{t('common:name')}</span>
            <span className={TextsInnerItem}>{t('common:role')}</span>
          </div>
          <span>{`2011 - ${new Date().getFullYear()}`}</span>
        </div>
        <LangSelector id="lang_selector_footer" />
      </div>
    </footer>
  );
};
