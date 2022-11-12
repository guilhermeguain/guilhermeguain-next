import React from 'react';
import { Flex, Box, Heading, Text, VStack, StackDivider } from '@chakra-ui/react';

import { useEvents } from './hooks/useEvents';

export const Events = () => {
  const { t, events } = useEvents();

  return (
    <Flex direction="column" gap={8} flex={1}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {t('events:title')}
      </Heading>
      <VStack divider={<StackDivider borderColor="gray.700" />} alignItems="flex-start" spacing={4}>
        {events.map((event) => (
          <Flex key={event} gap={8} justifyContent="space-between" alignItems="center" width="100%">
            <Box flex={1}>
              <Heading as="h3" fontSize={['sm', 'md']} fontWeight="medium" color="gray.50">
                {t(`events:${event}.title`)}
              </Heading>
              <Text
                color="gray.500"
                fontSize={['2xs', 'xs']}
                textTransform="uppercase"
                fontWeight="semibold"
              >
                {t(`events:${event}.host`)}
              </Text>
            </Box>
            <Box textAlign="right">
              <Text fontSize={['xs', 'sm']} fontWeight="medium" color="gray.500">
                {t(`events:${event}.date`)}
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="gray.500">
                {t(`events:${event}.location`)}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};
