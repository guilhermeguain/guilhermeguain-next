import { useMemo } from 'react';

export const useEducation = () => {
  const educations = useMemo(
    () => [
      {
        id: 'ignite-lab-node-js',
        title: 'React.js - Ignite',
        institution: 'Rocketseat',
        period: '07/2022 - 07/2022',
        location: 'Online',
      },
      {
        id: 'ignite',
        title: 'Ignite Lab - Node.js, NestJS, Prisma, TypeScript e Jest',
        institution: 'Rocketseat',
        period: '12/2022 - 12/2022',
        location: 'Online',
      },
      {
        id: 'gostack',
        title: 'GoStack - Node.js, React.js e React Native',
        institution: 'Rocketseat',
        period: '10/2020 - 03/2021',
        location: 'Online',
      },
      {
        id: 'nanodegree-udacity',
        title: 'Desenvolvedor Web Front-end Nanodegree',
        institution: 'Udacity',
        period: '11/2017 - 04/2018',
        location: 'Online',
      },
      {
        id: 'stack-alura',
        title: 'HTML5, CSS3, JavaScript e Bootstrap',
        institution: 'Alura',
        period: '11/2017 - 02/2018',
        location: 'Online',
      },
      {
        id: 'php-impacta',
        title: 'Lógica de programação e PHP',
        institution: 'Impacta',
        period: '10/2012 - 06/2014',
        location: 'São Paulo, SP',
      },
      {
        id: 'graphic-design',
        title: 'Técnico em computação gráfica',
        institution: 'Alpha Channel',
        period: '05/2012 - 05/2013',
        location: 'São Paulo, SP',
      },
    ],
    [],
  );

  return {
    educations,
  };
};
