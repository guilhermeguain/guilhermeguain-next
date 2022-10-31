import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

export const Extracurricular = () => {
  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        Extracurricular/Hobbies
      </Heading>
    </Flex>
  );
};
