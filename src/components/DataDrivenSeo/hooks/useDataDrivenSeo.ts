import { Semrush } from '@/assets/Semrush';
import { GoogleAnalytics } from '@/assets/GoogleAnalytics';
import { GoogleTagManager } from '@/assets/GoogleTagManager';

export const useDataDrivenSeo = () => {
  const dataDrivenSeo = [
    {
      id: 'semrush',
      label: 'Semrush',
      icon: Semrush,
      list: [
        'Pesquisa e análise de palavras-chave e da concorrência',
        'Monitoramento e correção dos erros identificados pela auditoria',
        'Monitoramento de desempenho e posicionamento',
      ],
    },
    {
      id: 'google-tag-manager',
      label: 'Google Tag Managger',
      icon: GoogleTagManager,
      list: [
        'Configuração de tags, gatilhos e variáveis',
        'Criação de gatilhos baseados em eventos personalizados',
        'Configuração para comunicação entre iframes',
        'Captura de informações através da camada de dados',
      ],
    },
    {
      id: 'google-analytics',
      label: 'Google Analytics',
      icon: GoogleAnalytics,
      list: [
        'Instalação de tags usando o Google Tag Manager',
        'Configuração de dimensões e métricas personalizadas',
        'Configuração do GA4',
        'Configuração de filtros e metas de conversão',
        'Uso da camada de dados para obter dados',
      ],
    },
  ];

  return {
    dataDrivenSeo,
  };
};
