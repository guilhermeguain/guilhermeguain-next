import React from 'react';
import type { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Flex } from '@chakra-ui/react';

import { Page } from '../components/Page';

import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { About } from '../components/About';
import { DataDrivenSeo } from '../components/DataDrivenSeo';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Events } from '../components/Events';
import { Education } from '../components/Education';

const Home = (_props: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation(['meta']);

  return (
    <Page title={t('meta:title')} description={t('meta:desc')}>
      <Hero />
      <Content>
        <About />
        <DataDrivenSeo />

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', [
        'common',
        'meta',
        'menu',
        'hero',
        'about',
        'hard-skills',
        'soft-skills',
        'data-driven-seo',
        'experience',
        'projects',
        'education',
        'events',
      ])),
    },
  };
};

export default Home;
