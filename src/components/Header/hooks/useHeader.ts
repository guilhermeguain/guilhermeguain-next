import { useMemo } from 'react';

import { MOBILE_BREAKPOINT } from '@/lib/constants';

import { useWindowSize } from '@/hooks/useWindowSize';

import { useHeaderContext } from '../context';

export const useHeader = () => {
  const { width } = useWindowSize();

  const { headerRef, headerHeight } = useHeaderContext();

  const menuItems = useMemo(
    () => [
      {
        id: 'about',
        label: 'Sobre',
        href: '#about',
      },
      {
        id: 'experience',
        label: 'Experiência',
        href: '#experience',
      },
      {
        id: 'projects',
        label: 'Projetos',
        href: '#projects',
      },
      {
        id: 'education',
        label: 'Educação',
        href: '#education',
      },
    ],
    [],
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    headerRef,
    headerHeight,
    menuItems,
    width,
    isMobile,
  };
};
