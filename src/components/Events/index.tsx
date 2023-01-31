import React from 'react';

import { Title } from '@styles/typography.css';

import { useEvents } from './hooks/useEvents';
import {
  Container,
  List,
  ListItem,
  ListItemColumn,
  ListItemTitle,
  ListItemInstitution,
  ListItemPeriod,
  ListItemLocation,
} from './styles.css';

export const Events = () => {
  const { t, events } = useEvents();

  return (
    <div id="events" className={Container}>
      <h2 className={Title}>{t('events:title')}</h2>
      <ul className={List}>
        {events.map((event) => (
          <li key={event} className={ListItem}>
            <div className={ListItemColumn}>
              <h3 className={ListItemTitle}>{t(`events:${event}.title`)}</h3>
              <p className={ListItemInstitution}>{t(`events:${event}.host`)}</p>
            </div>
            <div className={ListItemColumn}>
              <span className={ListItemPeriod}>{t(`events:${event}.date`)}</span>
              <span className={ListItemLocation}>{t(`events:${event}.location`)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
