'use client';

import NextImage from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

import { Highlight } from '@/utils/highlight';

import { List, ListItem, ListItemIcon, ListItemPrefix, ListItemText } from '@/styles/layout.css';

import { HardSkills } from '@/components/HardSkills';
import { SoftSkills } from '@/components/SoftSkills';
import { TechsTools } from '@/components/TechsTools';
import { Languages } from '@/components/Languages';

import { useAbout } from './hooks/useAbout';
import {
  Container,
  Intro,
  Avatar,
  IntroContent,
  Name,
  Role,
  Contacts,
  ContactsItemSvg,
  Main,
  Column,
  Text,
  Boxes,
  BoxesGroup,
} from './styles.css';

export const About = () => {
  const { contacts, paragraphs, knowledges, handleLinkClick } = useAbout();

  return (
    <section id="about" className={Container}>
      <div className={Intro}>
        <NextImage
          src="/images/guilherme-guain.webp"
          alt="Guilherme Guain"
          title="Guilherme Guain"
          width={128}
          height={128}
          className={Avatar}
        />
        <div className={IntroContent}>
          <h3 className={Name}>Guilherme Emilio Guain Peixinho</h3>
          <h2 className={Role}>Desenvolvedor Front-end</h2>
          <ul className={Contacts}>
            {contacts.map(({ id, icon: Icon, label, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  data-id={id}
                  onClick={handleLinkClick}
                  rel="noreferrer"
                >
                  <Icon title={label} size={24} className={ContactsItemSvg} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Main}>
        <div className={Column}>
          {paragraphs.map(({ id, highlights, text }) => (
            <p key={id} className={Text}>
              <Highlight query={highlights} styles={{ fontWeight: 600 }}>
                {text}
              </Highlight>
            </p>
          ))}
          <ul className={List}>
            {knowledges.map(({ title, summary }) => (
              <li key={title} className={ListItem}>
                <FaChevronRight size={12} className={ListItemIcon} />
                <p className={ListItemText}>
                  <span className={ListItemPrefix}>{title}:</span> {summary}
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
  );
};
