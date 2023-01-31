import React from 'react';

import { useHardSkills } from './hooks/useHardSkills';
import {
  Container,
  Header,
  HeaderTitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemProgress,
  ListItemProgressInner,
} from './styles.css';

export const HardSkills = () => {
  const { t, hardSkills } = useHardSkills();

  return (
    <div className={Container}>
      <div className={Header}>
        <h3 className={HeaderTitle}>{t('about:hard-skills')}</h3>
      </div>
      <div className={List}>
        {hardSkills.map(({ id, value }) => (
          <div key={id} className={ListItem}>
            <h4 id={`progressbar-${id}`} className={ListItemTitle}>
              {t(`hard-skills:${id}`)}
            </h4>
            <div className={ListItemProgress}>
              <div
                role="progressbar"
                aria-labelledby={`progressbar-${id}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value}
                className={ListItemProgressInner}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
