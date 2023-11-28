import { Title } from '@/styles/typography.css';

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
  const { educations } = useEducation();

  return (
    <div id="education" className={Container}>
      <h2 className={Title}>Educação</h2>
      <ul className={List}>
        {educations.map(({ id, title, institution, period, location }) => (
          <li key={id} className={ListItem}>
            <div className={ListItemColumn}>
              <h3 className={ListItemTitle}>{title}</h3>
              <p className={ListItemInstitution}>{institution}</p>
            </div>
            <div className={ListItemColumn}>
              <span className={ListItemPeriod}>{period}</span>
              <span className={ListItemLocation}>{location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
