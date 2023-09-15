import React from 'react';
import { useTranslation } from 'next-i18next';

import { useLangSelector } from './hooks/useLangSelector';
import { LangSelectorProps } from './types';

import { Container, Input, Option } from './styles.css';

export const LangSelector = ({ id, style }: LangSelectorProps) => {
  const { t } = useTranslation('common');

  const { locale, handleLangChange } = useLangSelector();

  return (
    <>
      <div className={Container}>
        <label htmlFor={id} style={{ color: '#fff', fontSize: 0 }}>
          {t('language')}
        </label>
        <select
          name="lang_selector"
          id={id}
          className={Input}
          defaultValue={locale}
          onChange={handleLangChange}
          style={style}
        >
          <option value="en-US" className={Option}>
            {t('english')}
          </option>
          <option value="pt-BR" className={Option}>
            {t('portuguese')}
          </option>
        </select>
      </div>
    </>
  );
};
