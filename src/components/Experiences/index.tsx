import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

import { texts } from '../../lib/texts';

export const Experiences = () => {
  const { experiences } = texts;

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        Experience
      </Heading>
      <Flex direction="column" gap={8}>
        {experiences.map(({ role, company, period, badges, summary }) => (
          <Box key={company} bg="gray.200" p={4} borderRadius="xl">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              gap={8}
              borderBottom="1px"
              borderColor="gray.400"
              pb={2}
            >
              <Box>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color="gray.600" mb={1}>
                  {company}
                </Heading>
                <Flex gap={4}>
                  <Text fontSize="sm" fontWeight="medium" color="secondary.400">
                    {role}
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    {period}
                  </Text>
                </Flex>
              </Box>
              <Flex fontSize="2xl" gap={4}>
                {badges.map(({ id, title, color, icon }) => (
                  <Image key={id} as={icon} color={color} alt={title} title={title} />
                ))}
              </Flex>
            </Flex>
            <Text color="gray.500" fontWeight="medium" textAlign="justify" mt={4}>
              {summary}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
