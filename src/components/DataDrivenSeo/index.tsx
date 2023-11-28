import { FaChevronRight } from 'react-icons/fa';

import { List, ListItem } from '@/styles/layout.css';
import { Title } from '@/styles/typography.css';

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
  const { dataDrivenSeo } = useDataDrivenSeo();

  return (
    <section id="data-driven-seo" className={Container}>
      <h2 className={Title}>Orientado por dados SEO</h2>
      <div className={Columns}>
        {dataDrivenSeo.map(({ id, label, icon: Icon, list }) => (
          <div key={id} className={ColumnsItem}>
            <div className={ColumnHeader}>
              <Icon />
              <h3 className={ColumnTitle}>{label}</h3>
            </div>
            <ul className={List}>
              {list.map((listItem) => (
                <li key={listItem} className={ListItem}>
                  <FaChevronRight className={CustomListItemIcon} size={12} />
                  <p className={CustomListItemText}>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
