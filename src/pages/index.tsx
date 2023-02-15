import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Row } from '@components/shared/Row';
import { Page } from '@components/Page';

import { Hero } from '@components/Hero';
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
      <Hero />
      <About />
      <DataDrivenSeo />
      <Experiences />
      <Projects />
      <Row>
        <Education />
        <Events />
      </Row>
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
