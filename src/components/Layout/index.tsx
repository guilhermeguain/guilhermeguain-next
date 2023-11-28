'use client';

import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Container } from './styles.css';
import { AppContext } from '@/contexts/App';

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode | (() => void);
};

export const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <AppContext>
      <NextSeo title={title} description={description} />
      <Header title={title} />
      <main className={Container}>
        <>{children}</>
      </main>
      <Footer />
    </AppContext>
  );
};
