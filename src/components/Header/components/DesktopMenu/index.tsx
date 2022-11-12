import React from 'react';
import { useTranslation } from 'next-i18next';
import { HStack, Link, Flex } from '@chakra-ui/react';

import { MenuProps } from '../../types';

export const DesktopMenu = ({ items }: MenuProps) => {
  const { t } = useTranslation('menu');

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={16}>
      <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
        {items.map(({ id, href }) => (
          <Link key={id} href={href} color="gray.300" _hover={{ color: 'secondary.400' }}>
            {t(id)}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
