import React from 'react';

import { Title } from '@styles/typography.css';

import { useEducation } from './hooks/useEducation';
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

export const Education = () => {
  const { t, educations } = useEducation();

  return (
    <div id="education" className={Container}>
      <h2 className={Title}>{t('education:title')}</h2>
      <ul className={List}>
        {educations.map((education) => (
          <li key={education} className={ListItem}>
            <div className={ListItemColumn}>
              <h3 className={ListItemTitle}>{t(`education:${education}.title`)}</h3>
              <p className={ListItemInstitution}>{t(`education:${education}.institution`)}</p>
            </div>
            <div className={ListItemColumn}>
              <span className={ListItemPeriod}>{t(`education:${education}.period`)}</span>
              <span className={ListItemLocation}>{t(`education:${education}.location`)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
