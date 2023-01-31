import React from 'react';
import { Image } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { Content, List, ListItem, ListItemIcon, ListItemText } from '@styles/layout.css';
import { Title } from '@styles/typography.css';

import { useDataDrivenSeo } from './hooks/useDataDrivenSeo';
import { Columns, ColumnsItem, ColumnHeader, ColumnTitle } from './styles.css';

export const DataDrivenSeo = () => {
  const { t, dataDrivenSeo } = useDataDrivenSeo();

  return (
    <section id="data-driven-seo" className={Content}>
      <h2 className={Title}>{t('data-driven-seo:title')}</h2>
      <div className={Columns}>
        {dataDrivenSeo.map(({ id, icon, list }) => (
          <div key={id} className={ColumnsItem}>
            <div className={ColumnHeader}>
              <Image as={icon} title={id} alt={id} />
              <h3 className={ColumnTitle}>{t(`data-driven-seo:${id}.title`)}</h3>
            </div>
            <ul className={List}>
              {list.map((listItem) => (
                <li key={listItem} className={ListItem}>
                  <FaChevronRight className={ListItemIcon} size={12} />
                  <p className={ListItemText}>{t(`data-driven-seo:${id}.${listItem}`)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
