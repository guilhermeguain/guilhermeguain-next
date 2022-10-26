import React from 'react';
import { Flex, Heading, Text, CircularProgress } from '@chakra-ui/react';

import { languages } from './languages';

export const Languages = () => {
  return (
    <Flex direction="column" gap={4} flex={1}>
      <Heading as="h3" fontSize="2xl" borderBottom="1px" borderColor="gray.200">
        Languages
      </Heading>
      <Flex gap={8}>
        {languages.map(({ code, name, profficiency }) => (
          <Flex key={code} direction="column" gap={4}>
            <Text textTransform="uppercase" fontSize="xs" fontWeight="bold" color="gray.500" pr={2}>
              {name}
            </Text>
            <Flex direction="column" gap={4}>
              {profficiency.map(({ label, value }) => (
                <Flex key={label} gap={2} alignItems="center">
                  <CircularProgress size={6} value={value} thickness={16} />
                  <Text fontSize="xs" fontWeight="medium">
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
