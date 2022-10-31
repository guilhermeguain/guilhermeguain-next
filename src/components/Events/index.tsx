import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

import { texts } from '../../lib/texts';

export const Events = () => {
  const { events } = texts;

  return (
    <Flex direction="column" gap={8} flex={1}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        Events
      </Heading>
      <Flex direction="column" gap={4}>
        {events.items.map(({ title, host, date, location }, index) => (
          <Flex
            key={index}
            bg="gray.100"
            borderRadius="xl"
            py={2}
            px={4}
            gap={8}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Heading as="h3" fontSize="md" fontWeight="medium" color="primary.500">
                {title}
              </Heading>
              <Text color="gray.500" fontSize="xs" textTransform="uppercase" fontWeight="semibold">
                {host}
              </Text>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="medium" color="gray.500">
                {date}
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="gray.500">
                {location}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
