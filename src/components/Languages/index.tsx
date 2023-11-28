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
  const { languages } = useLanguages();

  return (
    <div className={Container}>
      <div className={Header}>
        <h3 className={HeaderTitle}>Idiomas</h3>
      </div>
      <div className={List}>
        {languages.map(({ id, label, proficiency }) => (
          <div key={id} className={ListItem}>
            <h4 className={ListItemTitle}>{label}</h4>
            {proficiency.map(({ id: proficiencyId, value, label }) => (
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
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
