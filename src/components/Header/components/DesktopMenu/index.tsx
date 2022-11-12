import React from 'react';
import NextLink from 'next/link';
import { HStack, Link, Text, Button } from '@chakra-ui/react';
import i18next from 'i18next';

import { useApp } from '../../../../contexts/App';

export const DesktopMenu = () => {
  const { content } = useApp();
  const { menu } = content;

  return (
    <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
      <Text>{i18next.language}</Text>
      {menu.items.map(({ href, label }) => (
        <Link key={href} href={href} color="gray.300" _hover={{ color: 'secondary.400' }}>
          {label}
        </Link>
      ))}
      <NextLink href="/" locale="en-US" passHref>
        <Link color="white">en-US</Link>
      </NextLink>
      <NextLink href="/" locale="pt-BR" passHref>
        <Link color="white">pt-BR</Link>
      </NextLink>
      <Button
        onClick={() => {
          i18next.changeLanguage('en-US');
        }}
      >
        en
      </Button>
      <Button
        onClick={() => {
          i18next.changeLanguage('pt-BR');
        }}
      >
        pt
      </Button>
    </HStack>
  );
};
