import { useTranslation } from 'next-i18next';

import { techs } from './techs';

export const useTechsTools = () => {
  const { t } = useTranslation(['about']);

  const groups = [
    { id: 1, title: t('about:techs-tools.primary'), items: techs.primary },
    { id: 2, title: t('about:techs-tools.secondary'), items: techs.secondary },
    { id: 3, title: t('about:techs-tools.design'), items: techs.design },
  ];

  return {
    t,
    groups,
  };
};
