import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import {
  Link,
  IconButton,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import TagManager from 'react-gtm-module';

import { LangSelector } from '../../../LangSelector';

import { MenuProps } from '../../types';

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

    onClose();
  }, []);

  return (
    <>
      <IconButton
        aria-label="Main menu"
        variant="outline"
        borderWidth={2}
        icon={<GiHamburgerMenu />}
        color="gray.300"
        borderColor="gray.300"
        onClick={onOpen}
        position="relative"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.300">
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody display="flex" flexDir="column" justifyContent="space-between" pb={8}>
            <Stack spacing={4}>
              {items.map(({ id, href }) => (
                <NextLink key={id} href={href} passHref scroll={false}>
                  <Link
                    color={asPath.includes(id) ? 'secondary.400' : 'gray.600'}
                    _hover={{ color: 'secondary.400' }}
                    data-id={id}
                    onClick={handleMenuClick}
                  >
                    {t(id)}
                  </Link>
                </NextLink>
              ))}
            </Stack>
            <LangSelector color="gray.600" fontSize="md" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
