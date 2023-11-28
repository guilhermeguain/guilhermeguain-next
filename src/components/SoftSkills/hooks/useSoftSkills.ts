import { useMemo } from 'react';

export const useSoftSkills = () => {
  const softSkills = useMemo(
    () => [
      {
        id: 'communication',
        label: 'Comunicação',
        value: 80,
      },
      {
        id: 'teamwork',
        label: 'Trabalho em equipe',
        value: 90,
      },
      {
        id: 'problem-solving',
        label: 'Resolução de problemas',
        value: 100,
      },
      {
        id: 'time-management',
        label: 'Gerenciamento de tempo',
        value: 70,
      },
      {
        id: 'critical-thinking',
        label: 'Pensamento crítico',
        value: 90,
      },
      {
        id: 'decision-making',
        label: 'Tomada de decisões',
        value: 80,
      },
    ],
    [],
  );

  return {
    softSkills,
  };
};
