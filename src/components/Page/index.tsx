import { ReactNode } from 'react';
import Head from 'next/head';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { Container } from './styles.css';

type Props = {
  title: string;
  description: string;
  children: ReactNode | (() => void);
};

export const Page = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header title={title} />
      <main className={Container}>
        <>{children}</>
      </main>
      <Footer />
    </>
  );
};
