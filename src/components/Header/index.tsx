import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';

import { useWindowSize } from '../../hooks/useWindowSize';

import { DesktopMenu } from './components/DesktopMenu';

type Props = {
  title: string;
  logo?: string;
};

export const Header = ({ title, logo = '/images/logo.svg' }: Props) => {
  const { width } = useWindowSize();

  const MOBILE_BREAKPOINT = 768;

  const isMobile = width < MOBILE_BREAKPOINT;

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
      <Box position="fixed" top="0" right="0" left="0" zIndex="50">
        <Flex
          as="header"
          w="100%"
          maxWidth={'7xl'}
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
          gap={8}
          py={2}
          px={4}
        >
          <Box>
            <NextLink href="/" passHref>
              <Link display="flex">
                <Image src={logo} width={48} height={48} alt={title} title={title} />
              </Link>
            </NextLink>
          </Box>
          <DesktopMenu />
        </Flex>
      </Box>
    </>
  );
};
