import React from 'react';
import { Box, Flex, Heading, Text, Progress } from '@chakra-ui/react';

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
      <Flex direction="column" gap={4} bg="gray.100" p={4} flex={1} borderBottomRadius="xl">
        {hardSkills.map(({ id, value }) => (
          <Box key={id}>
            <Text textTransform="uppercase" fontSize="xs" fontWeight="bold" color="gray.500">
              {t(`hard-skills:${id}`)}
            </Text>
            <Progress
              hasStripe
              isAnimated
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
