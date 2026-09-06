import React from 'react';
import { useTranslation } from 'next-i18next';
import { SiReact, SiTypescript, SiOpenai, SiClaude } from 'react-icons/si';

import { Cursor } from '@assets/Cursor';

import { Container, CustomContent, Role, Name, Desc, Badges } from './styles.css';

export const Hero = () => {
  const { t } = useTranslation(['common', 'hero']);

  return (
    <section id="hero" className={Container}>
      <div className={CustomContent}>
        <h1 className={Role}>{t('common:role')}</h1>
        <h2 className={Name}>{t('common:name')}</h2>
        <span className={Desc}>{t('hero:desc')}</span>
        <div className={Badges}>
          <SiReact title="React.js" />
          <SiTypescript title="TypeScript" />
          <Cursor title="Cursor" plain />
          <SiOpenai title="ChatGPT" />
          <SiClaude title="Claude" />
        </div>
      </div>
    </section>
  );
};
