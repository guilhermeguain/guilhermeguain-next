import React from 'react';
import { Box, Flex, Heading, Text, VStack, StackDivider } from '@chakra-ui/react';

import { useEducation } from './hooks/useEducation';

export const Education = () => {
  const { t, educations } = useEducation();

  return (
    <Flex direction="column" gap={8} flex={1}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {t('education:title')}
      </Heading>
      <VStack divider={<StackDivider borderColor="gray.700" />} alignItems="flex-start" spacing={4}>
        {educations.map((education) => (
          <Flex
            key={education}
            gap={[4, 8]}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box flex={1}>
              <Heading as="h3" fontSize={['sm', 'md']} fontWeight="medium" color="gray.50">
                {t(`education:${education}.title`)}
              </Heading>
              <Text
                color="gray.400"
                fontSize={['2xs', 'xs']}
                textTransform="uppercase"
                fontWeight="semibold"
              >
                {t(`education:${education}.institution`)}
              </Text>
            </Box>
            <Box textAlign="right">
              <Text fontSize={['xs', 'sm']} fontWeight="medium" color="gray.400">
                {t(`education:${education}.period`)}
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="gray.400">
                {t(`education:${education}.location`)}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};
