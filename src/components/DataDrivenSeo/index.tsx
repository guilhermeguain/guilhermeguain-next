import React from 'react';
import { Box, Flex, Heading, Text, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { Semrush } from '../../assets/Semrush';
import { GoogleAnalytics } from '../../assets/GoogleAnalytics';
import { GoogleTagManager } from '../../assets/GoogleTagManager';

export const DataDrivenSeo = () => {
  const semrushItems = [
    'Pesquisa e análise de palavras-chave e concorrentes',
    'Acompanhamento e correção de erros apontados pela auditoria',
    'Monitoramento de desempenho e posicionamento',
  ];

  const tagManagerItems = [
    'Configuração de tags, gatilhos e variáveis',
    'Criação de gatilhos baseados em eventos personalizados',
    'Configuração para comunicação entre iframes',
    'Captura de informações através de data layer',
  ];

  const analyticsItems = [
    'Instalação de tag usando Google Tag Manager',
    'Configuração de dimensões e métricas personalizadas',
    'Configuração do GA4',
    'Configuração de filtros e metas de conversão',
    'Uso de data layer para obter dados',
  ];

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        Data-driven SEO
      </Heading>
      <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
        <Box flex={1}>
          <Flex gap={4} alignItems="center" mb={4}>
            <Image as={Semrush} title="Semrush" alt="Semrush" />
            <Heading
              as="h3"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.400"
            >
              Semrush
            </Heading>
          </Flex>
          <List spacing={4}>
            {semrushItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text fontSize={['sm', 'sm', 'md']}>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Flex gap={4} alignItems="center" mb={4}>
            <Image as={GoogleTagManager} title="Google Tag Manager" alt="Google Tag Manager" />
            <Heading
              as="h3"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.400"
            >
              Google Tag Manager
            </Heading>
          </Flex>
          <List spacing={4}>
            {tagManagerItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text fontSize={['sm', 'sm', 'md']}>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Flex gap={4} alignItems="center" mb={4}>
            <Image as={GoogleAnalytics} title="Google Analytics" alt="Google Analytics" />
            <Heading
              as="h3"
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.400"
            >
              Google Analytics
            </Heading>
          </Flex>
          <List spacing={4}>
            {analyticsItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text fontSize={['sm', 'sm', 'md']}>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Flex>
  );
};
