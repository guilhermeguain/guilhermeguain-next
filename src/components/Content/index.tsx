import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export const Content = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex as="main" w="100%" maxWidth={'7xl'} mx="auto" px={4} direction="column" {...rest}>
      <>{children}</>
    </Flex>
  );
};
