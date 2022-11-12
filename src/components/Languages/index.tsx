import React from 'react';
import { Flex, Heading, Text, CircularProgress } from '@chakra-ui/react';

import { useLanguages } from './hooks/useLanguages';

export const Languages = () => {
  const { t, languages } = useLanguages();

  return (
    <Flex direction="column" flex={1} w={72}>
      <Heading
        as="h3"
        fontSize="sm"
        fontWeight="semibold"
        px={4}
        py={2}
        borderTopRadius="xl"
        bg="primary.500"
        color="gray.200"
        textTransform="uppercase"
      >
        {t('about:languages.title')}
      </Heading>
      <Flex gap={8} bg="gray.100" p={4} flex={1} borderBottomRadius="xl">
        {languages.map(({ id, proficiency }) => (
          <Flex key={id} direction="column" gap={4}>
            <Heading
              as="h4"
              fontSize="xs"
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.500"
            >
              {t(`about:languages.${id}`)}
            </Heading>
            <Flex direction="column" gap={4}>
              {proficiency.map(({ id, value }) => (
                <Flex key={id} gap={2} alignItems="center">
                  <CircularProgress size={6} value={value} color="primary.500" thickness={16} />
                  <Text fontSize="xs" fontWeight="medium" color="gray.500">
                    {t(`about:languages.${id}`)}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
