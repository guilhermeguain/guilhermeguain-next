import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { List, ListItem } from '@styles/layout.css';
import { Title } from '@styles/typography.css';

import { useDataDrivenSeo } from './hooks/useDataDrivenSeo';
import {
  Container,
  Columns,
  ColumnsItem,
  ColumnHeader,
  ColumnTitle,
  CustomListItemIcon,
  CustomListItemText,
} from './styles.css';

export const DataDrivenSeo = () => {
  const { t, dataDrivenSeo } = useDataDrivenSeo();

  return (
    <section id="data-driven-seo" className={Container}>
      <h2 className={Title}>{t('data-driven-seo:title')}</h2>
      <div className={Columns}>
        {dataDrivenSeo.map(({ id, icon: Icon, list }) => (
          <div key={id} className={ColumnsItem}>
            <div className={ColumnHeader}>
              <Icon />
              <h3 className={ColumnTitle}>{t(`data-driven-seo:${id}.title`)}</h3>
            </div>
            <ul className={List}>
              {list.map((listItem) => (
                <li key={listItem} className={ListItem}>
                  <FaChevronRight className={CustomListItemIcon} size={12} />
                  <p className={CustomListItemText}>{t(`data-driven-seo:${id}.${listItem}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
