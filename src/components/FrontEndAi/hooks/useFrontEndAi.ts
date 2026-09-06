import { useTranslation } from 'next-i18next';
import { SiReact } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';

import { Cursor } from '@assets/Cursor';

export const useFrontEndAi = () => {
  const { t } = useTranslation(['front-end-ai']);

  const columns = [
    {
      id: 'workflow',
      icon: Cursor,
      list: ['workflow-1', 'workflow-2', 'workflow-3', 'workflow-4'],
    },
    {
      id: 'front-end',
      icon: SiReact,
      iconColor: '#61dafb',
      list: [
        'front-end-1',
        'front-end-2',
        'front-end-3',
        'front-end-4',
        'front-end-5',
        'front-end-6',
      ],
    },
    {
      id: 'impact',
      icon: FaChartLine,
      iconColor: '#078c64',
      list: ['impact-1', 'impact-2', 'impact-3', 'impact-4'],
    },
  ];

  return {
    t,
    columns,
  };
};
