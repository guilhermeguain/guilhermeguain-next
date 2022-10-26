import React from 'react';
import { Box, Flex, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { SiReact, SiTypescript, SiEslint } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const Hero = () => {
  return (
    <Box as="main" bg="url('/images/bg-hero.jpg')">
      <Flex
        w="100%"
        maxWidth={'7xl'}
        mx="auto"
        h="calc(100vh)"
        direction="column"
        justifyContent="center"
        alignItems="center"
        px={4}
        textAlign="center"
        gap={2}
      >
        <Heading as="h2" size="lg" color="secondary.500">
          Guilherme Guain
        </Heading>
        <Heading as="h1" size="2xl" color="gray.300">
          Front-end Developer
        </Heading>
        <Text color="gray.400" my={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.
          Quisquam, quod.
        </Text>
        <HStack
          bg="primary.400"
          gap={4}
          mt={6}
          py={2}
          px={6}
          borderRadius="3xl"
          fontSize="x-large"
          color="white"
        >
          <Image as={SiReact} title="React.js" alt="React.js" />
          <Image as={SiTypescript} title="TypeScript" alt="TypeScript" />
          <Image as={TbBrandNextjs} title="Next.js" alt="Next.js" />
          <Image as={SiEslint} title="ESLint" alt="ESLint" />
        </HStack>
      </Flex>
    </Box>
  );
};
