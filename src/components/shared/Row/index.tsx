import React, { ReactNode } from 'react';

import { CustomContent } from './styles.css';

type Props = {
  children: ReactNode | (() => void);
};

export const Row = ({ children }: Props) => {
  return (
    <section className={CustomContent}>
      <>{children}</>
    </section>
  );
};
