import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import TagManager from 'react-gtm-module';

import { LangSelector } from '@components/LangSelector';

import { Container, Menu, MenuItem } from './styles.css';

export const DesktopMenu = ({ items }: MenuProps) => {
  const { t } = useTranslation('menu');

  const { asPath } = useRouter();

  const handleMenuClick = useCallback((event: React.MouseEvent) => {
    const id = event.currentTarget.getAttribute('data-id');
    const url = event.currentTarget.getAttribute('href');

    TagManager.dataLayer({
      dataLayer: {
        event: 'menuClick',
        menuId: id,
        menuUrl: url,
      },
    });
  }, []);

  return (
    <nav className={Container}>
      <ul className={Menu}>
        {items.map(({ id, href }) => (
          <li key={id}>
            <NextLink
              aria-current={asPath.includes(id)}
              href={href}
              passHref
              scroll={false}
              data-id={id}
              onClick={handleMenuClick}
              className={MenuItem}
            >
              {t(id)}
            </NextLink>
          </li>
        ))}
      </ul>
      <LangSelector id="lang_selector_header" />
    </nav>
  );
};
