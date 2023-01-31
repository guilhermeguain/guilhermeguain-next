import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Flex } from '@chakra-ui/react';

import { Page } from '@components/Page';

import { Hero } from '@components/Hero';
import { Content } from '@components/Content';
import { About } from '@components/About';
import { DataDrivenSeo } from '@components/DataDrivenSeo';
import { Experiences } from '@components/Experiences';
import { Projects } from '@components/Projects';
import { Events } from '@components/Events';
import { Education } from '@components/Education';

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['meta']);

  return (
    <Page title={t('meta:title')} description={t('meta:desc')}>
      <Box as="main">
        <Hero />
        <About />
        <DataDrivenSeo />
        <Experiences />

        <Content>
          <Flex id="projects" pt={[16, 20]} direction="column">
            <Projects />
          </Flex>

          <Flex id="education" py={[16, 20]} direction={['column', 'column', 'row']} gap={8}>
            <Education />
            <Events />
          </Flex>
        </Content>
      </Box>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
