import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { When } from '@components/shared/When';
import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';

import { useHeader } from './hooks/useHeader';
import { MobileMenuProvider } from './components/MobileMenu/context';
import { Container, ContainerOverlay, ContainerContent } from './styles.css';

export const Header = ({ title, logo = '/images/logo.svg' }: HeaderProps) => {
  const { headerRef, headerHeight, menuItems, width, isMobile } = useHeader();

  return (
    <MobileMenuProvider>
      <header className={Container}>
        <div className={ContainerOverlay} style={{ height: `${headerHeight}px` }} />
        <div ref={headerRef} className={ContainerContent}>
          <div>
            <NextLink href="/">
              <NextImage
                src={logo}
                width={48}
                height={35}
                alt={title}
                title={title}
                priority
                blurDataURL={logo}
              />
            </NextLink>
          </div>
          <When value={isMobile || !width}>
            <MobileMenu items={menuItems} />
          </When>
          <When value={!isMobile}>
            <DesktopMenu items={menuItems} />
          </When>
        </div>
      </header>
    </MobileMenuProvider>
  );
};
