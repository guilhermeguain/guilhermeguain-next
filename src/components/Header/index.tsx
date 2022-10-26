import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, HStack, Link, Image } from '@chakra-ui/react';

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
        <Image src={logo} h={10} alt={title} title={title} />
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
