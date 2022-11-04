import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import {
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
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

import { Page } from '../components/Page';

import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { HardSkills } from '../components/HardSkills';
import { SoftSkills } from '../components/SoftSkills';
import { DataDrivenSeo } from '../components/DataDrivenSeo';
import { TechsTools } from '../components/TechsTools';
import { Languages } from '../components/Languages';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Events } from '../components/Events';
import { Education } from '../components/Education';

import { texts } from '../lib/texts';

const Home: NextPage = () => {
  const { meta, about } = texts;

  return (
    <Page title={meta.title} description={meta.desc}>
      <Hero />
      <Content px={4}>
        <Flex
          id="about"
          pt={[16, 20]}
          pb={12}
          direction={['column', 'row']}
          gap={8}
          alignItems="center"
        >
          <Avatar name="Guilherme Guain" src="/images/guilherme-guain.jpg" size="2xl" />
          <Flex direction="column" gap={4} w="100%" textAlign={['center', 'left']}>
            <Heading as="h3" fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
              {about.name}
            </Heading>
            <Heading fontSize="lg" fontWeight="medium" color="gray.300">
              {about.role}
            </Heading>
            <HStack fontSize="2xl" gap={2} mt={2} justifyContent={['center', 'flex-start']}>
              <Link href="https://www.linkedin.com/in/guilhermeguain/" target="_blank">
                <Image
                  as={BsLinkedin}
                  alt="LinkedIn - Guilherme Guain"
                  title="LinkedIn - Guilherme Guain"
                  color="gray.200"
                />
              </Link>
              <Link href="https://github.com/guilhermeguain" target="_blank">
                <Image
                  as={BsGithub}
                  alt="GitHub - Guilherme Guain"
                  title="GitHub - Guilherme Guain"
                  color="gray.200"
                />
              </Link>
              <Link href="mailto:guilherme.guain@gmail.com" target="_blank">
                <Image
                  as={GoMail}
                  alt="E-mail - Guilherme Guain"
                  title="E-mail - Guilherme Guain"
                  color="gray.200"
                />
              </Link>
            </HStack>
          </Flex>
        </Flex>
        <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
          <Flex direction="column">
            <Flex direction="column" gap={8}>
              {about.paragraphs.map(({ highlights, text }, index) => (
                <Text key={index} textAlign="justify">
                  <Highlight
                    query={highlights}
                    styles={{ fontWeight: 'semibold', color: 'gray.300' }}
                  >
                    {text}
                  </Highlight>
                </Text>
              ))}
            </Flex>
            <List spacing={4} textAlign="justify" mt={2}>
              {about.knowledges.map(({ area, summary }) => (
                <ListItem key={area} display="flex" alignItems="baseline" lineHeight="tall">
                  <ListIcon as={FaChevronRight} color="secondary.400" fontSize="xs" />
                  <Text fontSize="sm">
                    <Text as="span" fontWeight="medium" color="secondary.400">
                      {area}:
                    </Text>{' '}
                    {summary}
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
        <Flex direction="column">
          <DataDrivenSeo />
        </Flex>
        <Flex id="experience" pt={[16, 20]} direction="column">
          <Experiences />
        </Flex>
        <Flex id="projects" pt={[16, 20]} direction="column">
          <Projects />
        </Flex>
        <Flex py={[16, 20]} direction={['column', 'column', 'row']} gap={8}>
          <Education />
          <Events />
        </Flex>
      </Content>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
