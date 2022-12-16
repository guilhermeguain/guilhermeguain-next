import React from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const Hero = () => {
  const { t } = useTranslation(['common', 'hero']);

  return (
    <Box as="main" bg="url('/images/bg-hero.jpg')" position="relative" zIndex="10">
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
        <Heading as="h1" size={['lg', '2xl']} color="gray.300" order={2}>
          {t('common:role')}
        </Heading>
        <Heading as="h2" fontSize={['md', '3xl']} color="gray.500" order={1}>
          {t('common:name')}
        </Heading>
        <Text as="span" color="gray.400" fontSize={['md', 'xl']} my={2} order={3}>
          {t('hero:desc')}
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
          order={4}
        >
          <Image as={SiReact} title="React.js" alt="React.js" />
          <Image as={SiTypescript} title="TypeScript" alt="TypeScript" />
          <Image as={TbBrandNextjs} title="Next.js" alt="Next.js" />
        </HStack>
      </Flex>
    </Box>
  );
};
