import React from 'react';

import { HeaderProvider } from '@components/Header/context';

export const AppContext = ({ children }: AppContextProps) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};
