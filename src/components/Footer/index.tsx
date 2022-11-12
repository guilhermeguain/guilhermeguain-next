import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Link, Stack, StackDivider } from '@chakra-ui/react';

import { LangSelector } from '../LangSelector';

export const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" py={4}>
      <Flex
        direction={['column', 'column', 'row']}
        w="100%"
        maxWidth={'7xl'}
        mx="auto"
        alignItems="center"
        gap={8}
        fontSize="sm"
      >
        <NextLink href="/" passHref>
          <Link display="flex">
            <Image
              src={'/images/logo.svg'}
              width="48px"
              height="48px"
              alt="Front-end Developer - Guilherme Guain"
              title="Front-end Developer - Guilherme Guain"
            />
          </Link>
        </NextLink>
        <Stack
          direction={['column', 'column', 'row']}
          divider={<StackDivider borderColor="gray.600" />}
          gap={2}
          lineHeight={1}
          textAlign="center"
          flex={1}
        >
          <Stack
            direction={['row', 'row']}
            divider={<StackDivider borderColor="gray.600" />}
            gap={2}
            lineHeight={1}
          >
            <Text>Guilherme Guain</Text>
            <Text>Front-end Developer</Text>
          </Stack>
          <Text>{`2011 - ${new Date().getFullYear()}`}</Text>
        </Stack>
        <Flex justifyContent={['center', 'center', 'flex-end']}>
          <Box>
            <LangSelector />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
