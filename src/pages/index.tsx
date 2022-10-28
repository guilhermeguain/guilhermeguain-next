import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Flex, Avatar, Heading, Image, Text, HStack } from '@chakra-ui/react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

import { Page } from '../components/Page';

import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { HardSkills } from '../components/HardSkills';
import { SoftSkills } from '../components/SoftSkills';
import { DataDrivenSeo } from '../components/DataDrivenSeo';
import { TechsTools } from '../components/TechsTools';
import { Languages } from '../components/Languages';
import { Experiences } from '../components/Experiences';

import { extra } from '../lib/extra';

const Home: NextPage = () => {
  const title = 'Guilherme Guain - Front-end Developer';
  const description = 'Guilherme Guain - Front-end Developer';

  return (
    <Page title={title} description={description}>
      <Hero />
      <Content py={12}>
        <Flex gap={8} alignItems="center">
          <Avatar name="Guilherme Guain" src="/images/guilherme-guain.jpg" size="2xl" />
          <Flex direction="column" gap={4} flex={1}>
            <Heading as="h3" fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
              Guilherme Emilio Guain Peixinho
            </Heading>

            <Heading fontSize="lg" fontWeight="medium" color="gray.300">
              Front-end Developer
            </Heading>
            <HStack fontSize="2xl" gap={2} mt={4}>
              <Image
                as={BsLinkedin}
                alt="LinkedIn - Guilherme Guain"
                title="LinkedIn - Guilherme Guain"
                color="gray.200"
              />
              <Image
                as={BsGithub}
                alt="GitHub - Guilherme Guain"
                title="GitHub - Guilherme Guain"
                color="gray.200"
              />
              <Image
                as={BsInstagram}
                alt="Instagram - Guilherme Guain"
                title="Instagram - Guilherme Guain"
                color="gray.200"
              />
            </HStack>
          </Flex>
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
          <Flex direction="column" gap={4}>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam,
              quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </Text>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam,
              quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </Text>
          </Flex>
          <HardSkills />
          <SoftSkills />
        </Flex>

        <Flex direction={['column', 'column', 'column', 'row']} gap={8} py={12}>
          <Flex direction="column" gap={4}>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam,
              quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </Text>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam,
              quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod.
            </Text>
          </Flex>
          <TechsTools />
          <Languages />
        </Flex>

        <Flex direction="column">
          <DataDrivenSeo />
        </Flex>

        <Flex direction="column">
          <Experiences />
        </Flex>

        <Flex direction="column" gap={4}>
          <Heading as="h3" fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
            Extra
          </Heading>
          <Flex direction="column" gap={4}>
            {extra.map(({ slug, label, icon }) => (
              <Flex key={slug} gap={2} alignItems="center">
                <Image as={icon} title={label} alt={label} />
                <Text color="gray.600" fontWeight="medium">
                  {label}
                </Text>
              </Flex>
            ))}
          </Flex>
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
