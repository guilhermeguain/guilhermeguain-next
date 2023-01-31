import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useWindowSize } from '@hooks/useWindowSize';

export const HeaderContext = createContext({} as HeaderContextProps);

export function HeaderProvider({ children }: HeaderProviderProps) {
  const { width } = useWindowSize();

  const headerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.clientHeight || 0);
  }, [headerRef, width]);

  const contextValue = useMemo(
    () => ({
      headerRef,
      headerHeight,
    }),
    [headerRef, headerHeight],
  );

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>;
}

export const useHeaderContext = () => useContext(HeaderContext);
