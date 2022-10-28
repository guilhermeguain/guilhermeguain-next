import React from 'react';
import { Box, Flex, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

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
    <Flex direction="column">
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200" mb={4}>
        Data-driven SEO
      </Heading>
      <Flex gap={8}>
        <Box flex={1}>
          <Heading
            as="h3"
            fontSize="sm"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            mb={2}
          >
            Semrush
          </Heading>
          <List spacing={4}>
            {semrushItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Heading
            as="h3"
            fontSize="sm"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            mb={2}
          >
            Google Tag Manager
          </Heading>
          <List spacing={4}>
            {tagManagerItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Heading
            as="h3"
            fontSize="sm"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            mb={2}
          >
            Google Analytics
          </Heading>
          <List spacing={4}>
            {analyticsItems.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="baseline">
                <ListIcon as={FaChevronRight} color="secondary.500" fontSize="xs" />
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Flex>
  );
};
