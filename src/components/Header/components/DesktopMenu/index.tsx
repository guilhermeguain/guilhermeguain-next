'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import TagManager from 'react-gtm-module';

import { LangSelector } from '@/components/LangSelector';

import { Container, Menu, MenuItem } from './styles.css';

export const DesktopMenu = ({ items }: MenuProps) => {
  const pathname = usePathname();

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
        {items.map(({ id, label, href }) => (
          <li key={id}>
            <NextLink
              aria-current={pathname.includes(id)}
              href={href}
              passHref
              scroll={false}
              data-id={id}
              onClick={handleMenuClick}
              className={MenuItem}
            >
              {label}
            </NextLink>
          </li>
        ))}
      </ul>
      <LangSelector id="lang_selector_header" />
    </nav>
  );
};
