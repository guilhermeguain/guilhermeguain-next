import React from 'react';
import Image from 'next/image';

import { Title } from '@styles/typography.css';

import { useProjects } from './hooks/useProjects';

import { Container, List, ListItem } from './styles.css';

export const Projects = () => {
  const { t, projects, handleProjectClick } = useProjects();

  return (
    <section id="projects" className={Container}>
      <h2 className={Title}>{t('projects:title')}</h2>
      <ul className={List}>
        {projects.map(({ id, link }) => (
          <li key={id} className={ListItem}>
            <a
              href={link}
              target="_blank"
              rel="external nofollow noreferrer noopener"
              data-id={id}
              onClick={handleProjectClick}
            >
              <Image
                src={`/images/projects/${id}.png`}
                alt={t(`projects:${id}`)}
                title={t(`projects:${id}`) || id}
                placeholder="blur"
                blurDataURL={`/images/projects/${id}.png`}
                width={200}
                height={60}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
