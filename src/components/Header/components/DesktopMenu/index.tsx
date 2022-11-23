import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import { HStack, Link, Flex } from '@chakra-ui/react';

import { LangSelector } from '../../../LangSelector';

import { MenuProps } from '../../types';

export const DesktopMenu = ({ items }: MenuProps) => {
  const { t } = useTranslation('menu');

  const { asPath } = useRouter();

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={16}>
      <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
        {items.map(({ id, href }) => (
          <NextLink key={id} href={href} passHref scroll={false}>
            <Link
              color={asPath.includes(id) ? 'secondary.400' : 'gray.300'}
              _hover={{ color: 'secondary.400' }}
            >
              {t(id)}
            </Link>
          </NextLink>
        ))}
      </HStack>
      <LangSelector />
    </Flex>
  );
};
