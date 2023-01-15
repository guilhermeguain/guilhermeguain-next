import React from 'react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Link, Stack, StackDivider } from '@chakra-ui/react';

import { LangSelector } from '@components/LangSelector';

export const Footer = () => {
  const { t } = useTranslation(['common']);

  return (
    <Box as="footer" bg="gray.900" py={4}>
      <Flex
        direction={['column', 'column', 'row']}
        w="100%"
        maxWidth={'7xl'}
        mx="auto"
        alignItems="center"
        gap={8}
        fontSize="sm"
      >
        <Link as={NextLink} href="/" passHref display="flex">
          <Image
            src={'/images/logo.svg'}
            width={48}
            height={48}
            alt="Front-end Developer - Guilherme Guain"
            title="Front-end Developer - Guilherme Guain"
          />
        </Link>
        <Stack
          direction={['column', 'column', 'row']}
          divider={<StackDivider borderColor="gray.600" />}
          gap={2}
          lineHeight={1}
          textAlign="center"
          flex={1}
        >
          <Stack
            direction={['row', 'row']}
            divider={<StackDivider borderColor="gray.600" />}
            gap={2}
            lineHeight={1}
          >
            <Text>{t('common:name')}</Text>
            <Text>{t('common:role')}</Text>
          </Stack>
          <Text>{`2011 - ${new Date().getFullYear()}`}</Text>
        </Stack>
        <Flex justifyContent={['center', 'center', 'flex-end']}>
          <Box>
            <LangSelector />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
