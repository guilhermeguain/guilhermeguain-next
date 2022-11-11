import React from 'react';
import { IconType } from 'react-icons';

export type AppContextProps = {
  lang: LangProps;
  content: ContentProps;
  setLang: React.Dispatch<React.SetStateAction<LangProps>>;
  setContent: React.Dispatch<React.SetStateAction<ContentProps>>;
};

export type LangProps = 'en-US' | 'pt-BR';

export type ContentProps = {
  meta: {
    title: string;
    desc: string;
  };
  menu: {
    items: MenuItemProps[];
  };
  hero: {
    name: string;
    role: string;
    desc: string;
  };
  about: {
    name: string;
    role: string;
    contacts: ContactProps[];
    paragraphs: ParagraphProps[];
    knowledges: KnowledgesProps[];
    hardSkills: SkillProps[];
    softSkills: SkillProps[];
    techsTools: {
      title: string;
      primary: string;
      secondary: string;
      design: string;
    };
    languages: {
      title: string;
      items: LanguageProps[];
    };
  };
  dataDrivenSeo: {
    title: string;
    items: DataDrivenSeoItemProps[];
  };
  experiences: ExperienceProps[];
  projects: {
    title: string;
    items: ProjectProps[];
  };
  education: {
    title: string;
    items: EducationProps[];
  };
  events: {
    title: string;
    items: EventProps[];
  };
};

export type MenuItemProps = {
  label: string;
  href: string;
};

export type ContactProps = {
  icon: IconType;
  url: string;
  alt: string;
};

export type ParagraphProps = {
  highlights: string[];
  text: string;
};

export type KnowledgesProps = {
  area: string;
  summary: string;
};

export type SkillProps = {
  slug: string;
  label: string;
  value: number;
};

export type LanguageProps = {
  code: string;
  name: string;
  proficiency: ProfficiencyProps[];
};

export type ProfficiencyProps = {
  label: string;
  value: number;
};

export type DataDrivenSeoItemProps = {
  id: string;
  title: string;
  icon: IconType;
  items: string[];
};

export type ExperienceProps = {
  role: string;
  company: string;
  period: string;
  badges: BadgeProps[];
  summary: string;
};

export type BadgeProps = {
  id: string;
  title: string;
  color: string;
  icon: IconType;
};

export type ProjectProps = {
  id: string;
  title: string;
  link: string;
};

export type EducationProps = {
  title: string;
  institution: string;
  period: string;
  location: string;
};

export type EventProps = {
  title: string;
  host: string;
  date: string;
  location: string;
};
