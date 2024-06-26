import React from 'react';
import { BiCalendarAlt } from 'react-icons/bi';

import { Title } from '@styles/typography.css';

import { useExperiences } from './hooks/useExperiences';
import {
  Container,
  List,
  ListItem,
  ListItemHeader,
  ListItemHeaderInfo,
  ListItemHeaderInfoGroup,
  ListItemHeaderBadges,
  ListItemTitle,
  ListItemRole,
  ListItemPeriod,
  ListItemPeriodIcon,
  ListItemSummary,
} from './styles.css';

export const Experiences = () => {
  const { t, experiences } = useExperiences();

  return (
    <section id="experience" className={Container}>
      <h2 className={Title}>{t('experience:title')}</h2>
      <ul className={List}>
        {experiences.map(({ id, badges }) => (
          <li key={id} className={ListItem}>
            <div className={ListItemHeader}>
              <div className={ListItemHeaderInfo}>
                <div className={ListItemHeaderInfoGroup}>
                  <h3 className={ListItemRole}>{t(`experience:${id}.role`)}</h3>
                  <span className={ListItemPeriod}>
                    <BiCalendarAlt size={16} className={ListItemPeriodIcon} />
                    {t(`experience:${id}.period`)}
                  </span>
                </div>
                <h4 className={ListItemTitle}>{t(`experience:${id}.company`)}</h4>
              </div>
              <div className={ListItemHeaderBadges}>
                {badges.map(({ id, title, color, icon: Icon }) => (
                  <Icon key={id} color={color} title={title} />
                ))}
              </div>
            </div>
            <p className={ListItemSummary}>{t(`experience:${id}.summary`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
