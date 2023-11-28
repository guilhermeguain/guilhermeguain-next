import { useCallback, useMemo } from 'react';
import TagManager from 'react-gtm-module';

export const useProjects = () => {
  const projects = useMemo(
    () => [
      {
        id: 'sleepie',
        label: 'Sleepie',
        link: 'https://www.sleepie.life/',
      },
      {
        id: 'health-protection',
        label: 'Health Protection',
        link: 'https://www.healthprotection.com/',
      },
      {
        id: 'toxicologia-pardini',
        label: 'Toxicologia Pardini',
        link: 'https://www.exametoxicologico.com.br/',
      },
      {
        id: 'extra-consult',
        label: 'Extra Consult',
        link: 'https://www.extraconsult.com.br/',
      },
      {
        id: 'trabalhista-cred',
        label: 'Trabalhista Cred',
        link: 'https://www.trabalhistacred.com.br/',
      },
      {
        id: 'inter-american-coalition',
        label: 'Inter-American Coalition',
        link: 'https://www.interamericancoalition-medtech.org/',
      },
      {
        id: 'global-empregos',
        label: 'Global Empregos',
        link: 'https://www.globalempregos.com.br/',
      },
      {
        id: 'aladdiv',
        label: 'ALADDiV',
        link: 'https://www.aladdiv.org.br/',
      },
      {
        id: 'declare-facil',
        label: 'DeclareFacil',
        link: 'https://www.declarefacil.com.br/',
      },
      {
        id: 'emporio-das-arabias',
        label: 'Empório das Arábias',
        link: 'https://www.emporiodasarabias.com.br/',
      },
      {
        id: 'rbac-120',
        label: 'RBAC 120',
        link: 'https://www.rbac120.com.br/',
      },
      {
        id: 'sorriso-da-vila',
        label: 'Sorriso da Vila',
        link: 'https://www.sorrisodavilla.com.br/',
      },
      {
        id: 'slh-engenharia',
        label: 'SLH Engenharia',
        link: 'https://www.slhengenharia.com.br/',
      },
      {
        id: 'swell',
        label: 'Swell Engenharia',
        link: 'https://www.swell.eng.br/',
      },
      {
        id: 'espaco-manar',
        label: 'Espaço Manar',
        link: 'https://www.espacomanar.com.br/',
      },
      {
        id: 'zetaz',
        label: 'Zetaz',
        link: 'https://zetaz.com.br/',
      },
    ],
    [],
  );

  const handleProjectClick = useCallback((event: React.MouseEvent) => {
    const id = event.currentTarget.getAttribute('data-id');
    const url = event.currentTarget.getAttribute('href');

    TagManager.dataLayer({
      dataLayer: {
        event: 'projectClick',
        projectId: id,
        projectUrl: url,
      },
    });
  }, []);

  return {
    projects,
    handleProjectClick,
  };
};
