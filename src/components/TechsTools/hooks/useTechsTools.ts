import { useTranslation } from 'next-i18next';

import { techs } from './techs';

export const useTechsTools = () => {
  const { t } = useTranslation(['about']);

  return {
    t,
    techs,
  };
};
