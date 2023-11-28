import NextLink from 'next/link';
import NextImage from 'next/image';

import { LangSelector } from '@/components/LangSelector';

import { Container, ContainerContent, Texts, TextsInner, TextsInnerItem } from './styles.css';

export const Footer = () => {
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
            <span className={TextsInnerItem}>Guilherme Guain</span>
            <span className={TextsInnerItem}>Desenvolvedor Front-end</span>
          </div>
          <span>{`2012 - ${new Date().getFullYear()}`}</span>
        </div>
        <LangSelector id="lang_selector_footer" />
      </div>
    </footer>
  );
};
