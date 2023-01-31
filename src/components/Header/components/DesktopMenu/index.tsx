import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import { HStack, Link, Flex } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';

import { LangSelector } from '@components/LangSelector';

export const DesktopMenu = ({ items }: MenuProps) => {
  const { t } = useTranslation('menu');

  const { asPath } = useRouter();

  const handleMenuClick = useCallback((event: React.MouseEvent) => {
    const id = event.currentTarget.getAttribute('data-id');
    const url = event.currentTarget.getAttribute('href');

    TagManager.dataLayer({
      dataLayer: {
        event: 'menuClick',
        menuId: id,
        menuUrl: url,
      },
    });
  }, []);

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={16}>
      <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
        {items.map(({ id, href }) => (
          <Link
            as={NextLink}
            key={id}
            href={href}
            passHref
            scroll={false}
            color={asPath.includes(id) ? 'secondary.400' : 'gray.300'}
            _hover={{ color: 'secondary.400' }}
            data-id={id}
            onClick={handleMenuClick}
          >
            {t(id)}
          </Link>
        ))}
      </HStack>
      <LangSelector />
    </Flex>
  );
};
