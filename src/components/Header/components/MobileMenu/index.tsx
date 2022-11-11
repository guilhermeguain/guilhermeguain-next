import React from 'react';
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

import { texts } from '../../../../lib/texts';

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { menu } = texts;

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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="gray.300">
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Stack spacing={4}>
              {menu.items.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  color="gray.600"
                  _hover={{ color: 'secondary.400' }}
                  onClick={onClose}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
