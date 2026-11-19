'use client';

import React from 'react';

import { About } from '@components/About';
import { DataDrivenSeo } from '@components/DataDrivenSeo';
import { Education } from '@components/Education';
import { Events } from '@components/Events';
import { Experiences } from '@components/Experiences';
import { FrontEndAi } from '@components/FrontEndAi';
import { Hero } from '@components/Hero';
import { Page } from '@components/Page';
import { Projects } from '@components/Projects';
import { Row } from '@components/shared/Row';

type Props = {
  title: string;
};

export const Home = ({ title }: Props) => {
  return (
    <Page title={title}>
      <Hero />
      <About />
      <FrontEndAi />
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
