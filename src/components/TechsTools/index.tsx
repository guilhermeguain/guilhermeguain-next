import React from 'react';
import { Box, Flex, Heading, Image, HStack } from '@chakra-ui/react';

import { techs } from './techs';

export const TechsTools = () => {
  return (
    <Flex direction="column" gap={4} flex={1}>
      <Heading
        as="h3"
        fontSize="xl"
        fontWeight="medium"
        borderBottom="1px"
        pb={2}
        borderColor="gray.400"
      >
        Techs & Tools
      </Heading>
      <Flex direction="column" gap={8}>
        <Box>
          <Heading
            as="h4"
            fontSize="sm"
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
            fontSize="sm"
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
            fontSize="sm"
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
