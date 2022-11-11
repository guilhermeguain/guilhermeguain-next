import React from 'react';
import { Box, Flex, Heading, Text, Progress } from '@chakra-ui/react';

import { useApp } from '../../contexts/App';

export const HardSkills = () => {
  const { content } = useApp();
  const { about } = content;

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
        Hard Skills
      </Heading>
      <Flex direction="column" gap={4} bg="gray.100" p={4} flex={1} borderBottomRadius="xl">
        {about.hardSkills.map(({ slug, label, value }) => (
          <Box key={slug}>
            <Text textTransform="uppercase" fontSize="xs" fontWeight="bold" color="gray.500">
              {label}
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
