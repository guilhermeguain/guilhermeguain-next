import React from 'react';
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

import { MenuProps } from '../../types';

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation('menu');

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
          <DrawerBody>
            <Stack spacing={4}>
              {items.map(({ id, href }) => (
                <Link
                  key={id}
                  href={href}
                  color="gray.600"
                  _hover={{ color: 'secondary.400' }}
                  onClick={onClose}
                >
                  {t(id)}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
