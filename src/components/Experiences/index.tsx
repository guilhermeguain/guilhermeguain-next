import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

import { useExperiences } from './hooks/useExperiences';

export const Experiences = () => {
  const { t, experiences } = useExperiences();

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        Experience
      </Heading>
      <Flex direction="column" gap={8}>
        {experiences.map(({ id, badges }) => (
          <Box key={id} bg="gray.50" p={4} borderRadius="xl">
            <Flex
              direction={['column', 'column', 'row']}
              justifyContent="space-between"
              alignItems={['flex-start', 'flex-start', 'center']}
              gap={[4, 4, 8]}
              borderBottom="1px"
              borderColor="gray.400"
              pb={2}
            >
              <Box>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color="gray.600" mb={1}>
                  {t(`experience:${id}.company`)}
                </Heading>
                <Flex direction={['column', 'row']} gap={4} alignItems={['flex-start', 'center']}>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    bgColor="secondary.400"
                    color="white"
                    py={0.5}
                    px={2}
                    borderRadius="md"
                  >
                    {t(`experience:${id}.role`)}
                  </Text>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    {t(`experience:${id}.period`)}
                  </Text>
                </Flex>
              </Box>
              <Flex fontSize="2xl" gap={4}>
                {badges.map(({ id, title, color, icon }) => (
                  <Image key={id} as={icon} color={color} alt={title} title={title} />
                ))}
              </Flex>
            </Flex>
            <Text color="gray.600" fontWeight="medium" textAlign="justify" mt={4}>
              {t(`experience:${id}.summary`)}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
