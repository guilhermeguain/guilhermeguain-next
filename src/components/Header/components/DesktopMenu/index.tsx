import React, { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import TagManager from 'react-gtm-module';

import { LangSelector } from '@components/LangSelector';

import { Container, Menu, MenuItem } from './styles.css';

export const DesktopMenu = ({ items }: MenuProps) => {
  const { t } = useTranslation('menu');

  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const currentPath = `${pathname}${hash}`;

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
              aria-current={currentPath.includes(id)}
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
