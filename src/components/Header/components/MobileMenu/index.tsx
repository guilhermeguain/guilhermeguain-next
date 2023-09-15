'use client';

import React, { useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import TagManager from 'react-gtm-module';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import { vars } from '@styles/theme.css';

import { LangSelector } from '@components/LangSelector';

import { useMobileMenu } from './context';

import { Button, Menu, Overlay, Drawer, DrawerHeader, DrawerContent, Link } from './styles.css';

export const MobileMenu = ({ items }: MenuProps) => {
  const {
    drawerPosition,
    drawerRef,
    hideComponent,
    hideOverlay,
    showDrawer,
    openDrawer,
    closeDrawer,
  } = useMobileMenu();

  const { t } = useTranslation('menu');

  const path = usePathname();

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

    closeDrawer();
  }, []);

  return (
    <>
      <button aria-label="Main menu" onClick={openDrawer} className={Button}>
        <RxHamburgerMenu size={24} />
      </button>
      <div className={hideComponent ? Menu.hidden : Menu.default}>
        <div className={hideOverlay ? Overlay.hidden : Overlay.default} onClick={closeDrawer} />
        <div
          ref={drawerRef}
          className={showDrawer ? Drawer.visible : Drawer.default}
          style={{ right: drawerPosition }}
        >
          <div className={DrawerHeader}>
            <IoClose size={24} onClick={closeDrawer} />
          </div>
          <ul className={DrawerContent}>
            {items?.map(({ id, href }) => (
              <li key={id}>
                <NextLink
                  href={href}
                  passHref
                  scroll={false}
                  aria-current={path?.includes(id)}
                  onClick={handleMenuClick}
                  className={Link}
                >
                  {t(id)}
                </NextLink>
              </li>
            ))}
          </ul>
          <LangSelector id="lang_selector_mobile" style={{ color: vars.color.gray[800] }} />
        </div>
      </div>
    </>
  );
};
