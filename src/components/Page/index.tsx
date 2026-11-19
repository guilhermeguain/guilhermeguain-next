import { ReactNode } from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import { Container } from './styles.css';

type Props = {
  title: string;
  children: ReactNode;
};

export const Page = ({ title, children }: Props) => {
  return (
    <>
      <Header title={title} />
      <main className={Container}>{children}</main>
      <Footer />
    </>
  );
};
