import { Title } from '@/styles/typography.css';

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
  const { events } = useEvents();

  return (
    <div id="events" className={Container}>
      <h2 className={Title}>Eventos</h2>
      <ul className={List}>
        {events.map(({ id, title, host, date, location }) => (
          <li key={id} className={ListItem}>
            <div className={ListItemColumn}>
              <h3 className={ListItemTitle}>{title}</h3>
              <p className={ListItemInstitution}>{host}</p>
            </div>
            <div className={ListItemColumn}>
              <span className={ListItemPeriod}>{date}</span>
              <span className={ListItemLocation}>{location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
