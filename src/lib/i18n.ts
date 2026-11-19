import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLocale, locales } from '@lib/locales';
import { metaCopy } from '@lib/meta';

import enAbout from '../../public/locales/en/about.json';
import enCommon from '../../public/locales/en/common.json';
import enDataDrivenSeo from '../../public/locales/en/data-driven-seo.json';
import enEducation from '../../public/locales/en/education.json';
import enEvents from '../../public/locales/en/events.json';
import enExperience from '../../public/locales/en/experience.json';
import enFrontEndAi from '../../public/locales/en/front-end-ai.json';
import enHardSkills from '../../public/locales/en/hard-skills.json';
import enHero from '../../public/locales/en/hero.json';
import enMenu from '../../public/locales/en/menu.json';
import enProjects from '../../public/locales/en/projects.json';
import enSoftSkills from '../../public/locales/en/soft-skills.json';
import ptAbout from '../../public/locales/pt-BR/about.json';
import ptCommon from '../../public/locales/pt-BR/common.json';
import ptDataDrivenSeo from '../../public/locales/pt-BR/data-driven-seo.json';
import ptEducation from '../../public/locales/pt-BR/education.json';
import ptEvents from '../../public/locales/pt-BR/events.json';
import ptExperience from '../../public/locales/pt-BR/experience.json';
import ptFrontEndAi from '../../public/locales/pt-BR/front-end-ai.json';
import ptHardSkills from '../../public/locales/pt-BR/hard-skills.json';
import ptHero from '../../public/locales/pt-BR/hero.json';
import ptMenu from '../../public/locales/pt-BR/menu.json';
import ptProjects from '../../public/locales/pt-BR/projects.json';
import ptSoftSkills from '../../public/locales/pt-BR/soft-skills.json';

export const namespaces = [
  'common',
  'meta',
  'menu',
  'hero',
  'about',
  'hard-skills',
  'soft-skills',
  'data-driven-seo',
  'front-end-ai',
  'experience',
  'projects',
  'education',
  'events',
] as const;

const resources = {
  'pt-BR': {
    about: ptAbout,
    common: ptCommon,
    'data-driven-seo': ptDataDrivenSeo,
    education: ptEducation,
    events: ptEvents,
    experience: ptExperience,
    'front-end-ai': ptFrontEndAi,
    'hard-skills': ptHardSkills,
    hero: ptHero,
    menu: ptMenu,
    meta: metaCopy['pt-BR'],
    projects: ptProjects,
    'soft-skills': ptSoftSkills,
  },
  en: {
    about: enAbout,
    common: enCommon,
    'data-driven-seo': enDataDrivenSeo,
    education: enEducation,
    events: enEvents,
    experience: enExperience,
    'front-end-ai': enFrontEndAi,
    'hard-skills': enHardSkills,
    hero: enHero,
    menu: enMenu,
    meta: metaCopy.en,
    projects: enProjects,
    'soft-skills': enSoftSkills,
  },
};

export const createI18n = (locale: string) => {
  const instance = i18n.createInstance();

  instance.use(initReactI18next).init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: [...locales],
    resources,
    ns: [...namespaces],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    initImmediate: false,
    react: { useSuspense: false },
  });

  return instance;
};
