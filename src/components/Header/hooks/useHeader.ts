import { useMemo } from 'react';

import { MOBILE_BREAKPOINT } from '@lib/constants';

import { useWindowSize } from '@hooks/useWindowSize';

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: 'about',
        href: '#about',
      },
      {
        id: 'experience',
        href: '#experience',
      },
      {
        id: 'projects',
        href: '#projects',
      },
      {
        id: 'education',
        href: '#education',
      },
    ],
    [],
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    menuItems,
    isMobile,
  };
};
