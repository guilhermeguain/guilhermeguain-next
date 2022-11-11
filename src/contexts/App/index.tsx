import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

import { content as defaultContent } from '../../lib/content/default';

import { AppContextProps, LangProps, ContentProps } from './types';

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [lang, setLang] = useState<LangProps>('en-US');
  const [content, setContent] = useState<ContentProps>(defaultContent);

  const contextValue = useMemo(() => ({ lang, content, setLang, setContent }), [lang, setLang]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export function useApp() {
  return useContext(AppContext);
}
