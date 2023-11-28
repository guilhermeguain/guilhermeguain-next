import { techs } from './techs';

export const useTechsTools = () => {
  const groups = [
    { id: 1, title: 'Primária', items: techs.primary },
    { id: 2, title: 'Secundária', items: techs.secondary },
    { id: 3, title: 'Design', items: techs.design },
  ];

  return {
    groups,
  };
};
