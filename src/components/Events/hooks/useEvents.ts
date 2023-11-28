import { useMemo } from 'react';

export const useEvents = () => {
  const events = useMemo(
    () => [
      {
        id: 'dev-leaders-conference-alura-2023',
        title: 'DevLeaders Conference',
        host: 'Alura',
        date: '08/2023',
        location: 'São Paulo, SP',
      },
      {
        id: 'ia-experience-wtc-sp',
        title: 'IA Experience',
        host: 'Upper & StartSe',
        date: '04/2023',
        location: 'São Paulo, SP',
      },
      {
        id: 'assemble-rocketseat',
        title: 'Assemble',
        host: 'Rocketseat',
        date: '03/2023',
        location: 'São Paulo, SP',
      },
      {
        id: 'next-js-conf',
        title: 'Next.js Conf',
        host: 'Vercel',
        date: '10/2022',
        location: 'Online',
      },
      {
        id: 'seo-summit',
        title: 'SEO Summit',
        host: 'Conversion',
        date: '09/2022',
        location: 'Online',
      },
      {
        id: 'dowhile-2020',
        title: 'DoWhile 2020',
        host: 'Rocketseat',
        date: '12/2020',
        location: 'Online',
      },
      {
        id: 'semrush-live',
        title: 'Semrush Live',
        host: 'Semrush',
        date: '10/2019',
        location: 'São Paulo, SP',
      },
      {
        id: 'google-cloud-summit',
        title: 'Google Cloud Summit',
        host: 'Google',
        date: '12/2018',
        location: 'São Paulo, SP',
      },
      {
        id: 'wordcamp-sao-paulo-2018',
        title: 'WordCamp São Paulo 2018',
        host: 'Community',
        date: '10/2018',
        location: 'São Paulo, SP',
      },
      {
        id: 'google-amp-roadshow-brazil',
        title: 'Google AMP Roadshow Brazil',
        host: 'Google',
        date: '08/2018',
        location: 'São Paulo, SP',
      },
    ],
    [],
  );

  return {
    events,
  };
};
