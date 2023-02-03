import React from 'react';

import { useLanguages } from './hooks/useLanguages';
import {
  Container,
  Header,
  HeaderTitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemGroup,
  ListItemLabel,
  ListItemChartSvg,
  ListItemChartCircle,
  ListItemChartCircleInner,
} from './styles.css';

export const Languages = () => {
  const { t, languages } = useLanguages();

  return (
    <>
      <div className={Container}>
        <div className={Header}>
          <h3 className={HeaderTitle}>{t('about:languages.title')}</h3>
        </div>
        <div className={List}>
          {languages.map(({ id, proficiency }) => (
            <div key={id} className={ListItem}>
              <h4 className={ListItemTitle}>{t(`about:languages.${id}`)}</h4>
              {proficiency.map(({ id: proficiencyId, value }) => (
                <div key={proficiencyId} className={ListItemGroup}>
                  <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={value}
                    aria-labelledby={`progressbar-${id}-${proficiencyId}`}
                  >
                    <svg viewBox="0 0 100 100" className={ListItemChartSvg}>
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        strokeWidth="16"
                        className={ListItemChartCircle}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        strokeWidth="16"
                        strokeDashoffset="66"
                        strokeDasharray={`${value * 2.64} ${264 - value * 2.64}`}
                        className={ListItemChartCircleInner}
                      />
                    </svg>
                  </div>
                  <span id={`progressbar-${id}-${proficiencyId}`} className={ListItemLabel}>
                    {t(`about:languages.${proficiencyId}`)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
