import React from 'react';
import { Box, Flex, Heading, Progress } from '@chakra-ui/react';

import { useHardSkills } from './hooks/useHardSkills';

export const HardSkills = () => {
  const { t, hardSkills } = useHardSkills();

  return (
    <Flex direction="column" flex={1} w={72}>
      <Heading
        as="h3"
        fontSize="sm"
        fontWeight="semibold"
        px={4}
        py={2}
        borderTopRadius="xl"
        bg="tertiary.100"
        color="gray.800"
        textTransform="uppercase"
      >
        {t('about:hard-skills')}
      </Heading>
      <Flex direction="column" gap={4} bg="gray.50" p={4} flex={1} borderBottomRadius="xl">
        {hardSkills.map(({ id, value }) => (
          <Box key={id}>
            <Heading
              as="h4"
              id={`progressbar-${id}`}
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="bold"
              lineHeight="tall"
              color="gray.600"
            >
              {t(`hard-skills:${id}`)}
            </Heading>
            <Progress
              hasStripe
              isAnimated
              aria-labelledby={`progressbar-${id}`}
              value={value}
              flex={1}
              colorScheme="tertiary"
              borderRadius="xl"
              size="sm"
              background="gray.300"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
