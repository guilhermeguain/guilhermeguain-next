import React from 'react';
import { Flex, Heading, Text, CircularProgress } from '@chakra-ui/react';

import { languages } from './languages';

export const Languages = () => {
  return (
    <Flex direction="column" minWidth={72}>
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
        Languages
      </Heading>
      <Flex gap={8} bg="gray.100" p={4} flex={1} borderBottomRadius="xl">
        {languages.map(({ code, name, profficiency }) => (
          <Flex key={code} direction="column" gap={4}>
            <Heading
              as="h4"
              fontSize="xs"
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.500"
            >
              {name}
            </Heading>
            <Flex direction="column" gap={4}>
              {profficiency.map(({ label, value }) => (
                <Flex key={label} gap={2} alignItems="center">
                  <CircularProgress size={6} value={value} color="primary.500" thickness={16} />
                  <Text fontSize="xs" fontWeight="medium" color="gray.500">
                    {label}
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
