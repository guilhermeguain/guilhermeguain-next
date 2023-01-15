import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';

import { When } from '@components/shared/When';
import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';

import { useHeader } from './hooks/useHeader';

import { HeaderProps } from './types';

export const Header = ({ title, logo = '/images/logo.svg' }: HeaderProps) => {
  const { menuItems, isMobile } = useHeader();

  return (
    <Box as="header">
      <Box
        bg="rgba(26,32,44,0.7)"
        position="fixed"
        h={16}
        top="0"
        left="0"
        right="0"
        zIndex="5"
      ></Box>
      <Flex
        w="100%"
        maxWidth={'7xl'}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        gap={8}
        py={2}
        px={4}
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="50"
      >
        <Box>
          <Link as={NextLink} href="/" passHref display="flex">
            <Image src={logo} width={48} height={48} alt={title} title={title} />
          </Link>
        </Box>
        <When value={isMobile}>
          <MobileMenu items={menuItems} />
        </When>
        <When value={!isMobile}>
          <DesktopMenu items={menuItems} />
        </When>
      </Flex>
    </Box>
  );
};
