import { useMemo } from 'react';

export const useLanguages = () => {
  const languages = useMemo(
    () => [
      {
        id: 'portuguese',
        label: 'Português',
        proficiency: [
          { id: 'speaking', label: 'Fala', value: 100 },
          { id: 'listening', label: 'Escuta', value: 100 },
          { id: 'writing', label: 'Escrita', value: 100 },
        ],
      },
      {
        id: 'english',
        label: 'Inglês',
        proficiency: [
          { id: 'speaking', label: 'Fala', value: 40 },
          { id: 'listening', label: 'Escuta', value: 80 },
          { id: 'writing', label: 'Escrita', value: 90 },
        ],
      },
    ],
    [],
  );

  return {
    languages,
  };
};
