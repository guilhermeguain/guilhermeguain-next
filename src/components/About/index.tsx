import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Image,
  Highlight,
  Text,
  HStack,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { HardSkills } from '../HardSkills';
import { SoftSkills } from '../SoftSkills';
import { TechsTools } from '../TechsTools';
import { Languages } from '../Languages';

import { useAbout } from './hooks/useAbout';

export const About = () => {
  const { t, contacts, paragraphs, knowledges, handleLinkClick } = useAbout();

  return (
    <Box id="about">
      <Flex pt={[16, 20]} pb={12} direction={['column', 'row']} gap={8} alignItems="center">
        <Avatar name="Guilherme Guain" src="/images/guilherme-guain.jpg" size="2xl" />
        <Flex direction="column" gap={4} w="100%" textAlign={['center', 'left']}>
          <Text
            as="span"
            color="secondary.400"
            fontSize="2xl"
            borderBottom="1px"
            pb={2}
            borderColor="gray.200"
          >
            {t('about:name')}
          </Text>
          <Heading fontSize="lg" fontWeight="medium" color="gray.300">
            {t('common:role')}
          </Heading>
          <HStack fontSize="2xl" gap={2} mt={2} justifyContent={['center', 'flex-start']}>
            {contacts.map(({ id, icon, url }) => (
              <Link key={id} href={url} target="_blank" data-id={id} onClick={handleLinkClick}>
                <Image as={icon} alt={t(`about:${id}`)} title={t(`about:${id}`)} color="gray.200" />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Flex>
      <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
        <Flex direction="column">
          <Flex direction="column" gap={8}>
            {paragraphs.map(({ id, highlights }) => (
              <Text key={id} textAlign="justify">
                <Highlight
                  query={highlights.map((highlight) => t(`about:highlights.${highlight}`))}
                  styles={{ fontWeight: 'semibold', color: 'gray.300' }}
                >
                  {t(`about:paragraphs.${id}`)}
                </Highlight>
              </Text>
            ))}
          </Flex>
          <List spacing={4} textAlign="justify" mt={2}>
            {knowledges.map((knowledges) => (
              <ListItem key={knowledges} display="flex" alignItems="baseline" lineHeight="tall">
                <ListIcon as={FaChevronRight} color="secondary.400" fontSize="xs" />
                <Text fontSize="sm">
                  <Text as="span" fontWeight="medium" color="secondary.400">
                    {t(`about:knowledges.${knowledges}.title`)}:
                  </Text>{' '}
                  {t(`about:knowledges.${knowledges}.summary`)}
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Flex direction="column" gap={8}>
          <Flex
            direction={['column', 'row']}
            wrap={['wrap', 'wrap', 'nowrap']}
            alignItems={['center', 'flex-start']}
            gap={8}
          >
            <HardSkills />
            <SoftSkills />
          </Flex>
          <Flex
            direction={['column', 'row']}
            wrap={['wrap', 'wrap', 'nowrap']}
            alignItems={['center', 'flex-start']}
            gap={8}
          >
            <TechsTools />
            <Languages />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
