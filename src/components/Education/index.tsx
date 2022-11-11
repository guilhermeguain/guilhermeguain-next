import React from 'react';
import { Box, Flex, Heading, Text, VStack, StackDivider } from '@chakra-ui/react';

import { useApp } from '../../contexts/App';

export const Education = () => {
  const { content } = useApp();
  const { education } = content;

  return (
    <Flex direction="column" gap={8} flex={1}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {education.title}
      </Heading>
      <VStack divider={<StackDivider borderColor="gray.700" />} alignItems="flex-start" spacing={4}>
        {education.items.map(({ title, institution, period, location }, index) => (
          <Flex
            key={index}
            gap={[4, 8]}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box flex={1}>
              <Heading as="h3" fontSize={['sm', 'md']} fontWeight="medium" color="gray.50">
                {title}
              </Heading>
              <Text
                color="gray.500"
                fontSize={['2xs', 'xs']}
                textTransform="uppercase"
                fontWeight="semibold"
              >
                {institution}
              </Text>
            </Box>
            <Box textAlign="right">
              <Text fontSize={['xs', 'sm']} fontWeight="medium" color="gray.500">
                {period}
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="gray.500">
                {location}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};
