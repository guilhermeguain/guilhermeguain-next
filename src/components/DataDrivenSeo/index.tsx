import React from 'react';
import { Box, Flex, Heading, Text, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { useDataDrivenSeo } from './hooks/useDataDrivenSeo';

export const DataDrivenSeo = () => {
  const { t, dataDrivenSeo } = useDataDrivenSeo();

  return (
    <Flex id="data-driven-seo" direction="column" gap={8} pt={16}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {t('data-driven-seo:title')}
      </Heading>
      <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
        {dataDrivenSeo.map(({ id, icon, list }) => (
          <Box key={id} flex={1}>
            <Flex gap={4} alignItems="center" mb={4}>
              <Image as={icon} title={id} alt={id} />
              <Heading
                as="h3"
                fontSize="sm"
                textTransform="uppercase"
                fontWeight="bold"
                color="gray.400"
              >
                {t(`data-driven-seo:${id}.title`)}
              </Heading>
            </Flex>
            <List spacing={4}>
              {list.map((listItem) => (
                <ListItem key={listItem} display="flex" alignItems="baseline">
                  <ListIcon as={FaChevronRight} color="secondary.400" fontSize="xs" />
                  <Text fontSize={['sm', 'sm', 'md']}>
                    {t(`data-driven-seo:${id}.${listItem}`)}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
