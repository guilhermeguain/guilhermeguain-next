import React from 'react';
import { Container } from './styles.css';

export const Button = () => (
  <button
    className={Container({
      color: 'accent',
    })}
  >
    Label
  </button>
);
