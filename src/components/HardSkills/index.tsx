import React from 'react';
import { Box, Flex, Heading, Text, Progress } from '@chakra-ui/react';

import { hardSkills } from './hardSkills';

export const HardSkills = () => {
  return (
    <Flex direction="column" gap={4} flex={1}>
      <Heading as="h3" fontSize="2xl" borderBottom="1px" borderColor="gray.200">
        Hard Skills
      </Heading>
      {hardSkills.map(({ slug, label, value }) => (
        <Box key={slug}>
          <Text textTransform="uppercase" fontSize="xs" fontWeight="bold" color="gray.500" pr={2}>
            {label}
          </Text>
          <Progress
            hasStripe
            isAnimated
            value={value}
            flex={1}
            colorScheme="primary"
            borderRadius="xl"
            size="sm"
            background="gray.300"
          />
        </Box>
      ))}
    </Flex>
  );
};
