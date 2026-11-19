'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MFKHPQ4' });
  }, []);

  return null;
};
