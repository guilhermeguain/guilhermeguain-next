import React from 'react';
import NextImage from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

import { Highlight } from '@utils/highlight';

import { Content } from '@styles/layout.css';

import { HardSkills } from '@components/HardSkills';
import { SoftSkills } from '@components/SoftSkills';
import { TechsTools } from '@components/TechsTools';
import { Languages } from '@components/Languages';

import { useAbout } from './hooks/useAbout';
import {
  Intro,
  Avatar,
  IntroContent,
  Name,
  Role,
  Contacts,
  ContactsItem,
  ContactsItemSvg,
  Main,
  Column,
  Text,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemPrefix,
  Boxes,
  BoxesGroup,
} from './styles.css';

export const About = () => {
  const { t, contacts, paragraphs, knowledges, handleLinkClick } = useAbout();

  return (
    <>
      <section id="about" className={Content}>
        <div className={Intro}>
          <NextImage
            src="/images/guilherme-guain.jpg"
            alt="Guilherme Guain"
            title="Guilherme Guain"
            width={128}
            height={128}
            className={Avatar}
          />
          <div className={IntroContent}>
            <h3 className={Name}>{t('about:name')}</h3>
            <h2 className={Role}>{t('common:role')}</h2>
            <ul className={Contacts}>
              {contacts.map(({ id, icon: Icon, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  data-id={id}
                  onClick={handleLinkClick}
                  rel="noreferrer"
                  className={ContactsItem}
                >
                  <Icon title={t(`about:${id}`) || id} size={24} className={ContactsItemSvg} />
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className={Main}>
          <div className={Column}>
            {paragraphs.map(({ id, highlights }) => (
              <p key={id} className={Text}>
                <Highlight
                  query={highlights.map((highlight) => t(`about:highlights.${highlight}`))}
                  styles={{ fontWeight: 600 }}
                >
                  {t(`about:paragraphs.${id}`) || id}
                </Highlight>
              </p>
            ))}
            <ul className={List}>
              {knowledges.map((knowledge) => (
                <li key={knowledge} className={ListItem}>
                  <FaChevronRight size={12} className={ListItemIcon} />
                  <p className={ListItemText}>
                    <span className={ListItemPrefix}>
                      {t(`about:knowledges.${knowledge}.title`)}:
                    </span>{' '}
                    {t(`about:knowledges.${knowledge}.summary`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={Boxes}>
            <div className={BoxesGroup}>
              <HardSkills />
              <SoftSkills />
            </div>
            <div className={BoxesGroup}>
              <TechsTools />
              <Languages />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
