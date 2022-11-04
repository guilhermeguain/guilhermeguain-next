import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Flex, HStack, Link } from '@chakra-ui/react';

type Props = {
  title: string;
  logo?: string;
};

export const Header = ({ title, logo = '/images/logo.svg' }: Props) => {
  const items = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <Box
        bg="rgba(26,32,44,0.7)"
        position="fixed"
        h={[12, 16]}
        top="0"
        left="0"
        right="0"
        zIndex="5"
      ></Box>
      <Box position="fixed" top="0" right="0" left="0" zIndex="9999">
        <Flex
          as="header"
          w="100%"
          maxWidth={'7xl'}
          mx="auto"
          justifyContent="space-between"
          gap={8}
          py={2}
          px={4}
        >
          <Box maxW={[8, 'none']}>
            <NextLink href="/" passHref>
              <Link display="flex">
                <Image src={logo} width={48} height={48} alt={title} title={title} />
              </Link>
            </NextLink>
          </Box>
          <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
            {items.map(({ href, label }) => (
              <Link key={href} href={href} color="gray.300" _hover={{ color: 'secondary.400' }}>
                {label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};
