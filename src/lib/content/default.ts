import { menu } from './menu';
import { contacts } from './contacts';
import { hardSkills } from './hardSkills';
import { softSkills } from './softSkills';
import { languages } from './languages';
import { dataDrivenSeo } from './dataDrivenSeo';
import { experiences } from './experiences';
import { projects } from './projects';

import labels from './labels/en-US.json';

export const content = {
  meta: {
    title: labels.meta.title,
    desc: labels.meta.desc,
  },
  menu: {
    items: menu.map(({ id, href }) => ({
      label: labels.menu.items.find((item) => item.id === id)?.label || '',
      href,
    })),
  },
  hero: {
    name: labels.hero.name,
    role: labels.hero.role,
    desc: labels.hero.desc,
  },
  about: {
    name: labels.about.name,
    role: labels.about.role,
    contacts: contacts.map(({ id, icon, url }) => ({
      icon,
      url,
      alt: labels.about.contacts.find((contact) => contact.id === id)?.label || '',
    })),
    paragraphs: labels.about.paragraphs,
    knowledges: labels.about.knowledges,
    hardSkills: hardSkills.map(({ id, value }) => ({
      slug: id,
      label: labels.about.hardSkills.find((hardSkill) => hardSkill.id === id)?.label || '',
      value,
    })),
    softSkills: softSkills.map(({ id, value }) => ({
      slug: id,
      label: labels.about.softSkills.find((softSkill) => softSkill.id === id)?.label || '',
      value,
    })),
    techsTools: {
      title: labels.about.techsTools.title,
      primary: labels.about.techsTools.primary,
      secondary: labels.about.techsTools.secondary,
      design: labels.about.techsTools.design,
    },
    languages: {
      title: labels.about.languages.title,
      items: languages.map(({ id, proficiency }) => ({
        code: id,
        name: labels.about.languages.items.find((language) => language.id === id)?.label || '',
        proficiency: proficiency.map(({ id, value }) => ({
          id,
          label: labels.about.languages.proficiencies.find((item) => item.id === id)?.label || '',
          value,
        })),
      })),
    },
  },
  dataDrivenSeo: {
    title: labels.dataDrivenSeo.title,
    items: dataDrivenSeo.map(({ id, icon }) => {
      const selectedItem = labels.dataDrivenSeo.items.find((item) => item.id === id);

      return {
        id,
        title: selectedItem?.label || '',
        icon,
        items: selectedItem?.items || [],
      };
    }),
  },
  experiences: experiences.map(({ id, badges }) => {
    const selectedItem = labels.experiences.find((item) => item.id === id);

    return {
      role: selectedItem?.role || '',
      company: selectedItem?.company || '',
      period: selectedItem?.period || '',
      badges,
      summary: selectedItem?.summary || '',
    };
  }),
  projects: {
    title: labels.projects.title,
    items: projects.map(({ id, link }) => ({
      id,
      title: labels.projects.items.find((item) => item.id === id)?.label || '',
      link,
    })),
  },
  education: {
    title: labels.education.title,
    items: labels.education.items,
  },
  events: {
    title: labels.events.title,
    items: labels.events.items,
  },
};
