import React from 'react';

import { useTechsTools } from './hooks/useTechsTools';
import {
  Container,
  Header,
  HeaderTitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemBadges,
} from './styles.css';

export const TechsTools = () => {
  const { t, groups } = useTechsTools();

  return (
    <div className={Container}>
      <div className={Header}>
        <h3 className={HeaderTitle}>{t('about:techs-tools.title')}</h3>
      </div>
      <div className={List}>
        {groups.map(({ id, title, items }) => (
          <div key={id} className={ListItem}>
            <h4 className={ListItemTitle}>{title}</h4>
            <div className={ListItemBadges}>
              {items.map(({ id, title, icon: Icon, color }) => (
                <Icon key={id} title={title} color={color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
