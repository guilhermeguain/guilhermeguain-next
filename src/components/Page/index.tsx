import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

import { Header } from '../Header';

type Props = {
  title: string;
  description: string;
  children: ReactNode | (() => void);
};

export const Page = ({ title, description, children }: Props) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <Header title={title} />
      {children}
    </>
  );
};
