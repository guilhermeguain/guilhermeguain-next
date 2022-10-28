import React from 'react';
import { Box, Flex, Heading, Image, HStack } from '@chakra-ui/react';

import { techs } from './techs';

export const TechsTools = () => {
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
        Techs & Tools
      </Heading>
      <Flex direction="column" gap={8} bg="gray.100" p={4} flex={1} borderBottomRadius="xl">
        <Box>
          <Heading
            as="h4"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.500"
            mb={2}
          >
            Primary
          </Heading>
          <HStack fontSize="3xl" gap={2}>
            {techs.primary.map(({ id, title, icon, color }) => (
              <Image key={id} as={icon} title={title} alt={title} color={color} />
            ))}
          </HStack>
        </Box>
        <Box>
          <Heading
            as="h4"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.500"
            mb={2}
          >
            Secondary
          </Heading>
          <HStack fontSize="3xl" gap={2}>
            {techs.secondary.map(({ id, title, icon, color }) => (
              <Image key={id} as={icon} title={title} alt={title} color={color} />
            ))}
          </HStack>
        </Box>
        <Box>
          <Heading
            as="h4"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.500"
            mb={2}
          >
            Design
          </Heading>
          <HStack fontSize="3xl" gap={2}>
            {techs.design.map(({ id, title, icon }) => (
              <Image key={id} as={icon} title={title} alt={title} />
            ))}
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};
