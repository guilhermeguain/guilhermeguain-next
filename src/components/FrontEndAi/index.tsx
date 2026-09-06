import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { List, ListItem } from '@styles/layout.css';
import { Title } from '@styles/typography.css';

import { useFrontEndAi } from './hooks/useFrontEndAi';
import {
  Container,
  Columns,
  ColumnsItem,
  ColumnHeader,
  ColumnIcon,
  ColumnTitle,
  CustomListItemIcon,
  CustomListItemText,
} from './styles.css';

export const FrontEndAi = () => {
  const { t, columns } = useFrontEndAi();

  return (
    <section id="front-end-ai" className={Container}>
      <h2 className={Title}>{t('front-end-ai:title')}</h2>
      <div className={Columns}>
        {columns.map(({ id, icon: Icon, iconColor, list }) => (
          <div key={id} className={ColumnsItem}>
            <div className={ColumnHeader}>
              <span className={ColumnIcon}>
                <Icon color={iconColor} />
              </span>
              <h3 className={ColumnTitle}>{t(`front-end-ai:${id}.title`)}</h3>
            </div>
            <ul className={List}>
              {list.map((listItem) => (
                <li key={listItem} className={ListItem}>
                  <FaChevronRight className={CustomListItemIcon} size={12} />
                  <p className={CustomListItemText}>{t(`front-end-ai:${id}.${listItem}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
