import { BiCalendarAlt } from 'react-icons/bi';

import { Title } from '@/styles/typography.css';

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
  const { experiences } = useExperiences();

  return (
    <section id="experience" className={Container}>
      <h2 className={Title}>Experience</h2>
      <ul className={List}>
        {experiences.map(({ id, label, role, period, summary, badges }) => (
          <li key={id} className={ListItem}>
            <div className={ListItemHeader}>
              <div className={ListItemHeaderInfo}>
                <div className={ListItemHeaderInfoGroup}>
                  <h3 className={ListItemRole}>{role}</h3>
                  <span className={ListItemPeriod}>
                    <BiCalendarAlt size={16} className={ListItemPeriodIcon} />
                    {period}
                  </span>
                </div>
                <h4 className={ListItemTitle}>{label}</h4>
              </div>
              <div className={ListItemHeaderBadges}>
                {badges.map(({ id, title, color, icon: Icon }) => (
                  <Icon key={id} color={color} title={title} />
                ))}
              </div>
            </div>
            <p className={ListItemSummary}>{summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
