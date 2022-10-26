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
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <Box position="fixed" top="0" right="0" left="0">
      <Flex
        as="header"
        w="100%"
        maxWidth={'7xl'}
        mx="auto"
        justifyContent="space-between"
        gap={8}
        p={4}
      >
        <NextLink href="/" passHref>
          <Link>
            <Image src={'/images/logo.svg'} width="48px" height="48px" alt={title} title={title} />
          </Link>
        </NextLink>
        <HStack fontSize="lg" gap={4}>
          {items.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link color="gray.300">{label}</Link>
            </NextLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};
