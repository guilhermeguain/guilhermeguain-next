import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useProjects = () => {
  const { t } = useTranslation(['projects']);

  const projects = useMemo(
    () => [
      {
        id: 'sleepie',
        link: 'https://www.sleepie.life/',
      },
      {
        id: 'health-protection',
        link: 'https://www.healthprotection.com/',
      },
      {
        id: 'toxicologia-pardini',
        link: 'https://www.exametoxicologico.com.br/',
      },
      {
        id: 'extra-consult',
        link: 'https://www.extraconsult.com.br/',
      },
      {
        id: 'trabalhista-cred',
        link: 'https://www.trabalhistacred.com.br/',
      },
      {
        id: 'inter-american-coalition',
        link: 'https://www.interamericancoalition-medtech.org/',
      },
      {
        id: 'global-empregos',
        link: 'https://www.globalempregos.com.br/',
      },
      {
        id: 'aladdiv',
        link: 'https://www.aladdiv.org.br/',
      },
      {
        id: 'declare-facil',
        link: 'https://www.declarefacil.com.br/',
      },
      {
        id: 'emporio-das-arabias',
        link: 'https://www.emporiodasarabias.com.br/',
      },
      {
        id: 'rbac-120',
        link: 'https://www.rbac120.com.br/',
      },
      {
        id: 'sorriso-da-vila',
        link: 'https://www.sorrisodavilla.com.br/',
      },
      {
        id: 'slh-engenharia',
        link: 'https://www.slhengenharia.com.br/',
      },
      {
        id: 'swell',
        link: 'https://www.swell.eng.br/',
      },
      {
        id: 'espaco-manar',
        link: 'https://www.espacomanar.com.br/',
      },
      {
        id: 'zetaz',
        link: 'https://zetaz.com.br/',
      },
    ],
    [],
  );

  return {
    t,
    projects,
  };
};
