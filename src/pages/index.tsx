import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Box, Flex, Avatar, Heading, Image, Text, HStack } from '@chakra-ui/react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

import { Page } from '../components/Page';

import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { HardSkills } from '../components/HardSkills';
import { SoftSkills } from '../components/SoftSkills';
import { TechsTools } from '../components/TechsTools';
import { Languages } from '../components/Languages';

import { extra } from '../lib/extra';

const Home: NextPage = () => {
  const title = 'Guilherme Guain - Front-end Developer';
  const description = 'Guilherme Guain - Front-end Developer';

  return (
    <Page title={title} description={description}>
      <Hero />
      <Content py={8}>
        <Flex gap={8} py={8}>
          <Avatar name="Guilherme Guain" src="/images/guilherme-guain.jpg" size="2xl" />
          <Flex direction="column" gap={2} flex={1}>
            <Heading as="h3" fontSize="2xl" borderBottom="1px" borderColor="gray.200">
              Guilherme Emilio Guain Peixinho
            </Heading>

            <Heading fontSize="xl" fontWeight="medium" color="gray.600">
              Front-end Developer
            </Heading>
            <HStack fontSize="2xl" gap={2} mt={4}>
              <BsLinkedin />
              <BsGithub />
              <BsInstagram />
            </HStack>
          </Flex>
        </Flex>

        <Box>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Quisquam, quod. Quisquam, quod.
          </Text>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Quisquam, quod. Quisquam, quod.
          </Text>
        </Box>

        <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
          <HardSkills />
          <SoftSkills />
          <TechsTools />
          <Languages />
        </Flex>

        <Flex direction="column" gap={4}>
          <Heading as="h3" fontSize="2xl" borderBottom="1px" borderColor="gray.200">
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
