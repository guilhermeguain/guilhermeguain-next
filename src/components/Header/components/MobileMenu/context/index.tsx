'use client';

import React, {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
  ReactNode,
  useRef,
  useEffect,
} from 'react';

export type MobileMenuProviderProps = {
  children: ReactNode;
};

export type MobileMenuContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transitioning: boolean;
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
  drawerWidth: number;
  setDrawerWidth: React.Dispatch<React.SetStateAction<number>>;
  drawerPosition: string;
  setDrawerPosition: React.Dispatch<React.SetStateAction<string>>;
  drawerRef: React.LegacyRef<HTMLDivElement>;
  isOpening: boolean;
  isClosing: boolean;
  inTransition: boolean;
  hideComponent: boolean;
  hideOverlay: boolean;
  showDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const MobileMenuContext = createContext({} as MobileMenuContextProps);

export function MobileMenuProvider({ children }: MobileMenuProviderProps) {
  const drawerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState<number>(drawerRef.current?.clientWidth || 0);
  const [drawerPosition, setDrawerPosition] = useState<string>('-999px');

  const isOpening = useMemo(() => !isOpen && transitioning, [isOpen, transitioning]);

  const isClosing = useMemo(() => !!isOpen && transitioning, [isOpen, transitioning]);

  const inTransition = useMemo(() => isOpening || isClosing, [isOpening, isClosing]);

  const hideComponent = !inTransition && !isOpen;

  const hideOverlay = !!isClosing || (!inTransition && !isOpen);

  const showDrawer = !!isOpen || !!isOpening || !!isClosing;

  const openDrawer = useCallback(() => {
    setTransitioning(true);
    setDrawerPosition('0px');

    setTimeout(() => {
      setIsOpen((isOpen) => !isOpen);
      setTransitioning(false);
    }, 500);
  }, []);

  const closeDrawer = useCallback(() => {
    setTransitioning(true);
    setDrawerPosition(`-${drawerRef.current?.clientWidth}px`);

    setTimeout(() => {
      setIsOpen(false);
      setTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    setDrawerWidth(drawerRef.current?.clientWidth || 0);
  }, []);

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      transitioning,
      setTransitioning,
      drawerWidth,
      setDrawerWidth,
      drawerPosition,
      setDrawerPosition,
      drawerRef,
      isOpening,
      isClosing,
      inTransition,
      hideComponent,
      hideOverlay,
      showDrawer,
      openDrawer,
      closeDrawer,
    }),
    [
      isOpen,
      setIsOpen,
      transitioning,
      setTransitioning,
      drawerWidth,
      setDrawerWidth,
      drawerPosition,
      setDrawerPosition,
      drawerRef,
      isOpening,
      isClosing,
      inTransition,
      hideComponent,
      hideOverlay,
      showDrawer,
      openDrawer,
      closeDrawer,
    ],
  );

  return <MobileMenuContext.Provider value={contextValue}>{children}</MobileMenuContext.Provider>;
}

export const useMobileMenu = () => useContext(MobileMenuContext);
