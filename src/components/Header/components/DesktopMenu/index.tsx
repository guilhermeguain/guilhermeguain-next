import React, { useMemo } from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import { HStack, Link } from '@chakra-ui/react';

export const DesktopMenu = () => {
  const { t } = useTranslation('menu');

  const menuItems = useMemo(
    () => [
      {
        id: 'about',
        href: '#about',
      },
      {
        id: 'experience',
        href: '#experience',
      },
      {
        id: 'projects',
        href: '#projects',
      },
    ],
    [],
  );

  return (
    <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
      {menuItems.map(({ id, href }) => (
        <Link key={id} href={href} color="gray.300" _hover={{ color: 'secondary.400' }}>
          {t(id)}
        </Link>
      ))}
      <NextLink href="/" locale="en-US" passHref>
        <Link color="gray.300">en-US</Link>
      </NextLink>
      <NextLink href="/" locale="pt-BR" passHref>
        <Link color="gray.300">pt-BR</Link>
      </NextLink>
    </HStack>
  );
};
