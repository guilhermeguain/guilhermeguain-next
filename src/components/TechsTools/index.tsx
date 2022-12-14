import React from 'react';
import { Box, Flex, Heading, Image, HStack } from '@chakra-ui/react';

import { useTechsTools } from './hooks/useTechsTools';

export const TechsTools = () => {
  const { t, techs } = useTechsTools();

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
        {t('about:techs-tools.title')}
      </Heading>
      <Flex direction="column" gap={8} bg="gray.50" p={4} flex={1} borderBottomRadius="xl">
        <Box>
          <Heading
            as="h4"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.600"
            mb={2}
          >
            {t('about:techs-tools.primary')}
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
            color="gray.600"
            mb={2}
          >
            {t('about:techs-tools.secondary')}
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
            color="gray.600"
            mb={2}
          >
            {t('about:techs-tools.design')}
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
