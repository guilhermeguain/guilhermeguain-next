import { useTranslation } from 'next-i18next';

import { Semrush } from '@assets/Semrush';
import { GoogleAnalytics } from '@assets/GoogleAnalytics';
import { GoogleTagManager } from '@assets/GoogleTagManager';

export const useDataDrivenSeo = () => {
  const { t } = useTranslation(['data-driven-seo']);

  const dataDrivenSeo = [
    {
      id: 'semrush',
      icon: Semrush,
      list: ['semrush-1', 'semrush-2', 'semrush-3'],
    },
    {
      id: 'google-tag-manager',
      icon: GoogleTagManager,
      list: [
        'google-tag-manager-1',
        'google-tag-manager-2',
        'google-tag-manager-3',
        'google-tag-manager-4',
      ],
    },
    {
      id: 'google-analytics',
      icon: GoogleAnalytics,
      list: [
        'google-analytics-1',
        'google-analytics-2',
        'google-analytics-3',
        'google-analytics-4',
        'google-analytics-5',
      ],
    },
  ];

  return {
    t,
    dataDrivenSeo,
  };
};
