import { Row } from '@/components/shared/Row';
import { Layout } from '@/components/Layout';

import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { DataDrivenSeo } from '@/components/DataDrivenSeo';
import { Experiences } from '@/components/Experiences';
import { Projects } from '@/components/Projects';
import { Events } from '@/components/Events';
import { Education } from '@/components/Education';

export default function Home() {
  return (
    <Layout title={'Title'} description={'Description'}>
      <Hero />
      <About />
      <DataDrivenSeo />
      <Experiences />
      <Projects />
      <Row>
        <Education />
        <Events />
      </Row>
    </Layout>
  );
}
