import React from 'react';
import { HStack, Link } from '@chakra-ui/react';

import { texts } from '../../../../lib/texts';

export const DesktopMenu = () => {
  const { menu } = texts;

  return (
    <HStack fontSize={['sm', 'md', 'lg']} gap={[2, 4]}>
      {menu.items.map(({ href, label }) => (
        <Link key={href} href={href} color="gray.300" _hover={{ color: 'secondary.400' }}>
          {label}
        </Link>
      ))}
    </HStack>
  );
};
